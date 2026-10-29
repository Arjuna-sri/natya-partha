// The ONLY file that talks to the RAG backend.
// No API keys belong here. Keys live on the server.

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export function isBackendConfigured() {
  return API_BASE_URL.trim().length > 0;
}

/**
 * Ask Natya Partha a question.
 * language: "auto" | "english" | "tamil" | "thanglish"
 * Backend response: { answer, sources: [{ section, title }], sufficientEvidence }
 */
export async function askNatyaPartha(question, language = "auto") {
  if (!isBackendConfigured()) {
    const error = new Error("The knowledge backend is not connected yet.");
    error.code = "BACKEND_NOT_CONNECTED";
    throw error;
  }

  let response;
  try {
    response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, language }),
    });
  } catch {
    const error = new Error("Cannot reach the backend.");
    error.code = "BACKEND_UNREACHABLE";
    throw error;
  }

  if (!response.ok) {
    const error = new Error(`Request failed with status ${response.status}`);
    error.code = response.status === 429 ? "RATE_LIMITED" : "REQUEST_FAILED";
    throw error;
  }
  return response.json();
}