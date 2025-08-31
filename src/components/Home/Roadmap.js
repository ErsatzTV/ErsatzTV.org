import React from "react";

export default function Roadmap() {
  const items = [
    "Improved EPG customization",
    "More media server integrations",
    "Mobile-friendly web UI",
    "Automated channel suggestions",
    "Enhanced transcoding options",
  ];
  return (
    <section style={{ padding: "3rem 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Roadmap</h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            color: "#aaa",
            maxWidth: 500,
            margin: "24px auto 0",
            textAlign: "left",
          }}
        >
          {items.map((item, i) => (
            <li key={i} style={{ marginBottom: 12, fontSize: 17 }}>
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
