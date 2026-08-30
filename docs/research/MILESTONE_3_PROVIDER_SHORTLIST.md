# Milestone 3 Provider And Recovery Shortlist

Status: Pending human approval; research proposal only

Research cutoff: 2026-08-29

## Decision Boundary

This document narrows the staging evaluation required by P-007. It does not select a provider, approve a data region, accept an SLA, or approve recovery objectives. RFC-0001 and ADR-0031 remain authoritative: Konkur uses portable OCI workloads, PostgreSQL 17, private S3-compatible storage, a private registry, and self-hosted OpenTelemetry. Kubernetes is not required for GA.

Every candidate must prove:

- digest-pinned OCI deployment without a provider-specific application architecture;
- customer-controlled PostgreSQL 17 backup, export, and empty-environment restore;
- private S3-compatible storage and customer-controlled encrypted export;
- private OCI registry behavior, digest retention, and image export;
- operation during international registry/package-provider loss;
- an encrypted recovery copy in a named, legally reviewed failure domain that is not correlated with the primary provider account or control plane;
- measured support, billing continuity, latency, load, restore, and provider-loss behavior.

## Evaluation Order

| Order | Candidate | Verified strengths | Blocking unknowns | Proposed use |
|---|---|---|---|---|
| 1 | ArvanCloud | Status inventory exposes cloud servers, cloud containers, managed databases, object storage, VPC, Docker Registry, several Iran regions, and one European cloud-server region | PostgreSQL 17, PITR/export, S3 details, OCI registry behavior, physical failure domains, SLA, support, and usable pricing require written confirmation | Primary staging candidate using portable workloads; self-managed PostgreSQL 17 unless managed compatibility is proven |
| 2 | Hamravesh | Docker-image PaaS, managed Kubernetes, PostgreSQL offerings, managed HA/PITR claims, S3-compatible private storage, private-registry integration, monitoring, and off-site backup | PostgreSQL version, export format, PITR granularity, backup independence, registry OCI behavior, SLA, and pricing require confirmation; documented managed-DB retention is two days | Strong alternative and possible independent recovery target |
| 3 | ParsPack | Iran/foreign Linux servers, Iran/Germany PaaS, Docker/Compose, PostgreSQL and registry templates, private-by-default S3 storage, and off-site/S3 backup claims | Managed HA/PITR is not proven; registry is presented as a workload template; storage location claims conflict; public terms expose a 99% network/hardware guarantee and storage request limits | Portable self-managed VM/PaaS candidate and possible recovery provider |
| 4 | Liara | Docker PaaS, Linux VPS, private-network PostgreSQL DBaaS, downloadable backups, S3-compatible storage, `rclone` export, transparent pricing, and published SLA | Managed PostgreSQL documentation stops at 16.3; no private managed registry was verified; customer retains backup responsibility and base-tier balance expiry creates deletion risk | Conditional self-managed PostgreSQL 17 fallback or independent object-recovery target |

## Official Evidence

### ArvanCloud

