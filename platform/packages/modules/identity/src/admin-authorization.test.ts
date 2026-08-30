import { describe, expect, it } from "vitest";

import {
  ADMIN_STEP_UP_MAX_AGE_MS,
  AdminAuthenticationRequiredError,
  assertAdminAuthentication,
} from "./admin-authorization.js";

const now = new Date("2026-08-28T12:00:00.000Z");

describe("assertAdminAuthentication", () => {
  it("rejects non-Admin session audiences", () => {
    expect(() =>
      assertAdminAuthentication(
        {
          audience: "learner",
          createdAt: now,
          mfaVerifiedAt: now,
        },
        { now, requireRecentAuthentication: false },
      ),
    ).toThrow(AdminAuthenticationRequiredError);
  });

  it("requires Admin MFA", () => {
    expect(() =>
      assertAdminAuthentication(
        {
          audience: "admin",
          createdAt: now,
          mfaVerifiedAt: null,
        },
        { now, requireRecentAuthentication: false },
      ),
    ).toThrow("multi-factor");
  });

  it("enforces recent step-up evidence", () => {
    expect(() =>
      assertAdminAuthentication(
        {
          audience: "admin",
          createdAt: new Date("2026-08-28T10:00:00.000Z"),
          mfaVerifiedAt: new Date(
            now.getTime() - ADMIN_STEP_UP_MAX_AGE_MS - 1,
          ),
        },
        { now, requireRecentAuthentication: true },
      ),
    ).toThrow("step-up");
  });

  it("rejects MFA evidence copied from an older session", () => {
    expect(() =>
      assertAdminAuthentication(
        {
          audience: "admin",
          createdAt: now,
          mfaVerifiedAt: new Date(now.getTime() - 1),
        },
        { now, requireRecentAuthentication: false },
      ),
    ).toThrow("current-session");
  });
});
