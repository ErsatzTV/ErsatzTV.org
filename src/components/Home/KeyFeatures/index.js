import React from "react";
import styles from "./style.module.css";

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
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Key Features</h2>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.icon}>{f.icon}</div>
              <h4 className={styles.featureTitle}>{f.title}</h4>
              <p className={styles.description}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
