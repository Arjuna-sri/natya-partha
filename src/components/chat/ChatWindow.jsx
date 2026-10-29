import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow({ messages, isLoading }) {
  const endRef = useRef(null);

  // Scroll to the newest message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  return (
    <div
      className="chat-window"
      role="log"
      aria-live="polite"
      aria-label="Conversation"
    >
      {messages.map((m) => (
        <ChatMessage key={m.id} message={m} />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={endRef} />
    </div>
  );
}