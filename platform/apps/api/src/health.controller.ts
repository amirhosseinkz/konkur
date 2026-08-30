import { Controller, Get } from "@nestjs/common";
import {
  healthResponseSchema,
  noAiStatusSchema,
  type HealthResponse,
  type NoAiStatus,
} from "@konkur/contracts";

import { DatabaseReadiness } from "./database-readiness.js";

const noAiStatus = noAiStatusSchema.parse({
  enabled: false,
  required_for_core_flows: false,
  mode: "deterministic",
});

@Controller("v1")
export class HealthController {
  public constructor(private readonly databaseReadiness: DatabaseReadiness) {}

  @Get("health")
  public health(): HealthResponse {
    return healthResponseSchema.parse({
      status: "ok",
      service: "konkur-api",
      timestamp: new Date().toISOString(),
      ai: noAiStatus,
    });
  }

  @Get("status/no-ai")
  public noAi(): NoAiStatus {
    return noAiStatus;
  }

  @Get("ready")
  public async ready(): Promise<HealthResponse> {
    await this.databaseReadiness.check();
    return this.health();
  }
}
