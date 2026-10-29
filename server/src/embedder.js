import { pipeline } from "@huggingface/transformers";

let extractorPromise;
function getExtractor() {
  extractorPromise ??= pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  return extractorPromise;
}

export const EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";

export async function embed(text) {
  const extractor = await getExtractor();
  const output = await extractor(text, { pooling: "mean", normalize: true });
  return Array.from(output.data);
}