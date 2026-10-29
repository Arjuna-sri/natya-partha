const OPTIONS = [
  { value: "auto", label: "Auto" },
  { value: "english", label: "English" },
  { value: "tamil", label: "தமிழ்" },
  { value: "thanglish", label: "Thanglish" },
];

export default function LanguageSwitch({ value, onChange, disabled }) {
  return (
    <div className="lang-switch" role="radiogroup" aria-label="Answer language">
      <span className="lang-switch-label">Answer in</span>
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          className={`lang-btn${value === o.value ? " is-active" : ""}`}
          onClick={() => onChange(o.value)}
          disabled={disabled}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}