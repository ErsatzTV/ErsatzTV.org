import React from "react";

export default function KeyFeatures() {
  const features = [
    {
      icon: "🛠️",
      title: "Custom Channels",
      desc: "Create and schedule your own live TV channels.",
    },
    {
      icon: "📺",
      title: "IPTV & EPG",
      desc: "Stream with IPTV and Electronic Program Guide support.",
    },
    {
      icon: "⚡",
      title: "Hardware Transcoding",
      desc: "High-performance streaming with hardware acceleration.",
    },
    {
      icon: "🔗",
      title: "Media Server Integration",
      desc: "Connect Plex, Jellyfin, Emby and more.",
    },
    {
      icon: "🎵",
      title: "Music & Subtitles",
      desc: "Mix music videos and enjoy subtitle support.",
    },
    {
      icon: "🌎",
      title: "Open Source",
      desc: "Free, open, and community-driven project.",
    },
  ];
  return (
    <section style={{ padding: "3rem 0", background: "#181c24" }}>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 32 }}>Key Features</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {features.map((f, i) => (
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
              <div style={{ fontSize: 38, marginBottom: 12 }}>{f.icon}</div>
              <h4 style={{ margin: "8px 0" }}>{f.title}</h4>
              <p style={{ color: "#aaa", fontSize: 15 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
