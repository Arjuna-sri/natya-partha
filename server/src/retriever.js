import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { embed } from "./embedder.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDEX_PATH = path.resolve(__dirname, "../data/index.json");

export async function loadIndex() {
  try {
    const raw = await fs.readFile(INDEX_PATH, "utf8");
    return JSON.parse(raw).chunks;
  } catch {
    throw new Error("server/data/index.json not found. Run: npm run ingest");
  }
}

// Vectors are normalized, so the dot product equals cosine similarity
function dot(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}

export async function retrieve(question, chunks, k = 5) {
  const q = await embed(question);
  return chunks
    .map((c) => ({ ...c, score: dot(q, c.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}