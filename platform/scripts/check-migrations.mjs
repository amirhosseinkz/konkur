import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const platformRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const migrationDirectory = path.join(
  platformRoot,
  "packages",
  "database",
  "src",
  "migrations",
);
const migrationFiles = (await readdir(migrationDirectory))
  .filter((file) => file.endsWith(".ts"))
  .sort();
const failures = [];
const prefixes = new Set();

if (migrationFiles.length === 0) {
  failures.push("At least one migration is required");
}

for (const file of migrationFiles) {
  const match = /^(\d{3})_[a-z0-9_]+\.ts$/u.exec(file);
  if (match === null) {
    failures.push(`${file}: migration name must match NNN_description.ts`);
    continue;
  }

  const prefix = match[1];
  if (prefix === undefined || prefixes.has(prefix)) {
    failures.push(`${file}: migration sequence must be unique`);
  } else {
    prefixes.add(prefix);
  }

  const source = await readFile(path.join(migrationDirectory, file), "utf8");
  if (!/export async function up\(/u.test(source)) {
    failures.push(`${file}: missing exported up migration`);
  }
  if (!/export async function down\(/u.test(source)) {
    failures.push(`${file}: missing exported down migration`);
  }
  if (/\.ifNotExists\(\)/u.test(source)) {
    failures.push(`${file}: migrations must fail on unexpected pre-existing objects`);
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(failure);
  }
  process.exitCode = 1;
} else {
  console.info(`Migration policy passed for ${migrationFiles.length} migration(s)`);
}
