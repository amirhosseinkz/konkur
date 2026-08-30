import type { Pool } from "pg";

import type { AdminAuth } from "./auth.js";

export const adminCapabilities = [
  "support:read",
  "content:edit",
  "content:review",
  "content:publish",
  "content:rollback",
  "commerce:refund",
  "data:export",
  "identity:grant",
  "audit:read",
] as const;

export type AdminCapability = (typeof adminCapabilities)[number];

export const ADMIN_STEP_UP_MAX_AGE_MS = 15 * 60 * 1_000;

const stepUpCapabilities = new Set<AdminCapability>([
  "content:publish",
  "content:rollback",
  "commerce:refund",
  "data:export",
  "identity:grant",
]);

export interface AdminAuthenticationEvidence {
  audience: unknown;
  createdAt: Date | string;
  mfaVerifiedAt?: Date | string | null | undefined;
}

export class AdminAuthenticationRequiredError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = "AdminAuthenticationRequiredError";
  }
}

export class AdminCapabilityRequiredError extends Error {
  public constructor(capability: AdminCapability) {
    super(`Admin capability is required: ${capability}`);
    this.name = "AdminCapabilityRequiredError";
  }
}

function timestamp(value: Date | string): number {
  return value instanceof Date ? value.getTime() : new Date(value).getTime();
}

export function assertAdminAuthentication(
  evidence: AdminAuthenticationEvidence,
  options: { now: Date; requireRecentAuthentication: boolean },
): void {
  if (evidence.audience !== "admin") {
    throw new AdminAuthenticationRequiredError(
      "The current session does not have the Admin audience",
    );
  }

  if (evidence.mfaVerifiedAt == null) {
    throw new AdminAuthenticationRequiredError(
      "Admin multi-factor authentication is required",
    );
  }

  const createdAt = timestamp(evidence.createdAt);
  const mfaVerifiedAt = timestamp(evidence.mfaVerifiedAt);
  const now = options.now.getTime();

  if (
    !Number.isFinite(createdAt) ||
    !Number.isFinite(mfaVerifiedAt) ||
    mfaVerifiedAt < createdAt ||
    mfaVerifiedAt > now
  ) {
    throw new AdminAuthenticationRequiredError(
      "Invalid current-session MFA evidence",
    );
  }

  if (
    options.requireRecentAuthentication &&
    now - mfaVerifiedAt > ADMIN_STEP_UP_MAX_AGE_MS
  ) {
    throw new AdminAuthenticationRequiredError(
      "Recent step-up authentication is required",
    );
  }
}

export interface AuthorizeAdminRequestOptions {
  auth: AdminAuth;
  database: Pool;
  headers: Headers;
  capability: AdminCapability;
}

export interface AuthorizedAdminPrincipal {
  userId: string;
  sessionId: string;
  capability: AdminCapability;
}

export async function authorizeAdminRequest(
  options: AuthorizeAdminRequestOptions,
): Promise<AuthorizedAdminPrincipal> {
  const resolved = await options.auth.api.getSession({
    headers: options.headers,
  });

  if (resolved === null) {
    throw new AdminAuthenticationRequiredError(
      "A live Admin session is required",
    );
  }

  assertAdminAuthentication(resolved.session, {
    now: new Date(),
    requireRecentAuthentication: stepUpCapabilities.has(options.capability),
  });

  const grant = await options.database.query<{ present: number }>(
    `select 1 as present
       from identity.admin_grants
      where "adminUserId" = $1
        and capability = $2
        and "revokedAt" is null
        and ("expiresAt" is null or "expiresAt" > now())
      limit 1`,
    [resolved.user.id, options.capability],
  );

  if (grant.rowCount !== 1) {
    throw new AdminCapabilityRequiredError(options.capability);
  }

  return {
    userId: resolved.user.id,
    sessionId: resolved.session.id,
    capability: options.capability,
  };
}
