# Omar Mohamed — portfolio

A responsive, single-page React + TypeScript + Vite portfolio based on the supplied redesign brief.

## Run locally

```sh
npm install
npm run dev
```

## Check and build

```sh
npm run check
npm run build:static
```

The static build is written to `dist/`. `public/manus-routes.json` declares the home route.

## Add Omar's real assets

- Put the original portrait at `public/avatar.jpg`.
- Put the real CV at `public/Omar Mohamed CV.pdf`.

The portrait area uses a typographic placeholder until the genuine portrait is present; no synthetic likeness is used. The CV controls remain disabled until the PDF is available.

## Notes

- No contact form or backend is included; contact uses a `mailto:` link.
- External project and social links open in a new tab.
- The page includes mobile navigation, category filters, visible focus states, reduced-motion support, and responsive layouts.
