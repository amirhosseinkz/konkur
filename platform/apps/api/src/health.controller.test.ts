import { describe, expect, it } from "vitest";

import { HealthController } from "./health.controller.js";

describe("HealthController", () => {
  const controller = new HealthController({
    check: async () => undefined,
  } as never);

  it("reports a healthy deterministic core", () => {
    const health = controller.health();

    expect(health.status).toBe("ok");
    expect(health.ai.required_for_core_flows).toBe(false);
  });

  it("exposes an explicit no-AI status", () => {
    expect(controller.noAi()).toEqual({
      enabled: false,
      required_for_core_flows: false,
      mode: "deterministic",
    });
  });

  it("checks PostgreSQL before reporting readiness", async () => {
    await expect(controller.ready()).resolves.toMatchObject({ status: "ok" });
  });
});
