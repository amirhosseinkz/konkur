import { z } from "zod";

export const domainEventSchema = z
  .object({
    event_id: z.uuidv7(),
    event_type: z.string().regex(/^[A-Z][A-Za-z]+$/),
    schema_version: z.literal(1),
    aggregate_id: z.uuidv7(),
    aggregate_revision: z.number().int().nonnegative(),
    occurred_at: z.iso.datetime({ offset: true }),
    producer: z.string().min(1).max(100),
    correlation_id: z.uuidv7(),
    causation_id: z.uuidv7().nullable(),
    payload: z.record(z.string(), z.unknown()),
  })
  .strict();

export type DomainEvent = z.infer<typeof domainEventSchema>;
