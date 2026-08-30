import { sql, type Kysely } from "kysely";

export async function up(database: Kysely<unknown>): Promise<void> {
  await sql`alter table search.documents enable row level security`.execute(database);

  await sql`
    create function search.query_learner_documents(
      search_query text,
      learner_id uuid,
      result_limit integer
    )
    returns table (
      document_id uuid,
      access_scope varchar(20),
      title text,
      rank real
    )
    language plpgsql
    security invoker
    set search_path = pg_catalog, public, search
    as $function$
    begin
      perform set_config('konkur.learner_id', learner_id::text, true);
      return query
        with matches as (
          select documents.*
            from search.documents
           where (
                   documents.access_scope = 'public'
                   or (
                     documents.access_scope = 'learner'
                     and documents.owner_id = learner_id
                   )
                 )
             and documents.search_vector @@ websearch_to_tsquery('simple', search_query)
          union all
          select documents.*
            from search.documents
           where (
                   documents.access_scope = 'public'
                   or (
                     documents.access_scope = 'learner'
                     and documents.owner_id = learner_id
                   )
                 )
             and documents.normalized_text % search_query
             and not documents.search_vector @@ websearch_to_tsquery('simple', search_query)
        )
        select matches.document_id,
               matches.access_scope,
               matches.title,
               (
                 ts_rank_cd(matches.search_vector, websearch_to_tsquery('simple', search_query))
                 + similarity(matches.normalized_text, search_query)
               )::real as rank
          from matches
         order by rank desc, matches.document_id
         limit result_limit;
    end
    $function$
  `.execute(database);

  await sql`
    create policy search_learner_read on search.documents
      for select
      using (
        pg_has_role(current_user, 'konkur_learner_api', 'member')
        and (
          access_scope = 'public'
          or (
            access_scope = 'learner'
            and owner_id = nullif(current_setting('konkur.learner_id', true), '')::uuid
          )
        )
      )
  `.execute(database);

  await sql`
    create policy search_admin_read on search.documents
      for select
      using (
        pg_has_role(current_user, 'konkur_admin_api', 'member')
        and access_scope in ('public', 'admin')
      )
  `.execute(database);

  await sql`
    create policy search_admin_insert on search.documents
      for insert
      with check (
        pg_has_role(current_user, 'konkur_admin_api', 'member')
        and access_scope in ('public', 'admin')
      )
  `.execute(database);

  await sql`
    create policy search_admin_update on search.documents
      for update
      using (
        pg_has_role(current_user, 'konkur_admin_api', 'member')
        and access_scope in ('public', 'admin')
      )
      with check (
        pg_has_role(current_user, 'konkur_admin_api', 'member')
        and access_scope in ('public', 'admin')
      )
  `.execute(database);

  await sql`
    create policy search_admin_delete on search.documents
      for delete
      using (
        pg_has_role(current_user, 'konkur_admin_api', 'member')
        and access_scope in ('public', 'admin')
      )
  `.execute(database);
}

export async function down(database: Kysely<unknown>): Promise<void> {
  for (const policy of [
    "search_admin_delete",
    "search_admin_update",
    "search_admin_insert",
    "search_admin_read",
    "search_learner_read",
  ]) {
    await sql.raw(`drop policy if exists ${policy} on search.documents`).execute(
      database,
    );
  }
  await sql`
    drop function if exists search.query_learner_documents(text, uuid, integer)
  `.execute(database);
  await sql`alter table search.documents disable row level security`.execute(database);
}
