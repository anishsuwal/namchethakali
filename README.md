# Namche Thakali Kitchen & Inn

Restaurant website + QR links page.

## Quick start

```bash
cd web
npm install
npm run dev
```

## Pages

- `/` — main restaurant website
- `/links` — QR landing page (review + socials)
- `/qr` — printable QR code for `/links`

## Edit content

Update `web/src/data/restaurant.ts`

## Deploy

Build with `npm run build` inside `web/`, then host the `web/dist` folder (Vercel/Netlify/etc).

After deploy, set `siteUrl` in `web/src/data/restaurant.ts` to your live domain so printed QR codes stay correct.
