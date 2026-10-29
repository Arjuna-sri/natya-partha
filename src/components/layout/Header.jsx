export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        {/* Simple brass-lamp (diya) mark; replace with a real logo later */}
        <svg
          className="brand-mark"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          aria-hidden="true"
        >
          <path
            d="M16 3C19.5 8 20.5 11 16 14.5C11.5 11 12.5 8 16 3Z"
            fill="#e3c987"
          />
          <path
            d="M5 19H27C27 25 22 28 16 28C10 28 5 25 5 19Z"
            fill="none"
            stroke="#c9a24b"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="brand-name">Natya Partha</span>
      </div>
      <span className="brand-tag">Bharatanatyam Knowledge Assistant</span>
    </header>
  );
}