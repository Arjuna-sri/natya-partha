import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import BackgroundArtwork from "./components/layout/BackgroundArtwork";
import Header from "./components/layout/Header";
import SuggestedQuestions from "./components/chat/SuggestedQuestions";
import ChatWindow from "./components/chat/ChatWindow";
import ChatInput from "./components/chat/ChatInput";
import LanguageSwitch from "./components/chat/LanguageSwitch";
import { SUGGESTED_QUESTIONS } from "./data/suggestedQuestions";
import { askNatyaPartha } from "./services/ragService";

const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const STORAGE_KEY = "natya-partha-chat-v1";
const MAX_SAVED_MESSAGES = 60;
const LANGUAGES = ["auto", "english", "tamil", "thanglish"];

// Read the saved chat from this browser (safe if storage is empty or blocked)
function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { messages: [], language: "auto" };
    const data = JSON.parse(raw);
    return {
      messages: Array.isArray(data.messages)
        ? data.messages.slice(-MAX_SAVED_MESSAGES)
        : [],
      language: LANGUAGES.includes(data.language) ? data.language : "auto",
    };
  } catch {
    return { messages: [], language: "auto" };
  }
}

const ERROR_MESSAGES = {
  BACKEND_NOT_CONNECTED:
    "The Natya Partha knowledge backend is not connected yet, so I cannot answer from the verified knowledge base. I will not guess an answer without it.",
  BACKEND_UNREACHABLE:
    "I cannot reach the knowledge service right now. Please check that the backend is running and try again.",
  RATE_LIMITED:
    "The free knowledge service is busy at the moment. Please wait about a minute and ask again.",
};

export default function App() {
  const [initial] = useState(loadSaved);
  const [messages, setMessages] = useState(initial.messages);
  const [language, setLanguage] = useState(initial.language);
  const [isLoading, setIsLoading] = useState(false);

  // Save the chat in this browser whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          messages: messages.slice(-MAX_SAVED_MESSAGES),
          language,
        })
      );
    } catch {
      // Storage may be full or blocked (private mode). The chat still works.
    }
  }, [messages, language]);

  async function handleSend(text) {
    if (isLoading) return;

    const userMessage = {
      id: makeId(),
      role: "user",
      text,
      time: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const result = await askNatyaPartha(text, language);
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "ai",
          text: result.answer,
          sources: result.sources,
          time: Date.now(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "ai",
          isError: true,
          text:
            ERROR_MESSAGES[error.code] ||
            "Something went wrong while reaching the knowledge base. Please try again in a moment.",
          time: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleNewChat() {
    if (!isLoading) setMessages([]);
  }

  const hasMessages = messages.length > 0;

  return (
    <>
      <BackgroundArtwork />
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <section className="panel" aria-label="Natya Partha chat">
            {!hasMessages ? (
              <div className="welcome">
                <p className="welcome-kicker">Where heritage meets intelligence</p>
                <h1 className="welcome-title">Natya Partha</h1>
                <div className="ornament" aria-hidden="true">✦</div>
                <p className="welcome-text">
                  A quiet space to explore Bharatanatyam: its history, adavus,
                  mudras, rasa, repertoire, music, and the path of a learner.
                  Ask in English, தமிழ், or Thanglish.
                </p>
                <p className="welcome-prompt">Begin with a question</p>
                <SuggestedQuestions
                  questions={SUGGESTED_QUESTIONS}
                  onSelect={handleSend}
                />
              </div>
            ) : (
              <ChatWindow messages={messages} isLoading={isLoading} />
            )}

            {hasMessages && (
              <button
                type="button"
                className="new-chat"
                onClick={handleNewChat}
                disabled={isLoading}
              >
                <RotateCcw size={16} aria-hidden="true" /> New conversation
              </button>
            )}

            <LanguageSwitch
              value={language}
              onChange={setLanguage}
              disabled={isLoading}
            />
            <ChatInput onSend={handleSend} disabled={isLoading} />
            <p className="welcome-note">
              Answers come from a curated knowledge base that is still being
              verified. Tamil and Thanglish answers are AI translations and may
              contain mistakes. Your chat is saved only in this browser. Please
              do not type personal details. Natya Partha does not replace a guru.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}