# rbeilvert.github.io

Personal site of Robin Beilvert — projects on electronics, IoT, robotics, and art. Built with [Astro](https://astro.build/) + Tailwind. Live at <https://rbeilvert.github.io>.

## Run locally

Requires Node.js 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to dist/
npm run preview  # serve the build
```

## Adding a project

Drop a `.md`/`.mdx` file in `src/content/projects/` (schema in `src/content.config.ts`), then add a nav entry in `src/consts.ts` if needed.

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
