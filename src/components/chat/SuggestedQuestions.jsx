export default function SuggestedQuestions({ questions, onSelect }) {
  return (
    <div className="suggested" role="group" aria-label="Suggested questions">
      {questions.map((q) => (
        <button
          key={q}
          type="button"
          className="suggested-chip"
          onClick={() => onSelect(q)}
        >
          {q}
        </button>
      ))}
    </div>
  );
}