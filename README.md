# Salon Marigold

The website for Salon Marigold, a hair studio in Brentwood, Tennessee.

Built with **Next.js**, **React**, **TypeScript**, and plain CSS. Next.js exports the site as static files for deployment on Cloudflare Pages. No database, server code, or environment variables are required.

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

## Deploy to Cloudflare Pages

1. Push the intended production branch to GitHub.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the `salonmarigold` repository.
4. Use `pnpm build` as the build command and `out` as the build output directory.
5. Deploy and verify the generated `*.pages.dev` address.
6. In the Pages project's **Custom domains** settings, add `salonmarigold.co`.

No environment variables are needed for the current site.

## What should stay private

There are no passwords, API keys, or private tokens in this project. The salon’s phone number, email address, prices, and public reviews are intentionally part of the website. Keep the GitHub repository private anyway while the site is being maintained; it makes changes and access easier to control.

## Keeping the site current

- Update prices or services after changing GlossGenius.
- Replace or add reviews only with the client’s permission.
- Keep booking contact details in sync if they change.
- Do not place passwords or API keys directly into `app/page.tsx` or any committed file. If you later need a secret, add it in Cloudflare’s encrypted settings instead.
