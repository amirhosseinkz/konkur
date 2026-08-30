import { Kysely, PostgresDialect, sql } from "kysely";
import { Pool } from "pg";

import type { PlatformDatabase } from "./types.js";

export function createDatabase(connectionString: string): Kysely<PlatformDatabase> {
  return new Kysely<PlatformDatabase>({
    dialect: new PostgresDialect({
      pool: new Pool({
        connectionString,
        max: 10,
      }),
    }),
  });
}

export async function pingDatabase(
  database: Kysely<PlatformDatabase>,
): Promise<void> {
  await sql`select 1`.execute(database);
}
