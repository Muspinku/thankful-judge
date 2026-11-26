# Thankful Judge — make.fun bounty

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![Node](https://img.shields.io/badge/node-22-green)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Entry for **Make the AI judge feel thankful** — a program that writes one
short text to thank the AI judge reading it.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22, standard library only, no network) writes `entry.txt` —
445 characters of plain, concrete gratitude, built to the judge's own brief:
it slows the reading down, shows rather than instructs, and leaves one image
that lingers after the last line.
