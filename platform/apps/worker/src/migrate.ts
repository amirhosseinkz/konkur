import { parseWorkerEnvironment } from "@konkur/config";
import { runMigrations } from "graphile-worker";

const environment = parseWorkerEnvironment(process.env);

await runMigrations({ connectionString: environment.DATABASE_URL });
