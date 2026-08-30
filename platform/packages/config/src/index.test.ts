import { describe, expect, it } from "vitest";

import { apiEnvironmentSchema, workerEnvironmentSchema } from "./index.js";

const databaseUrl = "postgresql://konkur:test@localhost:5432/konkur";

describe("runtime environment", () => {
  it("accepts an explicitly AI-free worker", () => {
    const result = workerEnvironmentSchema.parse({
      DATABASE_URL: databaseUrl,
      AI_ENABLED: "false",
    });

    expect(result.AI_ENABLED).toBe("false");
  });

  it("rejects enabling an AI dependency in the foundation", () => {
    expect(() =>
      workerEnvironmentSchema.parse({
        DATABASE_URL: databaseUrl,
        AI_ENABLED: "true",
      }),
    ).toThrow();
  });

  it("requires verified database TLS for a production worker", () => {
    expect(() =>
      workerEnvironmentSchema.parse({
        NODE_ENV: "production",
        DATABASE_URL: databaseUrl,
        AI_ENABLED: "false",
      }),
    ).toThrow();
  });

  it("rejects shared learner and Admin secrets", () => {
    const sharedSecret = "shared-auth-fixture-aaaaaaaaaaaaaaaa";

    expect(() =>
      apiEnvironmentSchema.parse({
        DATABASE_URL: databaseUrl,
        LEARNER_AUTH_BASE_URL: "https://learner.example.com",
        LEARNER_AUTH_SECRET: sharedSecret,
        ADMIN_AUTH_BASE_URL: "https://admin.example.com",
        ADMIN_AUTH_SECRET: sharedSecret,
      }),
    ).toThrow();
  });

  it("requires HTTPS auth boundaries in production", () => {
    expect(() =>
      apiEnvironmentSchema.parse({
        NODE_ENV: "production",
        DATABASE_URL: databaseUrl,
        LEARNER_AUTH_BASE_URL: "http://learner.example.com",
        LEARNER_AUTH_SECRET: "learner-auth-fixture-aaaaaaaaaaaaaaaa",
        ADMIN_AUTH_BASE_URL: "https://admin.example.com",
        ADMIN_AUTH_SECRET: "admin-auth-fixture-bbbbbbbbbbbbbbbb",
      }),
    ).toThrow();
  });

  it("rejects committed placeholder secrets", () => {
    expect(() =>
      apiEnvironmentSchema.parse({
        DATABASE_URL: databaseUrl,
        LEARNER_AUTH_BASE_URL: "http://localhost:3000",
        LEARNER_AUTH_SECRET: "replace-with-at-least-32-characters",
        ADMIN_AUTH_BASE_URL: "http://localhost:3001",
        ADMIN_AUTH_SECRET: "replace-with-a-different-32-char-secret",
      }),
    ).toThrow();
  });

  it("accepts isolated TLS production boundaries", () => {
    const result = apiEnvironmentSchema.parse({
      NODE_ENV: "production",
      DATABASE_URL:
        "postgresql://konkur:opaque@database.example.com:5432/konkur?sslmode=verify-full",
      LEARNER_AUTH_BASE_URL: "https://learner.example.com",
      LEARNER_AUTH_SECRET: "learner-auth-fixture-aaaaaaaaaaaaaaaa",
      ADMIN_AUTH_BASE_URL: "https://admin.example.com",
      ADMIN_AUTH_SECRET: "admin-auth-fixture-bbbbbbbbbbbbbbbb",
    });

    expect(result.NODE_ENV).toBe("production");
  });
});
