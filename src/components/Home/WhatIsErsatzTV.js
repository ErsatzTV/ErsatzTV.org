import React from "react";

export default function WhatIsErsatzTV() {
  return (
    <section
      style={{ padding: "3rem 0", background: "#23283a", color: "#aaa" }}
    >
      <div
        className="container"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24, color: "#fff" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📡</div>
          <h2 style={{ marginBottom: 18 }}>What is ErsatzTV?</h2>
        </div>

        <div
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            textAlign: "justify",
            maxWidth: "100%",
          }}
        >
          <p style={{ marginBottom: 20 }}>
            ErsatzTV is an open-source platform that transforms your personal
            media library into live, custom TV channels.
          </p>
          <p style={{ marginBottom: 24 }}>
            Enjoy a classic TV experience with your own content, complete with
            Electronic Program Guide (EPG), channel scheduling, and seamless
            streaming to all your devices.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: 20,
              margin: 0,
              fontStyle: "italic",
            }}
          >
            Rediscover your media. Broadcast your way.
          </p>
        </div>
      </div>
    </section>
  );
}
