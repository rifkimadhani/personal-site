# Backend & Systems Consulting

My consulting and services site for small, fixed-scope remote backend and Linux systems work. It outlines the services I offer, selected case studies across PHP applications, system integrations, and server operations, how I approach engagements, and how to get in touch.

## Stack

- Next.js, React, and TypeScript
- Tailwind CSS and shadcn/ui
- Motion for React and Three.js for the hero background

## Run locally

With Node.js 22.13+ (22.x) or 24+:

```sh
npm ci
npm run dev
```

You can also use Docker:

```sh
docker compose up --build --watch
```

Open [localhost:3000](http://localhost:3000).

## Build

```sh
npm run build
```

The static site is written to `out/`. Run `npm run preview` to serve it locally with Python 3.

The case studies and contact links are in [`lib/portfolio.ts`](lib/portfolio.ts).
