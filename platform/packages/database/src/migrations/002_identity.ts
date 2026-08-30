import { sql, type Kysely } from "kysely";

const adminCapabilities = [
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

async function createUserTable(
  database: Kysely<unknown>,
  table: string,
  admin: boolean,
): Promise<void> {
  let builder = database.schema
    .createTable(table)
    .addColumn("id", "varchar(64)", (column) => column.primaryKey())
    .addColumn("name", "text", (column) => column.notNull())
    .addColumn("email", "text", (column) => column.notNull().unique())
    .addColumn("emailVerified", "boolean", (column) =>
      column.notNull().defaultTo(false),
    )
    .addColumn("image", "text")
    .addColumn("createdAt", "timestamptz", (column) => column.notNull())
    .addColumn("updatedAt", "timestamptz", (column) => column.notNull());

  if (admin) {
    builder = builder.addColumn("twoFactorEnabled", "boolean", (column) =>
      column.notNull().defaultTo(false),
    );
  }

  await builder.execute();
}

async function createSessionTable(
  database: Kysely<unknown>,
  table: string,
  userTable: string,
  audience: "learner" | "admin",
): Promise<void> {
  let builder = database.schema
    .createTable(table)
    .addColumn("id", "varchar(64)", (column) => column.primaryKey())
    .addColumn("expiresAt", "timestamptz", (column) => column.notNull())
    .addColumn("token", "varchar(128)", (column) =>
      column.notNull().unique(),
    )
    .addColumn("createdAt", "timestamptz", (column) => column.notNull())
    .addColumn("updatedAt", "timestamptz", (column) => column.notNull())
    .addColumn("ipAddress", "text")
    .addColumn("userAgent", "text")
    .addColumn("userId", "varchar(64)", (column) =>
      column.notNull().references(`${userTable}.id`).onDelete("cascade"),
    )
    .addColumn("audience", "varchar(16)", (column) => column.notNull())
    .addCheckConstraint(
      `${audience}_session_audience`,
      sql.raw(`audience = '${audience}'`),
    );

  if (audience === "admin") {
    builder = builder.addColumn("mfaVerifiedAt", "timestamptz");
  }

  await builder.execute();
  await database.schema
    .createIndex(`${audience}_sessions_user_id_idx`)
    .on(table)
    .column("userId")
    .execute();
}

async function createAccountTable(
  database: Kysely<unknown>,
  table: string,
  userTable: string,
  prefix: string,
): Promise<void> {
  await database.schema
    .createTable(table)
    .addColumn("id", "varchar(64)", (column) => column.primaryKey())
    .addColumn("issuer", "text", (column) => column.notNull())
    .addColumn("accountId", "text", (column) => column.notNull())
    .addColumn("providerId", "text", (column) => column.notNull())
    .addColumn("userId", "varchar(64)", (column) =>
      column.notNull().references(`${userTable}.id`).onDelete("cascade"),
    )
    .addColumn("accessToken", "text")
    .addColumn("refreshToken", "text")
    .addColumn("idToken", "text")
    .addColumn("accessTokenExpiresAt", "timestamptz")
    .addColumn("refreshTokenExpiresAt", "timestamptz")
    .addColumn("scope", "text")
    .addColumn("password", "text")
    .addColumn("createdAt", "timestamptz", (column) => column.notNull())
    .addColumn("updatedAt", "timestamptz", (column) => column.notNull())
    .execute();
  await database.schema
    .createIndex(`${prefix}_accounts_issuer_account_id_uidx`)
    .unique()
    .on(table)
    .columns(["issuer", "accountId"])
    .execute();
  await database.schema
    .createIndex(`${prefix}_accounts_user_id_idx`)
    .on(table)
    .column("userId")
    .execute();
}

async function createVerificationTable(
  database: Kysely<unknown>,
  table: string,
  prefix: string,
): Promise<void> {
  await database.schema
    .createTable(table)
    .addColumn("id", "varchar(64)", (column) => column.primaryKey())
    .addColumn("identifier", "text", (column) => column.notNull())
    .addColumn("value", "text", (column) => column.notNull())
    .addColumn("expiresAt", "timestamptz", (column) => column.notNull())
    .addColumn("createdAt", "timestamptz", (column) => column.notNull())
    .addColumn("updatedAt", "timestamptz", (column) => column.notNull())
    .execute();
  await database.schema
    .createIndex(`${prefix}_verifications_identifier_idx`)
    .on(table)
    .column("identifier")
    .execute();
}

async function createPasskeyTable(
  database: Kysely<unknown>,
  table: string,
  userTable: string,
  prefix: string,
): Promise<void> {
  await database.schema
    .createTable(table)
    .addColumn("id", "varchar(64)", (column) => column.primaryKey())
    .addColumn("name", "text")
    .addColumn("publicKey", "text", (column) => column.notNull())
    .addColumn("userId", "varchar(64)", (column) =>
      column.notNull().references(`${userTable}.id`).onDelete("cascade"),
    )
    .addColumn("credentialID", "text", (column) => column.notNull())
    .addColumn("counter", "integer", (column) => column.notNull())
    .addColumn("deviceType", "text", (column) => column.notNull())
    .addColumn("backedUp", "boolean", (column) => column.notNull())
    .addColumn("transports", "text")
    .addColumn("createdAt", "timestamptz")
    .addColumn("aaguid", "text")
    .execute();
  await database.schema
    .createIndex(`${prefix}_passkeys_user_id_idx`)
    .on(table)
    .column("userId")
    .execute();
  await database.schema
    .createIndex(`${prefix}_passkeys_credential_id_idx`)
    .on(table)
    .column("credentialID")
    .execute();
}

async function createAuthNamespace(
  database: Kysely<unknown>,
  audience: "learner" | "admin",
): Promise<void> {
  const userTable = `identity.${audience}_users`;
  await createUserTable(database, userTable, audience === "admin");
  await createSessionTable(
    database,
    `identity.${audience}_sessions`,
    userTable,
    audience,
  );
  await createAccountTable(
    database,
    `identity.${audience}_accounts`,
    userTable,
    audience,
  );
  await createVerificationTable(
    database,
    `identity.${audience}_verifications`,
    audience,
  );
  await createPasskeyTable(
    database,
    `identity.${audience}_passkeys`,
    userTable,
    audience,
  );
}

export async function up(database: Kysely<unknown>): Promise<void> {
  await database.schema.createSchema("identity").execute();
  await createAuthNamespace(database, "learner");
  await createAuthNamespace(database, "admin");

  await database.schema
    .createTable("identity.admin_two_factors")
    .addColumn("id", "varchar(64)", (column) => column.primaryKey())
    .addColumn("secret", "text", (column) => column.notNull())
    .addColumn("backupCodes", "text", (column) => column.notNull())
    .addColumn("userId", "varchar(64)", (column) =>
      column
        .notNull()
        .references("identity.admin_users.id")
        .onDelete("cascade"),
    )
    .addColumn("verified", "boolean", (column) =>
      column.notNull().defaultTo(true),
    )
    .addColumn("failedVerificationCount", "integer", (column) =>
      column.notNull().defaultTo(0),
    )
    .addColumn("lockedUntil", "timestamptz")
    .execute();
  await database.schema
    .createIndex("admin_two_factors_secret_idx")
    .on("identity.admin_two_factors")
    .column("secret")
    .execute();
  await database.schema
    .createIndex("admin_two_factors_user_id_idx")
    .on("identity.admin_two_factors")
    .column("userId")
    .execute();

  await database.schema
    .createTable("identity.admin_grants")
    .addColumn("id", "uuid", (column) => column.primaryKey())
    .addColumn("adminUserId", "varchar(64)", (column) =>
      column
        .notNull()
        .references("identity.admin_users.id")
        .onDelete("cascade"),
    )
    .addColumn("capability", "varchar(64)", (column) => column.notNull())
    .addColumn("grantedAt", "timestamptz", (column) =>
      column.notNull().defaultTo(sql`now()`),
    )
    .addColumn("expiresAt", "timestamptz")
    .addColumn("revokedAt", "timestamptz")
    .addCheckConstraint(
      "admin_grants_capability_allowed",
      sql.raw(
        `capability in (${adminCapabilities.map((value) => `'${value}'`).join(", ")})`,
      ),
    )
    .addCheckConstraint(
      "admin_grants_expiry_after_grant",
      sql`"expiresAt" is null or "expiresAt" > "grantedAt"`,
    )
    .addCheckConstraint(
      "admin_grants_revocation_after_grant",
      sql`"revokedAt" is null or "revokedAt" >= "grantedAt"`,
    )
    .execute();
  await database.schema
    .createIndex("admin_grants_authorization_idx")
    .on("identity.admin_grants")
    .columns(["adminUserId", "capability"])
    .where(sql.ref("revokedAt"), "is", null)
    .execute();
}

export async function down(database: Kysely<unknown>): Promise<void> {
  await database.schema.dropSchema("identity").ifExists().cascade().execute();
}
