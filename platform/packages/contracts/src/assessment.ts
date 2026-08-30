import { z } from "zod";

const retryMetadataSchema = z.object({
  request_id: z.uuidv7(),
  idempotency_key: z.string().min(16).max(200),
  actor_id: z.uuidv7(),
  correlation_id: z.uuidv7(),
  issued_at: z.iso.datetime({ offset: true }),
});

export const examAutosaveRequestSchema = retryMetadataSchema
  .extend({
    schema_version: z.literal(1),
    attempt_id: z.uuidv7(),
    expected_revision: z.number().int().nonnegative(),
    sequence: z.number().int().positive(),
    answers: z
      .array(
        z
          .object({
            question_id: z.uuidv7(),
            selected_option_id: z.uuidv7().nullable(),
            marked_for_review: z.boolean(),
          })
          .strict(),
      )
      .max(250),
  })
  .strict();

export const examAutosaveResponseSchema = z
  .object({
    schema_version: z.literal(1),
    request_id: z.uuidv7(),
    attempt_id: z.uuidv7(),
    outcome: z.enum(["applied", "duplicate", "revision-conflict"]),
    revision: z.number().int().nonnegative(),
    saved_at: z.iso.datetime({ offset: true }),
  })
  .strict();

export type ExamAutosaveRequest = z.infer<typeof examAutosaveRequestSchema>;
export type ExamAutosaveResponse = z.infer<typeof examAutosaveResponseSchema>;
