import { telemetry } from "./instrumentation.js";

import "reflect-metadata";

import { parseApiEnvironment } from "@konkur/config";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  type NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module.js";

const environment = parseApiEnvironment(process.env);

const application = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter({ logger: true }),
);

application.enableShutdownHooks();
await application.listen(environment.API_PORT, environment.API_HOST);

const shutdownTelemetry = () => telemetry.shutdown();
process.once("SIGINT", shutdownTelemetry);
process.once("SIGTERM", shutdownTelemetry);
