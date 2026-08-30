import { randomUUID } from "node:crypto";

import { base32 } from "@better-auth/utils/base32";
import { createOTP } from "@better-auth/utils/otp";
import { Pool } from "pg";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  it,
} from "vitest";

import {
  AdminAuthenticationRequiredError,
  AdminCapabilityRequiredError,
  authorizeAdminRequest,
} from "./admin-authorization.js";
import { createAdminAuth, createLearnerAuth } from "./auth.js";

const databaseUrl = process.env.IDENTITY_TEST_DATABASE_URL;
if (
  databaseUrl === undefined &&
  process.env.REQUIRE_IDENTITY_TEST_DATABASE === "1"
) {
  throw new Error("IDENTITY_TEST_DATABASE_URL is required for integration tests");
}
const describeWithPostgres = databaseUrl === undefined ? describe.skip : describe;

const learnerBaseUrl = "https://learner.identity.test";
const adminBaseUrl = "https://admin.identity.test";
const learnerEmail = "learner@identity.test";
const adminEmail = "admin@identity.test";
const learnerPassword = "learner-password-123";
const adminPassword = "admin-password-123";

class CookieJar {
  readonly #cookies = new Map<string, string>();
  lastSetCookies: string[] = [];

  apply(response: Response): void {
    const headers = response.headers as Headers & {
      getSetCookie?: () => string[];
    };
    this.lastSetCookies =
      headers.getSetCookie?.() ??
      (response.headers.get("set-cookie") === null
        ? []
        : [response.headers.get("set-cookie")!]);

    for (const setCookie of this.lastSetCookies) {
      const firstPart = setCookie.split(";", 1)[0];
      if (firstPart === undefined) continue;
      const separator = firstPart.indexOf("=");
      if (separator < 1) continue;
      const name = firstPart.slice(0, separator);
      const value = firstPart.slice(separator + 1);
      if (/max-age=0/i.test(setCookie) || value.length === 0) {
        this.#cookies.delete(name);
      } else {
        this.#cookies.set(name, value);
      }
    }
  }

