const arabicDiacritics = /[\u064B-\u065F\u0670\u06D6-\u06ED]/gu;
const spacing = /[\s\u200C\u200D]+/gu;

const characterMap: Readonly<Record<string, string>> = {
  "ى": "ی",
  "ي": "ی",
  "ك": "ک",
  "ۀ": "ه",
  "ة": "ه",
  "ؤ": "و",
  "إ": "ا",
  "أ": "ا",
  "ٱ": "ا",
};

const digitMap: Readonly<Record<string, string>> = {
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
};

export interface PersianSearchAccess {
  readonly kind: "public" | "learner" | "admin";
  readonly learnerId?: string;
}

export interface PersianSearchDocument {
  readonly documentId: string;
  readonly accessScope: "public" | "learner" | "admin";
  readonly title: string;
  readonly rank: number;
}

interface PersianSearchRow {
  readonly document_id: string;
  readonly access_scope: "public" | "learner" | "admin";
  readonly title: string;
  readonly rank: number;
}

interface QueryResult<Row> {
  readonly rows: readonly Row[];
}

export interface PersianSearchExecutor {
  query<Row>(text: string, values: readonly unknown[]): Promise<QueryResult<Row>>;
}

export const persianSearchSql = `
WITH matches AS (
  SELECT documents.*
    FROM search.documents
   WHERE (
           access_scope = 'public'
           OR ($2 = 'learner' AND access_scope = 'learner' AND owner_id = $3::uuid)
           OR ($2 = 'admin' AND access_scope = 'admin')
         )
     AND search_vector @@ websearch_to_tsquery('simple', $1)
  UNION ALL
  SELECT documents.*
    FROM search.documents
   WHERE (
           access_scope = 'public'
           OR ($2 = 'learner' AND access_scope = 'learner' AND owner_id = $3::uuid)
           OR ($2 = 'admin' AND access_scope = 'admin')
         )
     AND normalized_text % $1
     AND NOT search_vector @@ websearch_to_tsquery('simple', $1)
)
SELECT document_id,
       access_scope,
       title,
       (ts_rank_cd(search_vector, websearch_to_tsquery('simple', $1)) + similarity(normalized_text, $1))::real AS rank
  FROM matches
 ORDER BY rank DESC, document_id
 LIMIT $4
`;

const persianLearnerSearchSql = `
SELECT document_id, access_scope, title, rank
  FROM search.query_learner_documents($1, $2::uuid, $3)
`;

export function normalizePersianSearchText(value: string): string {
  return value
    .normalize("NFKC")
    .replaceAll("ـ", "")
    .replace(arabicDiacritics, "")
    .replace(/[ىيكةۀؤإأٱ]/gu, (character) => characterMap[character] ?? character)
    .replace(/[٠-٩۰-۹]/gu, (digit) => digitMap[digit] ?? digit)
    .replace(spacing, " ")
    .trim()
    .toLocaleLowerCase("fa-IR");
}

export async function searchPersianDocuments(
  executor: PersianSearchExecutor,
  access: PersianSearchAccess,
  query: string,
  limit = 20,
): Promise<readonly PersianSearchDocument[]> {
  const normalizedQuery = normalizePersianSearchText(query);
  if (normalizedQuery.length === 0) {
    return [];
  }
  if (!Number.isSafeInteger(limit) || limit < 1 || limit > 50) {
    throw new RangeError("Search limit must be between 1 and 50");
  }
  if (
    access.kind !== "public" &&
    access.kind !== "learner" &&
    access.kind !== "admin"
  ) {
    throw new TypeError("Unknown search access context");
  }
  if (
    access.kind === "learner" &&
    (access.learnerId === undefined || access.learnerId.length === 0)
  ) {
    throw new TypeError("Learner search requires a server-derived learner ID");
  }

  const result =
    access.kind === "learner"
      ? await executor.query<PersianSearchRow>(persianLearnerSearchSql, [
          normalizedQuery,
          access.learnerId,
          limit,
        ])
      : await executor.query<PersianSearchRow>(persianSearchSql, [
          normalizedQuery,
          access.kind,
          null,
          limit,
        ]);
  return result.rows.map((row) => ({
    documentId: row.document_id,
    accessScope: row.access_scope,
    title: row.title,
    rank: row.rank,
  }));
}
