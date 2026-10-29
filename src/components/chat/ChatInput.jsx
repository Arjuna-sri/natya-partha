import { useState } from "react";
import { Send } from "lucide-react";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");

  function submit() {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  return (
    <div className="chat-input">
      <label htmlFor="chat-text" className="visually-hidden">
        Ask a question about Bharatanatyam
      </label>
      <textarea
        id="chat-text"
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about adavus, mudras, rasa, repertoire…"
        disabled={disabled}
      />
      <button
        type="button"
        className="send-btn"
        onClick={submit}
        disabled={disabled || value.trim() === ""}
        aria-label="Send question"
      >
        <Send size={20} aria-hidden="true" />
      </button>
    </div>
  );
}