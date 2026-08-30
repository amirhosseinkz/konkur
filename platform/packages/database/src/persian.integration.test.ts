import { randomUUID } from "node:crypto";
import { performance } from "node:perf_hooks";

import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import {
  down as downSearchMigration,
  up as upSearchMigration,
} from "./migrations/004_search_spike.js";
import {
  persianSearchSql,
  searchPersianDocuments,
  type PersianSearchExecutor,
} from "./persian.js";

const connectionString = process.env.DATABASE_URL;
const describePostgres = connectionString === undefined ? describe.skip : describe;
const documentIds: string[] = [];
let pool: Pool;
let migrationDatabase: Kysely<unknown>;
let schemaCreatedByTest = false;

describePostgres("Persian PostgreSQL search spike", () => {
  beforeAll(async () => {
    pool = new Pool({ connectionString, max: 4 });
    migrationDatabase = new Kysely<unknown>({
      dialect: new PostgresDialect({
        pool: new Pool({ connectionString, max: 2 }),
      }),
    });
    const existing = await pool.query<{ table_name: string | null }>(
      "SELECT to_regclass('search.documents')::text AS table_name",
    );
    if (existing.rows[0]?.table_name === null) {
      await upSearchMigration(migrationDatabase);
      schemaCreatedByTest = true;
    }
  });

  afterAll(async () => {
    if (!schemaCreatedByTest && documentIds.length > 0) {
      await pool.query("DELETE FROM search.documents WHERE document_id = ANY($1::uuid[])", [
        documentIds,
      ]);
    }
    if (schemaCreatedByTest) {
      await downSearchMigration(migrationDatabase);
    }
    await migrationDatabase.destroy();
    await pool.end();
  });

  it("normalizes mixed script and applies access scope before returning results", async () => {
    const learnerId = randomUUID();
    const otherLearnerId = randomUUID();
    const publicId = await insertDocument(
      "public",
      null,
      "شبكه هاي كامپيوتري ۱۲۳",
      "Graph الگوريتم",
    );
    const ownId = await insertDocument(
      "learner",
      learnerId,
      "یادداشت شبکه کامپیوتری 123",
      "مرور شخصی",
    );
    const otherId = await insertDocument(
      "learner",
      otherLearnerId,
      "شبکه کامپیوتری ۱۲۳",
      "نباید افشا شود",
    );
    const adminId = await insertDocument(
      "admin",
      null,
      "شبکه کامپیوتری 123",
      "بازبینی داخلی",
    );
    const executor = searchExecutor();

    const publicResults = await searchPersianDocuments(
      executor,
      { kind: "public" },
      "شبکه کامپیوتری ١٢٣",
    );
    expect(publicResults.map((result) => result.documentId)).toEqual([publicId]);

    const learnerResults = await searchPersianDocuments(
      executor,
      { kind: "learner", learnerId },
      "شبکه کامپیوتری 123",
    );
    expect(new Set(learnerResults.map((result) => result.documentId))).toEqual(
      new Set([publicId, ownId]),
    );
    expect(learnerResults.map((result) => result.documentId)).not.toContain(otherId);
    expect(learnerResults.map((result) => result.documentId)).not.toContain(adminId);

    const adminResults = await searchPersianDocuments(
      executor,
      { kind: "admin" },
      "شبکه کامپیوتری 123",
    );
    expect(new Set(adminResults.map((result) => result.documentId))).toEqual(
      new Set([publicId, adminId]),
    );
  });

  it("uses a GIN search path and stays within the 400ms spike budget", async () => {
    const corpusPrefix = randomUUID();
    const corpusIds = await pool.query<{ document_id: string }>(
      `INSERT INTO search.documents
        (document_id, access_scope, owner_id, title, body, source_revision)
       SELECT md5($1 || series::text)::uuid,
              'public',
              NULL,
              CASE WHEN series % 2 = 0
                THEN 'ساختمان داده و الگوریتم ' || series::text
                ELSE 'Computer networks پایگاه داده ' || series::text
              END,
              CASE WHEN series % 3 = 0
                THEN 'تحلیل پیچیدگی graph traversal'
                ELSE 'سیستم عامل معماری کامپیوتر'
              END,
              1
         FROM generate_series(1, 12000) AS series
       RETURNING document_id`,
      [corpusPrefix],
    );
    documentIds.push(...corpusIds.rows.map((row) => row.document_id));
    const targetId = await insertDocument(
      "public",
      null,
      "الگوريتم ژنتيك كوانتومي ناياب",
      "RareGraphNeedle ۹۸۷۶۵",
    );
    await pool.query("VACUUM (ANALYZE) search.documents");

    const values: readonly unknown[] = [
      "الگوریتم ژنتیک کوانتومی نایاب",
      "public",
      null,
      20,
    ];
    const planResult = await pool.query<{ "QUERY PLAN": unknown }>(
      `EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) ${persianSearchSql}`,
      [...values],
    );
    const plan = planResult.rows[0]?.["QUERY PLAN"];
    const serializedPlan = JSON.stringify(plan);
    expect(serializedPlan).toMatch(
      /search_documents_(vector|trigram)_idx|Bitmap Index Scan/u,
    );

    const startedAt = performance.now();
    const results = await searchPersianDocuments(
      searchExecutor(),
      { kind: "public" },
      "الگوریتم ژنتیک کوانتومی نایاب",
    );
    const latencyMs = performance.now() - startedAt;
    expect(results[0]?.documentId).toBe(targetId);
    expect(latencyMs).toBeLessThan(400);

    const executionTime = readExecutionTime(plan);
    expect(executionTime).toBeLessThan(400);
  }, 30_000);
});

function searchExecutor(): PersianSearchExecutor {
  return {
    query: async <Row>(text: string, values: readonly unknown[]) => {
      const result = await pool.query<Row & Record<string, unknown>>(text, [
        ...values,
      ]);
      return { rows: result.rows };
    },
  };
}

async function insertDocument(
  accessScope: "public" | "learner" | "admin",
  ownerId: string | null,
  title: string,
  body: string,
): Promise<string> {
  const documentId = randomUUID();
  documentIds.push(documentId);
  await pool.query(
    `INSERT INTO search.documents
      (document_id, access_scope, owner_id, title, body, source_revision)
     VALUES ($1, $2, $3, $4, $5, 1)`,
    [documentId, accessScope, ownerId, title, body],
  );
  return documentId;
}

function readExecutionTime(plan: unknown): number {
  if (!Array.isArray(plan)) {
    throw new Error("PostgreSQL did not return a JSON query plan");
  }
  const first = plan[0];
  if (
    typeof first !== "object" ||
    first === null ||
    !("Execution Time" in first) ||
    typeof first["Execution Time"] !== "number"
  ) {
    throw new Error("PostgreSQL query plan omitted execution time");
  }
  return first["Execution Time"];
}
