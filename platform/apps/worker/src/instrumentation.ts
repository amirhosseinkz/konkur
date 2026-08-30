import { startObservability } from "@konkur/observability";

const otlpEndpoint = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;

export const telemetry = startObservability({
  serviceName: "konkur-worker",
  ...(otlpEndpoint === undefined ? {} : { otlpEndpoint }),
});
