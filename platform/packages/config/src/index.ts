import { z } from "zod";

const nodeEnvironmentSchema = z.enum(["development", "test", "production"]);
const disabledAiSchema = z.literal("false").default("false");
const authSecretSchema = z
  .string()
  .min(32)
  .refine(
    (value) =>
      !/(^|[-_])(change|changeme|example|password|replace|secret|todo)([-_]|$)/u.test(
        value.toLowerCase(),
      ),
    "Authentication secret contains a known placeholder",
  );

const baseEnvironmentSchema = z.object({
  NODE_ENV: nodeEnvironmentSchema.default("development"),
  OTEL_EXPORTER_OTLP_ENDPOINT: z.url().optional(),
  AI_ENABLED: disabledAiSchema,
});

const databaseEnvironmentSchema = z.object({
  DATABASE_URL: z.url({ protocol: /^postgres(ql)?$/ }),
});

function requireProductionDatabaseTls(
  environment: { NODE_ENV: "development" | "test" | "production"; DATABASE_URL: string },
  context: z.core.$RefinementCtx,
): void {
  if (
    environment.NODE_ENV === "production" &&
    new URL(environment.DATABASE_URL).searchParams.get("sslmode") !== "verify-full"
  ) {
    context.addIssue({
      code: "custom",
      message: "Production database URLs must set sslmode=verify-full",
      path: ["DATABASE_URL"],
    });
  }
}

export const apiEnvironmentSchema = baseEnvironmentSchema
  .and(databaseEnvironmentSchema)
  .and(
    z.object({
      API_HOST: z.string().min(1).default("127.0.0.1"),
      API_PORT: z.coerce.number().int().min(1).max(65_535).default(4_000),
      LEARNER_AUTH_BASE_URL: z.url(),
      LEARNER_AUTH_SECRET: authSecretSchema,
      ADMIN_AUTH_BASE_URL: z.url(),
      ADMIN_AUTH_SECRET: authSecretSchema,
    }),
  )
  .superRefine((environment, context) => {
    requireProductionDatabaseTls(environment, context);

    if (environment.LEARNER_AUTH_SECRET === environment.ADMIN_AUTH_SECRET) {
      context.addIssue({
        code: "custom",
        message: "Learner and Admin auth secrets must be distinct",
        path: ["ADMIN_AUTH_SECRET"],
      });
    }

    if (environment.LEARNER_AUTH_BASE_URL === environment.ADMIN_AUTH_BASE_URL) {
      context.addIssue({
        code: "custom",
        message: "Learner and Admin auth base URLs must be distinct",
        path: ["ADMIN_AUTH_BASE_URL"],
      });
    }

    if (environment.NODE_ENV === "production") {
      for (const [name, value] of [
        ["LEARNER_AUTH_BASE_URL", environment.LEARNER_AUTH_BASE_URL],
        ["ADMIN_AUTH_BASE_URL", environment.ADMIN_AUTH_BASE_URL],
      ] as const) {
        if (new URL(value).protocol !== "https:") {
          context.addIssue({
            code: "custom",
            message: "Production auth base URLs must use HTTPS",
            path: [name],
          });
        }
      }

    }
  });

export const workerEnvironmentSchema = baseEnvironmentSchema
  .and(databaseEnvironmentSchema)
  .superRefine(requireProductionDatabaseTls);

export type ApiEnvironment = z.infer<typeof apiEnvironmentSchema>;
export type WorkerEnvironment = z.infer<typeof workerEnvironmentSchema>;

export function parseApiEnvironment(
  environment: NodeJS.ProcessEnv,
): ApiEnvironment {
  return apiEnvironmentSchema.parse(environment);
}

export function parseWorkerEnvironment(
  environment: NodeJS.ProcessEnv,
): WorkerEnvironment {
  return workerEnvironmentSchema.parse(environment);
}
