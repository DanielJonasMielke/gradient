# Gradient

Math fluency for ML. Expo (React Native) app, iOS first.

See `../gradient/PROJECT.md` and `../gradient/README.md` for the product spec and
the design prototype this is built from.

## Running it

```bash
npm start        # then press i (iOS simulator) or w (web preview)
```

## Checks

```bash
npm run typecheck   # tsc --noEmit — Metro deletes types, it does not check them
npm run lint
npm run format
```

## Layout

```
src/
  app/          routes only — every file here becomes a route
  components/   shared UI
  content/      lesson content (TSX)
  features/     home · lesson · map · review
  graph/        the react-native-svg plotting kit
  lib/          pure logic — spaced repetition, maths helpers, storage
  services/     client-side wrappers around the backend
  theme/        theme.ts (the only place a hex value exists) · use-colors.ts
```
