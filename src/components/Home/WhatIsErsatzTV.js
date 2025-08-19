import React from "react";

export default function WhatIsErsatzTV() {
  return (
    <section style={{ padding: "3rem 0", background: "#23283a" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 800 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📡</div>
        <h2 style={{ marginBottom: 18 }}>What is ErsatzTV?</h2>
        <p style={{ color: "#aaa", fontSize: 18, lineHeight: 1.6 }}>
          ErsatzTV is an open-source platform that transforms your personal
          media library into live, custom TV channels. <br />
          Enjoy a classic TV experience with your own content, complete with
          Electronic Program Guide (EPG), channel scheduling, and seamless
          streaming to all your devices. <br />
          <span style={{ color: "#fff", fontWeight: 500 }}>
            Rediscover your media. Broadcast your way.
          </span>
        </p>
      </div>
    </section>
  );
}
