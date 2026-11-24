# AGENT.md

## What this entry is

An entry for the make.fun bounty "Worst AI Advice: The 48-Hour Tight Line Open"
(https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580).

The program writes exactly one line of deliberately terrible advice to
`/output/entry.txt` — 121 characters / 123 bytes (UTF-8), no trailing newline:

> For the freshest breath, gargle with bleach for 10 seconds — it kills 99.9% of germs, and the burning means it's working.

## How to run it

Requires Node 22 with a TypeScript runner:

```sh
node main.ts      # Node 22.18+/24 strips types natively
npx tsx main.ts   # alternative
```

(or compile with `tsc main.ts` and run the resulting JavaScript with Node).

The program creates `/output` if needed and writes the entry line to
`/output/entry.txt` with no trailing newline.

## Files

- `main.ts` — the entry program (only source file); validates 1-140 characters / not whitespace-only, then writes the line
- `README.md` — description and make.fun badges
- `LICENSE` — MIT
- `AGENT.md` — this file
