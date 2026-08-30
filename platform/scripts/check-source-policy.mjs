import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const platformRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repositoryRoot = path.dirname(platformRoot);
const sourceRoots = ["apps", "packages"];
const sourceExtensions = new Set([".css", ".ts", ".tsx"]);
const ignoredDirectories = new Set([".next", "coverage", "dist", "node_modules"]);
const forbiddenPatterns = [
  { pattern: /@ts-(?:ignore|nocheck)/u, reason: "TypeScript suppression is prohibited" },
  { pattern: /\blocalStorage\b/u, reason: "LocalStorage persistence is outside the production architecture" },
];
const prototypeRoots = new Set([".ai", "content", "core", "features", "release"]);
const relativeImportPattern = /(?:from\s+|import\s*)["'](\.{1,2}\/[^"']+)["']/gu;

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(entryPath)));
    } else if (entry.isFile() && sourceExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }

  return files;
}

const files = (
  await Promise.all(sourceRoots.map((root) => collectFiles(path.join(platformRoot, root))))
).flat();
const failures = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  for (const rule of forbiddenPatterns) {
    if (rule.pattern.test(source)) {
      failures.push(`${path.relative(platformRoot, file)}: ${rule.reason}`);
    }
  }

  for (const match of source.matchAll(relativeImportPattern)) {
    const specifier = match[1];
    if (specifier === undefined) {
      continue;
    }

    const target = path.resolve(path.dirname(file), specifier);
    const repositoryPath = path.relative(repositoryRoot, target);
    const [rootSegment] = repositoryPath.split(path.sep);
    if (!repositoryPath.startsWith("..") && rootSegment !== undefined && prototypeRoots.has(rootSegment)) {
      failures.push(
        `${path.relative(platformRoot, file)}: Prototype Zero import ${specifier} is prohibited`,
      );
    }
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(failure);
  }
  process.exitCode = 1;
} else {
  console.info(`Source policy passed for ${files.length} files`);
}
