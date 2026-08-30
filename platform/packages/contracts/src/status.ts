import { z } from "zod";

export const healthResponseSchema = z
  .object({
    status: z.literal("ok"),
    service: z.string().min(1),
    timestamp: z.iso.datetime({ offset: true }),
    ai: z.object({
      enabled: z.literal(false),
      required_for_core_flows: z.literal(false),
      mode: z.literal("deterministic"),
    }),
  })
  .strict();

export const noAiStatusSchema = healthResponseSchema.shape.ai;

export type HealthResponse = z.infer<typeof healthResponseSchema>;
export type NoAiStatus = z.infer<typeof noAiStatusSchema>;
