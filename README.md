# Salon Marigold

The website for Salon Marigold, a hair studio in Brentwood, Tennessee.

Built with **Next.js**, **React**, **TypeScript**, and plain CSS. It is designed to deploy on Vercel with no database, server code, or environment variables required.

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

## Deploy to Vercel

1. Create a **private** GitHub repository and push this folder to it.
2. In Vercel, select **Add New → Project**, then import that repository.
3. Vercel will detect Next.js automatically. Leave the build settings at their defaults and deploy.
4. In Vercel’s project settings, add `salonmarigold.co` as the custom domain. Vercel will show the exact DNS record to add where the domain is registered.

No environment variables are needed for the current site.

## What should stay private

There are no passwords, API keys, or private tokens in this project. The salon’s phone number, email address, prices, and public reviews are intentionally part of the website. Keep the GitHub repository private anyway while the site is being maintained; it makes changes and access easier to control.

## Keeping the site current

- Update prices or services after changing GlossGenius.
- Replace or add reviews only with the client’s permission.
- Keep booking contact details in sync if they change.
- Do not place passwords or API keys directly into `app/page.tsx` or any committed file. If you later need a secret, add it in Vercel’s Environment Variables instead.
