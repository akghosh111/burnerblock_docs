# BurnerBlock Documentation

Documentation for [BurnerBlock](https://www.burnerblock.pro/), a developer-first email verification and signup abuse prevention platform.

Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Deployment to Cloudflare Pages

1. Push this repository to GitHub/GitLab.
2. Connect your repository to [Cloudflare Pages](https://dash.cloudflare.com/).
3. Use the following build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
