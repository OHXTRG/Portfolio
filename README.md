# Rahul Sharma portfolio (React + Vite)

All content lives in `src/data.js`. Replace the `YOUR-ID` links and the placeholder project links.

## Run locally
    npm install
    npm run dev

## Deploy on Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
3. Framework preset: Vite (or set manually):
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Save and deploy. Every push to the main branch redeploys.

You can also deploy without Git: `npm run build` then `npx wrangler pages deploy dist`.
