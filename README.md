# Salon Marigold

The website for Salon Marigold, a hair studio in Brentwood, Tennessee.

Built with **Next.js**, **React**, **TypeScript**, and plain CSS. Next.js exports the site as static files, and Cloudflare Workers serves the generated assets. No database, server code, or runtime environment variables are required.

Production is available at [salonmarigold.co](https://salonmarigold.co).

## Project structure

| Path | Description |
| --- | --- |
| `app/` | Next.js App Router source for the website. |
| `app/page.tsx` | Main salon page, including services, prices, contact links, reviews, policies, and footer content. |
| `app/globals.css` | Global styling, colors, typography, layout, animation, and responsive rules. |
| `app/layout.tsx` | Root HTML layout, page metadata, canonical URL, social sharing metadata, favicon configuration, and salon structured data. |
| `app/robots.ts` | Generates `robots.txt` and tells search engines where to find the sitemap. |
| `app/sitemap.ts` | Generates `sitemap.xml` for the production domain. |
| `public/` | Static images, logos, favicon, and social sharing artwork. |
| `next.config.ts` | Configures Next.js to create a static export in `out/` and disables image optimization that requires a server. |
| `wrangler.jsonc` | Configures the Cloudflare Worker, static asset directory, `workers.dev` route, and branch preview URLs. |
| `package.json` | Project metadata, Node.js requirement, package versions, and development commands. |
| `pnpm-lock.yaml` | Locks dependency versions so local and Cloudflare builds use the same packages. |
| `pnpm-workspace.yaml` | Defines the repository as a pnpm workspace. |
| `tsconfig.json` | TypeScript compiler settings. |
| `eslint.config.mjs` | ESLint rules used by `pnpm lint`. |
| `.gitignore` | Excludes dependencies, generated output, local Cloudflare state, secrets, logs, and operating-system files. |
| `README.md` | Setup, maintenance, deployment, and project reference documentation. |

Generated directories such as `node_modules/`, `.next/`, `out/`, and `.wrangler/` are local build artifacts and are not committed.

## Day-to-day maintenance

- Page content and links: `app/page.tsx`
- Design, colors, and responsive layout: `app/globals.css`
- Browser title, description, sharing image, and favicon: `app/layout.tsx`
- Images and logos: `public/`

The service prices, contact links, cancellation policy, gift-card link, and reviews are all in `app/page.tsx`.

## Run it locally

Install [Node.js 20 or newer](https://nodejs.org/) and pnpm. On a Mac with Homebrew, run this once:

```bash
brew install node pnpm
```

Then, from the project folder, run:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` in a browser. Stop the local site with `Ctrl+C`.

From the project folder, the everyday commands are:

```bash
pnpm dev       # start the local website
pnpm build     # create a production build
pnpm lint      # check the code
```

## Packages

This project uses `pnpm` to manage packages. The installed packages live in the local `node_modules/` folder and are not committed to Git.

```bash
pnpm install                 # install exactly what the project needs
pnpm add package-name        # add a production package
pnpm add -D package-name     # add a development-only package
pnpm remove package-name     # remove a package
pnpm update                  # update packages within their allowed versions
pnpm outdated                # see available updates
```

For this site, avoid adding packages unless they solve a real need. Most content and design changes only require editing `app/page.tsx` or `app/globals.css`.

## Before publishing

```bash
pnpm lint
pnpm build
```

## Deploy to Cloudflare Workers

Cloudflare Workers Builds is connected to the GitHub repository. The `main` branch is production; every other branch is a non-production preview.

Use these settings under **Workers & Pages → salonmarigold → Settings → Build**:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build non-production branches | Enabled |
| Build command | `pnpm run build` |
| Production deploy command | `npx wrangler deploy` |
| Non-production deploy command | `npx wrangler versions upload` |
| Root directory | `/` |

Pushing to `main` builds the static export and deploys it to the production Worker and `salonmarigold.co`. Pushing another branch uploads a Worker version without promoting it to production and creates a branch preview under `*.workers.dev`.

The Worker configuration in `wrangler.jsonc` serves the generated `out/` directory. The apex domain is attached as a Worker Custom Domain. `www.salonmarigold.co` uses a proxied placeholder DNS record and a permanent redirect to `salonmarigold.co`.

No environment variables are needed for the current site.

Cloudflare account configuration and future Terraform code should live in a separate infrastructure repository rather than this application repository.

## What should stay private

There are no passwords, API keys, or private tokens in this project. The salon’s phone number, email address, prices, and public reviews are intentionally part of the website. Keep the GitHub repository private anyway while the site is being maintained; it makes changes and access easier to control.

## Keeping the site current

- Update prices or services after changing GlossGenius.
- Replace or add reviews only with the client’s permission.
- Keep booking contact details in sync if they change.
- Do not place passwords or API keys directly into `app/page.tsx` or any committed file. If you later need a secret, add it in Cloudflare’s encrypted settings instead.
