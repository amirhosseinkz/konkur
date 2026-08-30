import { promises as fs } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  FileMigrationProvider,
  type MigrationProvider,
  Migrator,
  sql,
} from "kysely";

import { createDatabase } from "./postgres.js";

const connectionString = process.env.DATABASE_URL;

if (connectionString === undefined) {
  throw new Error("DATABASE_URL is required to run migrations");
}

const database = createDatabase(connectionString);
const migrationFolder = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "migrations",
);
const migrationFiles = (await fs.readdir(migrationFolder))
  .filter((file) => /^\d{3}_[a-z0-9_]+\.js$/u.test(file))
  .sort();
const migrationChecksums = new Map<string, string>();
for (const file of migrationFiles) {
  const source = await fs.readFile(path.join(migrationFolder, file));
  migrationChecksums.set(
    file.replace(/\.js$/u, ""),
    createHash("sha256").update(source).digest("hex"),
  );
}
const fileMigrationProvider = new FileMigrationProvider({
  fs,
  path,
  migrationFolder,
});
const checksumMigrationProvider: MigrationProvider = {
  async getMigrations() {
    const migrations = await fileMigrationProvider.getMigrations();
    return Object.fromEntries(
      Object.entries(migrations).map(([name, migration]) => {
        const checksum = migrationChecksums.get(name);
        if (checksum === undefined) {
          throw new Error(`Migration checksum is missing for ${name}`);
        }
        return [
          name,
          {
            async up(migrationDatabase) {
              await migration.up(migrationDatabase);
              await sql`
                insert into public.konkur_migration_checksums
                  (migration_name, sha256)
                values (${name}, ${checksum})
              `.execute(migrationDatabase);
            },
            ...(migration.down === undefined
              ? {}
              : {
                  async down(migrationDatabase) {
                    await migration.down!(migrationDatabase);
                    await sql`
                      delete from public.konkur_migration_checksums
                       where migration_name = ${name}
                    `.execute(migrationDatabase);
                  },
                }),
          },
        ];
      }),
    );
  },
};
const migrator = new Migrator({ db: database, provider: checksumMigrationProvider });

try {
  const direction = process.argv[2] ?? "up";
  if (direction !== "up" && direction !== "down") {
    throw new Error(`Unknown migration direction: ${direction}`);
  }
  if (process.argv.length > 3) {
    throw new Error("Migration command accepts exactly one direction");
  }

  await sql`
    create table if not exists public.konkur_migration_checksums (
      migration_name varchar(255) primary key,
      sha256 char(64) not null,
      recorded_at timestamptz not null default now(),
      constraint konkur_migration_checksums_sha256
        check (sha256 ~ '^[0-9a-f]{64}$')
    )
  `.execute(database);

  const executedBefore = await sql<{ name: string }>`
    select name
      from public.kysely_migration
     where to_regclass('public.kysely_migration') is not null
  `.execute(database).catch((error: unknown) => {
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "42P01"
    ) {
      return { rows: [] as { name: string }[] };
    }
    throw error;
  });
  const recordedChecksums = await sql<{
    migration_name: string;
    sha256: string;
  }>`select migration_name, sha256 from public.konkur_migration_checksums`.execute(
    database,
  );
  const recordedByName = new Map(
    recordedChecksums.rows.map((row) => [row.migration_name, row.sha256]),
  );

  for (const recorded of recordedChecksums.rows) {
    if (migrationChecksums.get(recorded.migration_name) !== recorded.sha256) {
      throw new Error(
        `Migration checksum verification failed for ${recorded.migration_name}`,
      );
    }
  }

  for (const migration of executedBefore.rows) {
    const expected = migrationChecksums.get(migration.name);
    const recorded = recordedByName.get(migration.name);
    if (expected === undefined || recorded === undefined || recorded !== expected) {
      throw new Error(
        `Migration checksum verification failed for ${migration.name}`,
      );
    }
  }

  const result =
    direction === "down"
      ? await migrator.migrateDown()
      : await migrator.migrateToLatest();

  for (const migration of result.results ?? []) {
    console.info(
      JSON.stringify({
        migration: migration.migrationName,
        status: migration.status,
        direction,
      }),
    );
  }

  if (result.error !== undefined) {
    throw result.error;
  }

  if ((result.results?.length ?? 0) === 0) {
    console.info(JSON.stringify({ migration: "none", direction }));
  }
} finally {
  await database.destroy();
}
