import React from "react";
import HeroSection from "../sections/HeroSection";
import ExperienceSection from "../sections/ExperienceSection";
import Services from "../sections/Services";
import Advantage from "../sections/Advantage";
import WhyUs from "../sections/WhyUs";
import PricingSection from "../sections/PricingSection";
import TeamSection from "../sections/TeamSection";
import KeyInsights from "../sections/KeyInsights";
import AreYouReady from "../sections/AreYouReady";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="flex flex-col grow">
      <div className="grid gap-y-10">
        <section>
          <HeroSection />
        </section>
        <ExperienceSection />
        <Services />
        <Advantage />
        <WhyUs />
        <PricingSection />
        {/* <TeamSection /> */}
        <KeyInsights />
        <AreYouReady />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
