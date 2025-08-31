import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      icon: "1️⃣",
      title: "Install ErsatzTV",
      desc: "Download and set up the server on your system.",
    },
    {
      icon: "2️⃣",
      title: "Add Your Media",
      desc: "Connect your media libraries and collections.",
    },
    {
      icon: "3️⃣",
      title: "Create Channels",
      desc: "Design and schedule your own live channels.",
    },
    {
      icon: "4️⃣",
      title: "Stream Anywhere",
      desc: "Watch on any device with IPTV and EPG support.",
    },
  ];
  return (
    <section style={{ padding: "3rem 0" }}>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 32 }}>How It Works</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#23283a",
                borderRadius: 12,
                padding: 24,
                minWidth: 180,
                maxWidth: 220,
                textAlign: "center",
                boxShadow: "0 2px 12px #0002",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
              <h4 style={{ margin: "8px 0" }}>{s.title}</h4>
              <p style={{ color: "#aaa", fontSize: 15 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
