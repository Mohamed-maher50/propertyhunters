import React from "react";

import AdvantageCard from "../components/AdvantageCard";

const WhyUs = () => {
  return (
    <section className="relative mt-16  min-h-[600px]  w-full ">
      <div className="container max-w-screen-xl mx-auto md:px-8">
        <AdvantageCard
          dir="rtl"
          imgUrl={"/background/blog2.webp"}
          className="dir"
          desc="we are proudly serving (+70 ) clients of wholesalers, brokers, and realtors within the real estate industry, and we have (+230 ) employees seeking for growth, and delivering all desired results to our clients."
        />
      </div>
    </section>
  );
};

export default WhyUs;
