FROM node:22

ARG APP_VERSION
ARG BUILD_DATE

ENV APP_VERSION = 1.0.0
ENV BUILD_DATE=${BUILD_DATE}

LABEL app.version=1.0.0
LABEL app.build_date=${BUILD_DATE}

WORKDIR /app
COPY . .

RUN corepack enable
RUN pnpm install
RUN pnpm build
CMD ["pnpm", "start"]