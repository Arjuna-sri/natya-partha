import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chunkMarkdown } from "./chunker.js";
import { embed, EMBEDDING_MODEL } from "./embedder.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOC = path.resolve(__dirname, "../../public/documents/bharatanatyam_knowledge_base.md");
const OUT = path.resolve(__dirname, "../data/index.json");

const md = await fs.readFile(DOC, "utf8");
const chunks = chunkMarkdown(md);
console.log(`Chunks created: ${chunks.length}`);
console.log("Loading the embedding model (the first run downloads ~25 MB)...");

for (let i = 0; i < chunks.length; i++) {
  const c = chunks[i];
  // The heading path is included so the meaning stays attached to the text
  c.embedding = await embed(`${c.headingPath}\n${c.text}`);
  if ((i + 1) % 25 === 0) console.log(`Embedded ${i + 1}/${chunks.length}`);
}

await fs.mkdir(path.dirname(OUT), { recursive: true });
await fs.writeFile(
  OUT,
  JSON.stringify({ model: EMBEDDING_MODEL, createdAt: new Date().toISOString(), chunks })
);
console.log(`Done. Saved ${chunks.length} chunks to server/data/index.json`);