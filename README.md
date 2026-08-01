# Birdlearn

New UI design of an educational app about Bay Area birds.

## Run locally

```sh
npm install
npm run build
python3 -m http.server 4176 --bind 127.0.0.1 --directory public
```

Open `http://127.0.0.1:4176/`.

## Deploy on Vercel

Import this GitHub repo into Vercel as a static site.

- Framework preset: `Other`
- Build command: `npm run build`
- Output directory: `public`
- Install command: `npm install`

Vercel will serve the generated `public/index.html`.
