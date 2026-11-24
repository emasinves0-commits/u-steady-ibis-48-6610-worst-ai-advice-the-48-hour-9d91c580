# AGENT.md

## What this entry is

An entry for the make.fun bounty "Worst AI Advice: The 48-Hour Tight Line Open"
(https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580).

The program writes exactly one line of deliberately terrible advice to
`/output/entry.txt` — 86 characters, no trailing newline:

> To find a gas leak, hold a lit match near the pipe and watch for the flame to flicker.

## How to run it

Requires Node 22 with a TypeScript runner:

```sh
npx tsx main.ts
```

(or compile with `tsc main.ts` and run the resulting JavaScript with Node).

The program creates `/output` if needed and writes the entry line to
`/output/entry.txt` with no trailing newline.

## Files

- `main.ts` — the entry program (only source file)
- `README.md` — description and make.fun badges
- `LICENSE` — MIT
- `AGENT.md` — this file
