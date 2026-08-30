\set ON_ERROR_STOP on

DO $roles$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'konkur_learner_api') THEN
    CREATE ROLE konkur_learner_api NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'konkur_admin_api') THEN
    CREATE ROLE konkur_admin_api NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'konkur_worker') THEN
    CREATE ROLE konkur_worker NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'konkur_backup') THEN
    CREATE ROLE konkur_backup NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT;
  END IF;
END
$roles$;

ALTER ROLE konkur_learner_api NOBYPASSRLS;
ALTER ROLE konkur_admin_api NOBYPASSRLS;
ALTER ROLE konkur_worker NOBYPASSRLS;
ALTER ROLE konkur_backup BYPASSRLS;

REVOKE CREATE ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker FROM PUBLIC;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker FROM PUBLIC;
REVOKE ALL ON ALL FUNCTIONS IN SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker FROM PUBLIC;

SELECT format(
  'GRANT CONNECT ON DATABASE %I TO konkur_learner_api, konkur_admin_api, konkur_worker, konkur_backup',
  current_database()
) \gexec

GRANT USAGE ON SCHEMA public, identity, assessment, search, platform TO konkur_learner_api;
GRANT SELECT, INSERT, UPDATE, DELETE ON
  identity.learner_users,
  identity.learner_sessions,
  identity.learner_accounts,
  identity.learner_verifications,
  identity.learner_passkeys,
  assessment.attempts,
  assessment.attempt_saves,
  assessment.attempt_submissions,
  assessment.attempt_commands
TO konkur_learner_api;
GRANT SELECT ON search.documents TO konkur_learner_api;
GRANT EXECUTE ON FUNCTION search.normalize_persian(text) TO konkur_learner_api;
GRANT EXECUTE ON FUNCTION search.query_learner_documents(text, uuid, integer) TO konkur_learner_api;
GRANT EXECUTE ON FUNCTION public.similarity(text, text), public.similarity_op(text, text) TO konkur_learner_api;
GRANT INSERT ON platform.outbox_events TO konkur_learner_api;

GRANT USAGE ON SCHEMA public, identity, authored_content, search, platform TO konkur_admin_api;
GRANT SELECT, INSERT, UPDATE, DELETE ON
  identity.admin_users,
  identity.admin_sessions,
  identity.admin_accounts,
  identity.admin_verifications,
  identity.admin_passkeys,
  identity.admin_two_factors,
  identity.admin_grants,
  authored_content.items,
  authored_content.revisions,
  authored_content.approvals,
  authored_content.publication_history,
  authored_content.publication_state,
  authored_content.audit_intents,
  authored_content.command_results,
  search.documents
TO konkur_admin_api;
GRANT EXECUTE ON FUNCTION search.normalize_persian(text) TO konkur_admin_api;
GRANT EXECUTE ON FUNCTION public.similarity(text, text), public.similarity_op(text, text) TO konkur_admin_api;
GRANT INSERT ON platform.outbox_events TO konkur_admin_api;

GRANT USAGE ON SCHEMA platform, graphile_worker TO konkur_worker;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA platform TO konkur_worker;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA graphile_worker TO konkur_worker;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA platform TO konkur_worker;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA graphile_worker TO konkur_worker;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA graphile_worker TO konkur_worker;

GRANT USAGE ON SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker TO konkur_backup;
GRANT SELECT ON ALL TABLES IN SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker TO konkur_backup;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker TO konkur_backup;

ALTER DEFAULT PRIVILEGES IN SCHEMA platform GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO konkur_worker;
ALTER DEFAULT PRIVILEGES IN SCHEMA platform GRANT USAGE, SELECT ON SEQUENCES TO konkur_worker;
ALTER DEFAULT PRIVILEGES IN SCHEMA graphile_worker GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO konkur_worker;
ALTER DEFAULT PRIVILEGES IN SCHEMA graphile_worker GRANT USAGE, SELECT ON SEQUENCES TO konkur_worker;
ALTER DEFAULT PRIVILEGES IN SCHEMA graphile_worker GRANT EXECUTE ON FUNCTIONS TO konkur_worker;
ALTER DEFAULT PRIVILEGES IN SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker GRANT SELECT ON TABLES TO konkur_backup;
ALTER DEFAULT PRIVILEGES IN SCHEMA public, identity, assessment, authored_content, search, platform, graphile_worker GRANT SELECT ON SEQUENCES TO konkur_backup;
