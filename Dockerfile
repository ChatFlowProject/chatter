FROM --platform=linux/amd64 node:22-slim

ARG APP_VERSION
ARG BUILD_DATE

LABEL app.version="1.0.0" \
      app.build_date="${BUILD_DATE}"

WORKDIR /app
COPY . .

RUN corepack enable && \
    pnpm install && \
    pnpm build

CMD ["pnpm", "start"]