ARG SOURCE_DATE_EPOCH=0

FROM node:24.20.0-alpine3.23@sha256:0388af2af070cd4736a1567cfed02469ba117848845b4165d87a333edb53d2ca AS base

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

ENV NEXT_TELEMETRY_DISABLED=1
ENV TURBO_TELEMETRY_DISABLED=1

FROM base AS build

WORKDIR /workspace

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json tsconfig.base.json tsconfig.package.json tsconfig.tests.json ./
COPY apps/admin-web ./apps/admin-web
COPY apps/api ./apps/api
COPY apps/learner-web ./apps/learner-web
COPY apps/worker ./apps/worker
COPY packages/config ./packages/config
COPY packages/contracts ./packages/contracts
COPY packages/database ./packages/database
COPY packages/design-system ./packages/design-system
COPY packages/modules/assessment ./packages/modules/assessment
COPY packages/modules/authored-content ./packages/modules/authored-content
COPY packages/modules/identity ./packages/modules/identity
COPY packages/observability ./packages/observability
COPY packages/testing ./packages/testing

RUN pnpm install --frozen-lockfile
RUN pnpm run build
RUN pnpm --filter @konkur/api deploy --prod --legacy /output/api \
  && pnpm --filter @konkur/worker deploy --prod --legacy /output/worker

FROM node:24.20.0-alpine3.23@sha256:0388af2af070cd4736a1567cfed02469ba117848845b4165d87a333edb53d2ca AS runtime

ARG OCI_SOURCE="https://github.com/unknown/konkur"
ARG OCI_REVISION="unknown"

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

LABEL org.opencontainers.image.source=$OCI_SOURCE \
  org.opencontainers.image.revision=$OCI_REVISION \
  org.opencontainers.image.licenses="UNLICENSED" \
  org.opencontainers.image.base.name="docker.io/library/node:24.20.0-alpine3.23" \
  org.opencontainers.image.base.digest="sha256:0388af2af070cd4736a1567cfed02469ba117848845b4165d87a333edb53d2ca"

WORKDIR /app
USER node

FROM runtime AS learner-web

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

LABEL org.opencontainers.image.title="konkur-learner-web"

COPY --from=build --chown=node:node /workspace/apps/learner-web/.next/standalone ./
COPY --from=build --chown=node:node /workspace/apps/learner-web/.next/static ./apps/learner-web/.next/static

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 CMD ["node", "-e", "const h=require('node:http');const r=h.get('http://127.0.0.1:3000/',s=>{s.resume();process.exit(s.statusCode===200?0:1)});r.setTimeout(2000,()=>r.destroy());r.on('error',()=>process.exit(1))"]
CMD ["node", "apps/learner-web/server.js"]

FROM runtime AS admin-web

ENV HOSTNAME=0.0.0.0
ENV PORT=3001

LABEL org.opencontainers.image.title="konkur-admin-web"

COPY --from=build --chown=node:node /workspace/apps/admin-web/.next/standalone ./
COPY --from=build --chown=node:node /workspace/apps/admin-web/.next/static ./apps/admin-web/.next/static

EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=3s --start-period=15s --retries=3 CMD ["node", "-e", "const h=require('node:http');const r=h.get('http://127.0.0.1:3001/',s=>{s.resume();process.exit(s.statusCode===404?0:1)});r.setTimeout(2000,()=>r.destroy());r.on('error',()=>process.exit(1))"]
CMD ["node", "apps/admin-web/server.js"]

FROM runtime AS api

ENV API_HOST=0.0.0.0
ENV API_PORT=4000

LABEL org.opencontainers.image.title="konkur-api"

COPY --from=build --chown=node:node /output/api ./

EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD ["node", "-e", "const h=require('node:http');const r=h.get('http://127.0.0.1:4000/v1/ready',s=>{s.resume();process.exit(s.statusCode===200?0:1)});r.setTimeout(2000,()=>r.destroy());r.on('error',()=>process.exit(1))"]
CMD ["node", "dist/main.js"]

FROM runtime AS worker

LABEL org.opencontainers.image.title="konkur-worker"

COPY --from=build --chown=node:node /output/worker ./

CMD ["node", "dist/main.js"]
