import { ASSETS } from "../../config/assets";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";
  const date = new Date(message.time);
  const timeLabel = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const classes = [
    "msg",
    isUser ? "msg-user" : "msg-ai",
    message.isError ? "msg-error" : "",
  ].join(" ");

  // Split the answer into paragraphs at blank lines
  const paragraphs = String(message.text).split(/\n{2,}/);
  const hasSources = message.sources && message.sources.length > 0;

  return (
    <article className={classes}>
      <img
        className="msg-avatar"
        src={isUser ? ASSETS.userHand : ASSETS.aiHand}
        alt=""
        width="40"
        height="40"
      />
      <div className="msg-body">
        <header className="msg-meta">
          <span className="msg-name">{isUser ? "You" : "Natya Partha"}</span>
          <time dateTime={date.toISOString()}>{timeLabel}</time>
        </header>

        <div className="msg-text">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {hasSources && (
          <div className="msg-sources-wrap">
            <span className="msg-sources-label">Sources</span>
            <ul className="msg-sources" aria-label="Sources">
              {message.sources.map((s, i) => (
                <li key={i} className="msg-source">
                  {s.section ? `Section ${s.section}: ` : ""}
                  {s.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}