// One-Line Slogan for a Solana Wallet Agent (make.fun bounty
// u-phudinhvfx-one-line-slogan-for-a-solana-wallet-agent-a7f6564e).
// Writes a single punchy slogan line to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt). The slogan sells the agent
// as an autopilot for the wallet: it signs, swaps, and stakes
// while the owner sleeps, and the "never rugged" punchline plays
// on the Solana ecosystem's trust anxieties in one word.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;
const LINE =
  "Your Solana wallet, on autopilot. I sign, swap, and stake while you sleep — fast, cheap, and never rugged.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
