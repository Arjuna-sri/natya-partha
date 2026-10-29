const FRONT_MATTER = /^---[\s\S]*?\n---\s*/;

function splitBySize(text, maxChars, overlap) {
  if (text.length <= maxChars) return [text];
  const pieces = [];
  let buf = [];
  let len = 0;
  for (const line of text.split("\n")) {
    if (len + line.length > maxChars && buf.length) {
      pieces.push(buf.join("\n"));
      const carry = [];
      let c = 0;
      for (let i = buf.length - 1; i >= 0 && c < overlap; i--) {
        carry.unshift(buf[i]);
        c += buf[i].length + 1;
      }
      buf = carry;
      len = c;
    }
    buf.push(line);
    len += line.length + 1;
  }
  if (buf.length) pieces.push(buf.join("\n"));
  return pieces;
}

// Each FAQ question + answer becomes its own chunk
function splitFaq(text) {
  const parts = text.split(/\n(?=\*\*Q\d+\.)/);
  return parts.length > 1 ? parts : null;
}

export function chunkMarkdown(md, { maxChars = 1000, overlap = 150 } = {}) {
  const body = md.replace(FRONT_MATTER, "");
  const sections = [];
  let stack = [];
  let cur = { path: [], lines: [] };

  const flush = () => {
    const text = cur.lines.join("\n").trim();
    if (text) sections.push({ path: cur.path, text });
  };

  for (const line of body.split("\n")) {
    const m = line.match(/^(#{1,4})\s+(.+)$/);
    if (m) {
      flush();
      const level = m[1].length;
      stack = stack.slice(0, level - 1);
      stack.push(m[2].trim());
      cur = { path: [...stack], lines: [] };
    } else {
      cur.lines.push(line);
    }
  }
  flush();

  const chunks = [];
  for (const sec of sections) {
    // find the nearest numbered heading, e.g. "6.4 Asamyuta Hastas"
    let section = "";
    let title = sec.path[sec.path.length - 1] || "";
    for (let i = sec.path.length - 1; i >= 0; i--) {
      const n = sec.path[i].match(/^(\d+(?:\.\d+)*)\.?\s+(.*)$/);
      if (n) {
        section = n[1];
        title = n[2];
        break;
      }
    }
    // The internal RAG guidelines should not be used to answer users
    if (section.split(".")[0] === "17") continue;

    const pieces = splitFaq(sec.text) ?? splitBySize(sec.text, maxChars, overlap);
    for (const piece of pieces) {
      const text = piece.trim();
      if (text.length < 40) continue;
      chunks.push({
        id: `c${chunks.length}`,
        section,
        title,
        headingPath: sec.path.join(" > "),
        text,
      });
    }
  }
  return chunks;
}