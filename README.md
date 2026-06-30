<h1 align="center">
<img align="center" src="src/assets/icon.png" alt="rubec" width="100" /><br>
rubec
</h1>

<p align="center">
    My personal site. Projects on electronics, IoT, robotics, and art.<br>
    Built with Astro + Tailwind, live at <a href="https://rubec.fr/">rubec.fr</a>.
</p>

---

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
