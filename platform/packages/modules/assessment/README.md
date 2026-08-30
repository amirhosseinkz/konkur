# Assessment Module

Assessment owns attempt state, ordered autosaves, immutable submissions, timing, and scoring snapshots. This RFC-0001 spike proves durable concurrent autosave and submit behavior against PostgreSQL; it does not implement scoring or client-local recovery.

Authenticated learner identity enters through a server-derived actor object and is never accepted from an autosave or submit command. All reads and writes repeat ownership checks inside the module.