  header(): string {
    return [...this.#cookies]
      .map(([name, value]) => `${name}=${value}`)
      .join("; ");
  }
}

async function authRequest(
  auth: { handler(request: Request): Promise<Response> },
  baseUrl: string,
  path: string,
  options: {
    method?: "GET" | "POST";
    body?: Record<string, unknown>;
    jar?: CookieJar;
  } = {},
): Promise<Response> {
  const method = options.method ?? "GET";
  const headers = new Headers();
  if (options.jar !== undefined && options.jar.header().length > 0) {
    headers.set("cookie", options.jar.header());
  }
  if (method === "POST") {
    headers.set("content-type", "application/json");
    headers.set("origin", baseUrl);
  }

  const response = await auth.handler(
    new Request(`${baseUrl}/api/auth${path}`, {
      method,
      headers,
      ...(options.body === undefined
        ? {}
        : { body: JSON.stringify(options.body) }),
    }),
  );
  options.jar?.apply(response);
  return response;
}

describeWithPostgres.sequential("identity PostgreSQL boundary", () => {
  const database = new Pool({ connectionString: databaseUrl });
  const learnerJar = new CookieJar();
  const adminJar = new CookieJar();
  const recoveryDeliveries: unknown[] = [];
  const learnerAuth = createLearnerAuth({
    database,
    baseUrl: learnerBaseUrl,
    secret: "learner-integration-secret-at-least-32-characters",
    deliverPasswordRecovery: async (delivery) => {
      recoveryDeliveries.push(delivery);
    },
  });
  const adminAuth = createAdminAuth({
    database,
    baseUrl: adminBaseUrl,
    secret: "admin-integration-secret-is-distinct-and-long",
    deliverPasswordRecovery: async (delivery) => {
      recoveryDeliveries.push(delivery);
    },
  });
  let adminUserId: string;
  let learnerSessionSetCookie: string;
  let adminSessionSetCookie: string;

  beforeAll(async () => {
    const migration = await database.query<{ table_name: string | null }>(
      "select to_regclass('identity.admin_users')::text as table_name",
    );
    if (migration.rows[0]?.table_name !== "identity.admin_users") {
      throw new Error(
        "002_identity migration is required before identity integration tests",
      );
    }

    await database.query(`truncate table
      identity.learner_sessions,
      identity.learner_accounts,
      identity.learner_verifications,
      identity.learner_passkeys,
      identity.learner_users,
      identity.admin_grants,
      identity.admin_sessions,
      identity.admin_accounts,
      identity.admin_verifications,
      identity.admin_passkeys,
      identity.admin_two_factors,
      identity.admin_users cascade`);

    const context = await adminAuth.$context;
    const admin = await context.internalAdapter.createUser(
      {
        email: adminEmail,
        emailVerified: true,
        name: "Integration Admin",
      },
      { method: "admin" },
    );
    adminUserId = admin.id;
    await context.internalAdapter.linkAccount({
      userId: admin.id,
      providerId: "credential",
      issuer: "local:credential",
      accountId: admin.id,
      password: await context.password.hash(adminPassword),
    });

    const learnerSignUp = await authRequest(
      learnerAuth,
      learnerBaseUrl,
      "/sign-up/email",
      {
        method: "POST",
        jar: learnerJar,
        body: {
          email: learnerEmail,
          name: "Integration Learner",
          password: learnerPassword,
        },
      },
    );
    expect(learnerSignUp.status).toBe(200);
    learnerSessionSetCookie = learnerJar.lastSetCookies.find((cookie) =>
      cookie.includes("konkur-learner.session_token"),
    )!;

    const adminSignIn = await authRequest(
      adminAuth,
      adminBaseUrl,
      "/sign-in/email",
      {
        method: "POST",
        jar: adminJar,
        body: { email: adminEmail, password: adminPassword },
      },
    );
    expect(adminSignIn.status).toBe(200);
    adminSessionSetCookie = adminJar.lastSetCookies.find((cookie) =>
      cookie.includes("konkur-admin.session_token"),
    )!;
  });

  afterAll(async () => {
    await database.end();
  });

  it("keeps signup, credentials, cookies, attributes, and lifetimes isolated", async () => {
    const adminSignUp = await authRequest(
      adminAuth,
      adminBaseUrl,
      "/sign-up/email",
      {
        method: "POST",
        body: {
          email: "public-signup@identity.test",
          name: "Must Not Exist",
          password: adminPassword,
        },
      },
    );
    expect(adminSignUp.status).toBe(400);
    const rejectedAdmin = await database.query<{ count: string }>(
      `select count(*)::text as count
         from identity.admin_users
        where email = 'public-signup@identity.test'`,
    );
    expect(rejectedAdmin.rows[0]?.count).toBe("0");

    const learnerCredentialsAtAdmin = await authRequest(
      adminAuth,
      adminBaseUrl,
      "/sign-in/email",
      {
        method: "POST",
        body: { email: learnerEmail, password: learnerPassword },
      },
    );
    expect(learnerCredentialsAtAdmin.status).toBe(401);

    const adminCredentialsAtLearner = await authRequest(
      learnerAuth,
      learnerBaseUrl,
      "/sign-in/email",
      {
        method: "POST",
        body: { email: adminEmail, password: adminPassword },
      },
    );
    expect(adminCredentialsAtLearner.status).toBe(401);

    const learnerCookieAtAdmin = await authRequest(
      adminAuth,
      adminBaseUrl,
      "/get-session",
      { jar: learnerJar },
    );
    expect(await learnerCookieAtAdmin.json()).toBeNull();

    const adminCookieAtLearner = await authRequest(
      learnerAuth,
      learnerBaseUrl,
      "/get-session",
      { jar: adminJar },
    );
    expect(await adminCookieAtLearner.json()).toBeNull();

    for (const cookie of [learnerSessionSetCookie, adminSessionSetCookie]) {
      expect(cookie).toContain("HttpOnly");
      expect(cookie).toContain("Secure");
      expect(cookie).toMatch(/SameSite=Lax/i);
      expect(cookie).not.toMatch(/Domain=/i);
    }
    expect(learnerSessionSetCookie).toContain("Max-Age=2592000");
    expect(adminSessionSetCookie).toContain("Max-Age=28800");
  });

  it("revokes a server-side learner session", async () => {
    const before = await authRequest(
      learnerAuth,
      learnerBaseUrl,
      "/get-session",
      { jar: learnerJar },
    );
    expect(await before.json()).not.toBeNull();

    const signOut = await authRequest(
      learnerAuth,
      learnerBaseUrl,
      "/sign-out",
      { method: "POST", jar: learnerJar },
    );
    expect(signOut.status).toBe(200);

    const after = await authRequest(
      learnerAuth,
      learnerBaseUrl,
      "/get-session",
      { jar: learnerJar },
    );
    expect(await after.json()).toBeNull();
    const storedSessions = await database.query<{ count: string }>(
      "select count(*)::text as count from identity.learner_sessions",
    );
    expect(storedSessions.rows[0]?.count).toBe("0");
  });

  it("requires live current-session MFA, explicit grants, and recent step-up", async () => {
    await database.query(
      `insert into identity.admin_grants
        (id, "adminUserId", capability)
       values ($1, $2, 'support:read')`,
      [randomUUID(), adminUserId],
    );

    await expect(
      authorizeAdminRequest({
        auth: adminAuth,
        database,
        headers: new Headers({ cookie: adminJar.header() }),
        capability: "support:read",
      }),
    ).rejects.toBeInstanceOf(AdminAuthenticationRequiredError);

    const enable = await authRequest(
      adminAuth,
      adminBaseUrl,
      "/two-factor/enable",
      {
        method: "POST",
        jar: adminJar,
        body: { password: adminPassword, method: "totp" },
      },
    );
    expect(enable.status).toBe(200);
    const enabled = (await enable.json()) as { totpURI: string };
    const secret = new URL(enabled.totpURI).searchParams.get("secret");
    expect(secret).not.toBeNull();
    const code = await createOTP(
      new TextDecoder().decode(base32.decode(secret!)),
    ).totp();

    const verify = await authRequest(
      adminAuth,
      adminBaseUrl,
      "/two-factor/verify-totp",
      {
        method: "POST",
        jar: adminJar,
        body: { code, trustDevice: false },
      },
    );
    expect(verify.status, await verify.clone().text()).toBe(200);

    await expect(
      authorizeAdminRequest({
        auth: adminAuth,
        database,
        headers: new Headers({ cookie: adminJar.header() }),
        capability: "content:publish",
      }),
    ).rejects.toBeInstanceOf(AdminCapabilityRequiredError);

    await database.query(
      `insert into identity.admin_grants
        (id, "adminUserId", capability)
       values ($1, $2, 'content:publish')`,
      [randomUUID(), adminUserId],
    );
    await expect(
      authorizeAdminRequest({
        auth: adminAuth,
        database,
        headers: new Headers({ cookie: adminJar.header() }),
        capability: "content:publish",
      }),
    ).resolves.toMatchObject({ userId: adminUserId });

    await database.query(
      `update identity.admin_sessions
          set "createdAt" = now() - interval '30 minutes',
              "mfaVerifiedAt" = now() - interval '16 minutes'
        where "userId" = $1`,
      [adminUserId],
    );
    await expect(
      authorizeAdminRequest({
        auth: adminAuth,
        database,
        headers: new Headers({ cookie: adminJar.header() }),
        capability: "content:publish",
      }),
    ).rejects.toThrow("step-up");
    await expect(
      authorizeAdminRequest({
        auth: adminAuth,
        database,
        headers: new Headers({ cookie: adminJar.header() }),
        capability: "support:read",
      }),
    ).resolves.toMatchObject({ userId: adminUserId });

    await database.query(
      `update identity.admin_grants
          set "revokedAt" = now()
        where "adminUserId" = $1 and capability = 'support:read'`,
      [adminUserId],
    );
    await expect(
      authorizeAdminRequest({
        auth: adminAuth,
        database,
        headers: new Headers({ cookie: adminJar.header() }),
        capability: "support:read",
      }),
    ).rejects.toBeInstanceOf(AdminCapabilityRequiredError);

    const signOut = await authRequest(
      adminAuth,
      adminBaseUrl,
      "/sign-out",
      { method: "POST", jar: adminJar },
    );
    expect(signOut.status).toBe(200);
    const storedSessions = await database.query<{ count: string }>(
      `select count(*)::text as count
         from identity.admin_sessions
        where "userId" = $1`,
      [adminUserId],
    );
    expect(storedSessions.rows[0]?.count).toBe("0");
    await expect(
      authorizeAdminRequest({
        auth: adminAuth,
        database,
        headers: new Headers({ cookie: adminJar.header() }),
        capability: "content:publish",
      }),
    ).rejects.toBeInstanceOf(AdminAuthenticationRequiredError);
  });
});
