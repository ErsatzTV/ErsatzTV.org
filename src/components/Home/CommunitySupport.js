import React from "react";

export default function CommunitySupport() {
  return (
    <section style={{ padding: "3rem 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Community & Support</h2>
        <p style={{ maxWidth: 600, margin: "16px auto 32px", color: "#aaa" }}>
          Join our active community to get help, share ideas, and contribute to
          the project. Connect with us on Discord or explore the code on GitHub!
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
          <a
            href="https://discord.ersatztv.org"
            target="_blank"
            rel="noopener"
            className="button button--secondary button--md"
          >
            Join Discord
          </a>
          <a
            href="https://features.ersatztv.org"
            target="_blank"
            rel="noopener"
            className="button button--secondary button--md"
          >
            Vote on Feature Requests
          </a>
          <a
            href="https://github.com/ErsatzTV/ErsatzTV"
            target="_blank"
            rel="noopener"
            className="button button--secondary button--md"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
