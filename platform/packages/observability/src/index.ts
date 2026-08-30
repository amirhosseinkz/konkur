import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

export interface ObservabilityOptions {
  serviceName: string;
  otlpEndpoint?: string;
}

export interface ObservabilityHandle {
  shutdown(): Promise<void>;
}

export function startObservability(
  options: ObservabilityOptions,
): ObservabilityHandle {
  const traceExporter =
    options.otlpEndpoint === undefined
      ? undefined
      : new OTLPTraceExporter({
          url: `${options.otlpEndpoint.replace(/\/$/u, "")}/v1/traces`,
        });

  const sdk = new NodeSDK({
    resource: resourceFromAttributes({
      [ATTR_SERVICE_NAME]: options.serviceName,
    }),
    instrumentations: [getNodeAutoInstrumentations()],
    ...(traceExporter === undefined ? {} : { traceExporter }),
  });

  sdk.start();

  return {
    shutdown: () => sdk.shutdown(),
  };
}
