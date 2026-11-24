FROM node:22.23.5-bookworm-slim

ENV NEXT_TELEMETRY_DISABLED=1

USER node
WORKDIR /home/node
RUN mkdir portfolio
WORKDIR /home/node/portfolio

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci
# Retry from the npm cache if the first install skipped a native CSS binary.
RUN node -e 'require("@tailwindcss/postcss")' || \
    (npm ci --prefer-offline && node -e 'require("@tailwindcss/postcss")')
COPY --chown=node:node . .

EXPOSE 3000
CMD ["./node_modules/.bin/next", "dev", "--hostname", "0.0.0.0"]
