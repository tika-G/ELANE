# ÉLANE

Estudio de belleza y bienestar en Barcelona. Aplicación web de portafolio.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Supabase preparado (sin credenciales obligatorias)

## Arranque

```bash
npm install
npm run dev
```

Copia `.env.example` a `.env.local` solo si vas a conectar Supabase. El proyecto funciona sin esas claves.

## Scripts

```bash
npm run lint
npm run typecheck
npm run build
```

Favoritos y reservas de demostración se guardan en `localStorage`. El panel de estudio está en `/dashboard`.
