import React from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is ErsatzTV free?",
      a: "Yes! ErsatzTV is completely free and open source.",
    },
    {
      q: "What platforms are supported?",
      a: "ErsatzTV runs on Windows, Linux, and macOS.",
    },
    {
      q: "How can I contribute?",
      a: "You can contribute code, documentation, or feedback via GitHub.",
    },
  ];
  return (
    <section style={{ padding: "3rem 0", background: "#181c24" }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <h2 style={{ textAlign: "center", marginBottom: 32 }}>FAQ</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: 24 }}>
            <strong style={{ fontSize: 17 }}>{f.q}</strong>
            <p style={{ color: "#aaa", margin: "6px 0 0 0" }}>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
