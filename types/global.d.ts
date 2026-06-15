// Ambient declarations for non-code imports.
//
// Side-effect CSS imports (e.g. `import '@/app/globals.css'` in the root layout)
// have no type information on their own, which makes some editors' TypeScript
// server report TS2882 ("Cannot find module or type declarations for
// side-effect import"). Declaring the module makes the import type-check
// cleanly everywhere. The build pipeline (Next.js / PostCSS) handles the actual
// styles — this only satisfies the type checker.
declare module '*.css'
