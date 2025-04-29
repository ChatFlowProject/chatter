FROM node:20-slim

ARG APP_VERSION
ARG BUILD_DATE

LABEL app.version="1.0.0" \
      app.build_date="250429.225335"

WORKDIR /app
COPY . .

RUN corepack enable && \
    pnpm install && \
    pnpm build

CMD ["pnpm", "start"]