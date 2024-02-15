import React from "react";
import AdvantageCard from "../components/AdvantageCard";

const Advantage = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <AdvantageCard
          imgUrl={
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          }
          desc={`       the process strats when the cold caller calls your data list, then
          once caller gets a lead, the lead will be listened throughout the
          quality assurance team to qualify it to make sure we are getting you
          qualified leads not just window-shoppers to not waste your time, and
          to make sure the caller follows your campaign criteria, and then after
          qualifying the lead, it will be pushed to your CRM automatically, to
          get it closed by the Acquisition Manger.`}
        />
      </div>
    </section>
  );
};

export default Advantage;
