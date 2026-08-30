# Identity Module

Identity owns accounts, verified contacts, credentials, passkeys, opaque sessions, recovery, MFA enrollment, and Admin capability grants. It exposes distinct PostgreSQL-backed Better Auth factories for learner and Admin deployments.

Learner identity grants no Admin capability. `authorizeAdminRequest` resolves the presented Admin cookie against the live Admin session table, requires MFA evidence created for that session, and denies access unless an active capability grant exists. Sensitive capabilities also require MFA within the fixed step-up window. SMS is neither a sign-in dependency nor an Admin factor.
