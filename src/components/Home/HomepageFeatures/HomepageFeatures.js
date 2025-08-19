import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const features = [
  {
    title: "Effortless Channel Creation",
    Svg: require("@site/static/images/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Design and launch your own live TV channels in minutes, using a simple
        and intuitive interface.
      </>
    ),
  },
  {
    title: "Universal Streaming Compatibility",
    Svg: require("@site/static/images/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Stream to any device with built-in IPTV server and HDHomeRun emulation,
        ensuring seamless playback on popular apps.
      </>
    ),
  },
  {
    title: "Smart Scheduling Engine",
    Svg: require("@site/static/images/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Automate your channel lineup with flexible scheduling—by collection,
        genre, or custom rules.
      </>
    ),
  },
  {
    title: "Event-Based Programming",
    Svg: require("@site/static/images/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Schedule special marathons, themed days, or holiday events with just a
        few clicks.
      </>
    ),
  },
  {
    title: "High-Performance Transcoding",
    Svg: require("@site/static/images/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Deliver smooth, high-quality streams with hardware-accelerated
        transcoding for all your content.
      </>
    ),
  },
  {
    title: "Deep Media Server Integration",
    Svg: require("@site/static/images/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Connect with Plex, Jellyfin, and Emby to unlock your entire media
        library and rich metadata.
      </>
    ),
  },
  {
    title: "Music Videos & Subtitles",
    Svg: require("@site/static/images/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Mix music videos into your channels and enjoy automatic subtitle burn-in
        for accessibility.
      </>
    ),
  },
  {
    title: "Professional Broadcast Touches",
    Svg: require("@site/static/images/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Add pre-rolls, mid-rolls, and post-rolls for a polished, TV-like viewing
        experience.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresIntro}>
        <h2>What is ErsatzTV?</h2>
        <p>
          ErsatzTV transforms your personal media collection into live, custom
          TV channels. Whether you want to relive your favorite shows, create
          themed marathons, or simply enjoy a classic TV experience, ErsatzTV
          gives you the power to broadcast your own way—anytime, anywhere, on
          any device.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
