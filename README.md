# Sehyun Ryu — Academic Portfolio

Personal academic website for Sehyun Ryu, built with React and vinext and deployed through GitHub Pages.

Planned address: `https://sehyunryu.github.io/`

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Content

- `app/page.tsx` — biography, research interests, publications, experience, service, awards, and projects
- `app/my-vision/page.tsx` — personal vision and the Skyblue Sunflower
- `app/my-learnings/page.tsx` — coursework, teaching, reading, and travel
- `app/globals.css` — responsive visual design and automatic dark mode
- `public/profile.webp` — profile photograph
- `public/og.webp` — social sharing image

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`. The workflow builds the app, produces a static snapshot, and deploys it to GitHub Pages.

© 2026 Sehyun Ryu
