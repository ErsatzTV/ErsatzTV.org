import React from "react";

export default function Showcase() {
  // Exemplos fictícios para o layout
  const showcases = [
    {
      image: "", // Placeholder para imagem do canal
      channel: "Retro Cartoons 24/7",
      desc: "A non-stop channel with classic cartoons from the 80s and 90s, curated for nostalgia lovers.",
      user: "User: @cartoonfan",
    },
    {
      image: "",
      channel: "Indie Movie Nights",
      desc: "A weekly schedule of independent films and documentaries, handpicked by the community.",
      user: "User: @moviemaker",
    },
    {
      image: "",
      channel: "Family Music TV",
      desc: "A music video channel for all ages, featuring pop, rock, and classics with subtitles.",
      user: "User: @musicdad",
    },
  ];
  return (
    <section style={{ padding: "3rem 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Showcase</h2>
        <p style={{ color: "#aaa", marginBottom: 32 }}>
          See what the community is building with ErsatzTV! Want to be featured?{" "}
          <br />
          <span style={{ color: "#fff", fontWeight: 500 }}>
            Share your channel or EPG setup on our{" "}
            <a
              href="https://discord.ersatztv.org"
              target="_blank"
              rel="noopener"
              style={{ color: "#00bcd4", textDecoration: "underline" }}
            >
              Discord
            </a>{" "}
            and get showcased here!
          </span>
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {showcases.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#23283a",
                borderRadius: 12,
                padding: 24,
                maxWidth: 320,
                color: "#eee",
                minWidth: 220,
                boxShadow: "0 2px 12px #0002",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 120,
                  background: "linear-gradient(135deg, #222 60%, #444 100%)",
                  borderRadius: 8,
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#bbb",
                  fontSize: 18,
                  fontStyle: "italic",
                }}
              >
                {/* Placeholder for channel/EPG image */}
                [Channel Image]
              </div>
              <h4 style={{ margin: "8px 0 4px 0", color: "#fff" }}>
                {s.channel}
              </h4>
              <p style={{ color: "#aaa", fontSize: 15, marginBottom: 8 }}>
                {s.desc}
              </p>
              <span style={{ color: "#00bcd4", fontSize: 14 }}>{s.user}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <a
            href="https://discord.ersatztv.org"
            target="_blank"
            rel="noopener"
            className="button button--secondary button--md"
          >
            Submit Your Channel on Discord
          </a>
        </div>
      </div>
    </section>
  );
}
