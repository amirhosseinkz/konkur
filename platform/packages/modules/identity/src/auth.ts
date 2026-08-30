import { passkey } from "@better-auth/passkey";
import { betterAuth } from "better-auth";
import { twoFactor } from "better-auth/plugins";
import type { Pool } from "pg";

export const LEARNER_SESSION_LIFETIME_SECONDS = 60 * 60 * 24 * 30;
export const ADMIN_SESSION_LIFETIME_SECONDS = 60 * 60 * 8;

export const identityModels = {
  learner: {
    user: "identity.learner_users",
    session: "identity.learner_sessions",
    account: "identity.learner_accounts",
    verification: "identity.learner_verifications",
    passkey: "identity.learner_passkeys",
  },
  admin: {
    user: "identity.admin_users",
    session: "identity.admin_sessions",
    account: "identity.admin_accounts",
    verification: "identity.admin_verifications",
    passkey: "identity.admin_passkeys",
    twoFactor: "identity.admin_two_factors",
  },
} as const;

export interface RecoveryDelivery {
  destination: string;
  resetUrl: string;
}

export interface IdentityFactoryOptions {
  database: Pool;
  baseUrl: string;
  secret: string;
  deliverPasswordRecovery(delivery: RecoveryDelivery): Promise<void>;
}

const secureCookieAttributes = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: true,
};

const sessionAudienceField = (audience: "learner" | "admin") => ({
  type: "string" as const,
  required: true,
  defaultValue: audience,
  input: false,
});

function isAdminMfaAuthentication(path: string | undefined): boolean {
  return (
    path === "/two-factor/verify-totp" ||
    path === "/two-factor/verify-backup-code" ||
    path === "/passkey/verify-authentication"
  );
}

export function createLearnerAuth(options: IdentityFactoryOptions) {
  return betterAuth({
    appName: "Konkur",
    baseURL: options.baseUrl,
    database: options.database,
    secret: options.secret,
    emailAndPassword: {
      enabled: true,
      revokeSessionsOnPasswordReset: true,
      sendResetPassword: async ({ user, url }) =>
        options.deliverPasswordRecovery({
          destination: user.email,
          resetUrl: url,
        }),
    },
    session: {
      modelName: identityModels.learner.session,
      expiresIn: LEARNER_SESSION_LIFETIME_SECONDS,
      updateAge: 60 * 60 * 24,
      additionalFields: {
        audience: sessionAudienceField("learner"),
      },
    },
    user: { modelName: identityModels.learner.user },
    account: { modelName: identityModels.learner.account },
    verification: { modelName: identityModels.learner.verification },
    advanced: {
      cookiePrefix: "konkur-learner",
      useSecureCookies: true,
      crossSubDomainCookies: { enabled: false },
      defaultCookieAttributes: secureCookieAttributes,
    },
    plugins: [
      passkey({
        schema: {
          passkey: { modelName: identityModels.learner.passkey },
        },
      }),
    ],
  });
}

export function createAdminAuth(options: IdentityFactoryOptions) {
  return betterAuth({
    appName: "Konkur Admin",
    baseURL: options.baseUrl,
    database: options.database,
    secret: options.secret,
    emailAndPassword: {
      enabled: true,
      disableSignUp: true,
      revokeSessionsOnPasswordReset: true,
      sendResetPassword: async ({ user, url }) =>
        options.deliverPasswordRecovery({
          destination: user.email,
          resetUrl: url,
        }),
    },
    session: {
      modelName: identityModels.admin.session,
      expiresIn: ADMIN_SESSION_LIFETIME_SECONDS,
      updateAge: 60 * 30,
      freshAge: 60 * 15,
      additionalFields: {
        audience: sessionAudienceField("admin"),
        mfaVerifiedAt: {
          type: "date",
          required: false,
          input: false,
        },
      },
    },
    user: { modelName: identityModels.admin.user },
    account: { modelName: identityModels.admin.account },
    verification: { modelName: identityModels.admin.verification },
    databaseHooks: {
      session: {
        create: {
          before: async (_session, context) => ({
            data: {
              audience: "admin",
              mfaVerifiedAt: isAdminMfaAuthentication(context?.path)
                ? new Date()
                : null,
            },
          }),
        },
        update: {
          before: async (session) => ({
            data: { ...session, audience: "admin" },
          }),
        },
      },
    },
    advanced: {
      cookiePrefix: "konkur-admin",
      useSecureCookies: true,
      crossSubDomainCookies: { enabled: false },
      defaultCookieAttributes: secureCookieAttributes,
    },
    plugins: [
      passkey({
        schema: {
          passkey: { modelName: identityModels.admin.passkey },
        },
      }),
      twoFactor({
        skipVerificationOnEnable: false,
        twoFactorTable: identityModels.admin.twoFactor,
        trustDeviceMaxAge: 0,
      }),
    ],
  });
}

export type AdminAuth = ReturnType<typeof createAdminAuth>;
