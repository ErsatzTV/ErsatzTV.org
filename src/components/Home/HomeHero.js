import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../../pages/index.module.css";

export default function HomeHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <div
            style={{
              flex: "1 1 350px",
              minWidth: 300,
              maxWidth: 520,
              textAlign: "left",
            }}
          >
            <h1
              className="hero__title"
              style={{ fontWeight: 800, fontSize: "2.8rem", marginBottom: 16 }}
            >
              Build Your Own Live TV Channels
            </h1>
            <p
              className="hero__subtitle"
              style={{ fontSize: "1.25rem", marginBottom: 32 }}
            >
              ErsatzTV lets you transform your media library into a
              personalized, live TV experience—complete with EPG, channel
              scheduling, and seamless streaming to all your devices. Rediscover
              your content, your way.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs">
                Get Started
              </Link>
            </div>
          </div>
          <div
            style={{
              flex: "1 1 350px",
              minWidth: 300,
              maxWidth: 540,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 280,
                background: "linear-gradient(135deg, #222 60%, #444 100%)",
                borderRadius: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
                marginBottom: 12,
                border: "2px dashed #888",
                position: "relative",
              }}
            >
              <img
                src="/images/home/epg-example.png"
                alt="EPG Example"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 18,
                }}
              />
            </div>
            <span style={{ color: "#aaa", fontSize: 15, textAlign: "center" }}>
              Example: Electronic Program Guide (EPG) for your custom IPTV
              channels
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
