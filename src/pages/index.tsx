import React from "react";
import Layout from "@theme/Layout";

import HomeHero from "@site/src/components/Home/HomeHero";
import WhatIsErsatzTV from "@site/src/components/Home/WhatIsErsatzTV";
import KeyFeatures from "@site/src/components/Home/KeyFeatures";
import HowItWorks from "@site/src/components/Home/HowItWorks";
import CommunitySupport from "@site/src/components/Home/CommunitySupport";
import Contribute from "@site/src/components/Home/Contribute";
import FAQ from "@site/src/components/Home/FAQ";
// import Showcase from "@site/src/components/Home/Showcase";

export default function Home() {
  return (
    <Layout
      title="Your Personal IPTV Server"
      description="ErsatzTV allows you to configure and stream custom live channels using your media library. Explore a new way to organize and stream your media collection with stability and flexibility."
    >
      <>
        <HomeHero />
        <WhatIsErsatzTV />
        <KeyFeatures />
        <HowItWorks />
        <FAQ />
        <CommunitySupport />
        {/* <Showcase /> - This is a future proposal*/}
        <Contribute />
      </>
    </Layout>
  );
}
