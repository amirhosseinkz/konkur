import { telemetry } from "./instrumentation.js";

import { parseWorkerEnvironment } from "@konkur/config";
import { run } from "graphile-worker";

import { taskList } from "./tasks.js";

const environment = parseWorkerEnvironment(process.env);

const runner = await run({
  connectionString: environment.DATABASE_URL,
  concurrency: 5,
  noHandleSignals: true,
  taskList,
});

const shutdown = async () => {
  await runner.stop();
  await telemetry.shutdown();
};

process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);
