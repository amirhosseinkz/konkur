import { identifiers } from "@konkur/testing";
import { describe, expect, it } from "vitest";

import {
  examAutosaveRequestSchema,
  examAutosaveResponseSchema,
} from "./assessment.js";

const attemptId = "0198ec61-3d80-7000-8000-000000000005";

describe("exam autosave contract", () => {
  it("requires stable idempotency and optimistic-concurrency metadata", () => {
    const request = examAutosaveRequestSchema.parse({
      schema_version: 1,
      request_id: identifiers.requestId,
      idempotency_key: "attempt-5-sequence-12",
      actor_id: identifiers.aggregateId,
      correlation_id: identifiers.correlationId,
      issued_at: "2026-08-28T00:00:00.000Z",
      attempt_id: attemptId,
      expected_revision: 11,
      sequence: 12,
      answers: [],
    });

    expect(request.expected_revision).toBe(11);
    expect(request.sequence).toBe(12);
  });

  it("represents a duplicate as a successful prior result", () => {
    const response = examAutosaveResponseSchema.parse({
      schema_version: 1,
      request_id: identifiers.requestId,
      attempt_id: attemptId,
      outcome: "duplicate",
      revision: 12,
      saved_at: "2026-08-28T00:00:01.000Z",
    });

    expect(response.outcome).toBe("duplicate");
    expect(response.revision).toBe(12);
  });

  it("rejects non-v7 boundary identifiers", () => {
    expect(() =>
      examAutosaveRequestSchema.parse({
        schema_version: 1,
        request_id: "de305d54-75b4-431b-adb2-eb6b9e546014",
        idempotency_key: "attempt-5-sequence-12",
        actor_id: identifiers.aggregateId,
        correlation_id: identifiers.correlationId,
        issued_at: "2026-08-28T00:00:00.000Z",
        attempt_id: attemptId,
        expected_revision: 11,
        sequence: 12,
        answers: [],
      }),
    ).toThrow();
  });
});