- [Service status and regional service inventory](https://www.arvancloudstatus.ir/)
- [Official sitemap exposing product and pricing surfaces](https://www.arvancloud.ir/sitemap.xml)

The status inventory names Bamdad `ir-central1-a`, Simin `ir-central1-b`, Forough `ir-central1-c`, Shahriar `ir-northwest-a`, Qeysar `ir-southwest1-a`, and Goethe `eu-west1-a`. A region label is not proof of a separate physical operator or independent control plane. Product, pricing, SLA, and terms pages were challenge-protected during research; no unobserved product detail is treated as fact.

### Hamravesh

- [Darkube platform](https://hamravesh.com/darkube)
- [Darkube technical documentation](https://docs.hamravesh.com/products/darkube)
- [Managed Kubernetes](https://hamravesh.com/managed-kubernetes)
- [Database service overview](https://docs.hamravesh.com/products/dbaas)
- [Managed database behavior](https://docs.hamravesh.com/products/dbaas/managed-database)
- [Database FAQ and two-day backup retention](https://docs.hamravesh.com/products/dbaas/faq)
- [S3-compatible object storage](https://hamravesh.com/object-storage)
- [Copying backups to another S3 endpoint](https://docs.hamravesh.com/products/s3/backup/)
- [Scheduled off-site backup](https://docs.hamravesh.com/products/backup/intro)
- [Private-registry integration](https://docs.hamravesh.com/products/darkube/create/docker-image/intro/)
- [Service and location status](https://hamraveshstatus.com/)

The status inventory names several Tehran operators plus Germany and Yerevan clusters. Foreign branding does not establish legal durability, upstream independence, or permission to retain encrypted Iranian customer data.

### ParsPack

- [Cloud servers](https://parspack.com/cloud-server)
- [PaaS products and pricing](https://parspack.com/paas)
- [PaaS documentation](https://docs.parspack.com/paas/)
- [Docker and Compose behavior](https://docs.parspack.com/paas/deploy/docker/)
- [PostgreSQL template](https://docs.parspack.com/paas/deploy/databases/sql/postgresql/)
- [Object-storage product](https://parspack.com/cloud-storage)
- [Private-by-default bucket behavior](https://docs.parspack.com/cloud-storage/access-level-management-of-buckets/)
- [S3-compatible connection](https://docs.parspack.com/cloud-storage/how-to-connect-to-the-cloud/)
- [Object-storage restrictions](https://docs.parspack.com/cloud-storage/space-rules-and-restrictions/)
- [Backup and disaster recovery claims](https://parspack.com/backup-and-disaster-recovery-solutions/)
- [Terms and availability commitment](https://parspack.com/terms)
- [Operational status history](https://status.parspack.com/)

The object-storage product advertises Iran/Europe choices while the observed provisioning API documentation names `iran`; staging must resolve this conflict. The documented default limit of 300 requests per minute per bucket must be measured against workload and recovery behavior.

### Liara

- [Product documentation index](https://docs.liara.ir/)
- [Docker PaaS](https://docs.liara.ir/paas/docker/getting-started/)
- [Published PostgreSQL versions](https://docs.liara.ir/dbaas/postgresql/choose-version/)
- [PostgreSQL private networking](https://docs.liara.ir/dbaas/postgresql/quick-setup/)
- [Database backup](https://docs.liara.ir/dbaas/postgresql/how-tos/create-backup/)
- [Download and migration path](https://docs.liara.ir/dbaas/move/)
- [S3-compatible object storage](https://docs.liara.ir/object-storage/about/)
- [`rclone` object export](https://docs.liara.ir/object-storage/how-tos/create-backup-using-rclone/)
- [Pricing](https://liara.ir/pricing/)
- [SLA](https://liara.ir/sla/)
- [Terms](https://liara.ir/terms/)

The documented managed PostgreSQL versions range from 11.21 through 16.3. Konkur must therefore reject that managed path unless PostgreSQL 17 is independently confirmed, or run PostgreSQL 17 on a portable VPS.

## Cross-Cutting Risks

- A second region under one provider does not protect against account deletion, billing failure, control-plane compromise, sanctions, or provider failure.
- A provider snapshot, internal replica, or three-copy claim is not a customer-controlled recovery copy.
- Recovery must not depend on Docker Hub, GitHub, foreign package registries, or an international control plane.
- Foreign infrastructure sold through an Iranian provider requires legal, payment, sanctions, and data-transfer review.
- Billing requires a legal-entity account, prepaid operating reserve, two billing administrators, and independent low-balance monitoring.
- Every promoted image must be retained by digest and exportable as an OCI archive to the recovery domain.

## Proposed Staging Combinations

1. ArvanCloud primary with self-managed PostgreSQL 17; recovery at a named Hamravesh or ParsPack location operated outside the primary failure domain.
2. Hamravesh primary only if PostgreSQL 17 and independent export are confirmed; recovery at a named ArvanCloud or other non-correlated location.
3. ParsPack primary with self-managed PostgreSQL 17 and registry on portable compute; recovery at ArvanCloud or Hamravesh.
4. Liara fallback with self-managed PostgreSQL 17 and registry on VPS; evaluate Liara S3 mainly as an independent recovery target.

Evaluation is limited to one monthly billing cycle per candidate. Reject a candidate immediately if digest-pinned OCI deployment, customer-controlled PostgreSQL 17 restore, private S3 operations, or independent export requires provider intervention.

## Proposed Recovery Objectives

| Stage | RPO | RTO | Conditions |
|---|---:|---:|---|
| Synthetic internal spike | 24 hours | 8 hours | Only before valuable account or editorial data exists |
| Recommended Milestone 3/pre-GA baseline | 1 hour | 4 hours | Hourly WAL/archive or equivalent, daily full backup, object replication, and tested empty-environment restore |
| Future GA-candidate target | 15 minutes | 2 hours | Continuous PITR, automated independent object replication, prepared capacity, tested secrets/DNS recovery, and active on-call ownership |

RPO applies independently to PostgreSQL and objects. Promoted OCI images and deployment manifests target zero-loss recovery because every approved digest must already exist in the recovery copy.

## Required Staging Drills

- Run expected peak, twice expected peak for 30 minutes, and an eight-hour endurance profile.
- Include SSR, login/session writes, concurrent autosave, Persian search, duplicate outbox delivery, publication/rollback, object transfer, and telemetry.
- Record p95/p99 latency, errors, database CPU/IO/connections, queue lag, storage latency, telemetry loss, and backup impact.
- Simulate loss of a VM, primary database, object bucket, registry, provider control plane, international internet, and the named primary region.
- Restore an empty account/environment from OCI digests, configuration, secret procedure, PostgreSQL backup/WAL, and the object recovery copy.
- Verify row counts, migrations, constraints, audit continuity, object SHA-256 values, private ACLs, session revocation, outbox idempotency, and search rebuild.
- Measure RPO from the last recoverable committed transaction and RTO from incident declaration to successful end-to-end checks.
- Reject a corrupted latest backup and recover from an older verified copy.

## Approval Requested

The proposed evaluation shortlist is ArvanCloud, Hamravesh, and ParsPack, with Liara retained as a conditional fallback or recovery-storage candidate. The proposed internal pre-GA objectives are `RPO <= 1 hour` and `RTO <= 4 hours`.

Provider selection, recovery objectives, legal/payment acceptance, physical failure domains, and residual risk remain pending explicit human approval after vendor answers and measured staging drills.
