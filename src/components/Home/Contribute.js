import React from "react";

export default function Contribute() {
  return (
    <section style={{ padding: "3rem 0", background: "#181c24" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Contribute</h2>
        <p style={{ maxWidth: 600, margin: "16px auto 32px", color: "#aaa" }}>
          ErsatzTV is open source and thrives on community contributions! Help
          us improve by submitting code, writing documentation, reporting
          issues, or sharing feedback.
        </p>
        <a
          href="https://github.com/ErsatzTV/ErsatzTV"
          target="_blank"
          rel="noopener"
          className="button button--secondary button--md"
        >
          Contribute on GitHub
        </a>
      </div>
    </section>
  );
}
