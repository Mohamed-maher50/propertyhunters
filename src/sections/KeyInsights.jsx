import React from "react";

const KeyInsights = () => {
  return (
    <section className="bg-[#280274]">
      <div className="container  mx-auto">
        <div className="grid py-4 gap-10">
          <h2 className="text-5xl text-lightBlue underline font-bold">
            Key Insights
          </h2>
          <div className="grid p-5 grid-cols-2 lg:grid-cols-3">
            <div className="grid    gap-4 grid-col">
              <div>
                <span className="text-lightBlue text-3xl font-bold">
                  1,500+
                </span>
                <h1 className="text-xl font-bold text-secondary">
                  Vetted Leads Generator
                </h1>
              </div>
              <div>
                <span className="text-lightBlue text-3xl font-bold">
                  Over 10,000+
                </span>
                <h1 className="text-xl font-bold text-secondary">
                  Daily Cold Calls
                </h1>
              </div>
            </div>
            <div className="grid  gap-4 grid-col">
              <div>
                <span className="text-lightBlue text-3xl font-bold">
                  Just under $1M+
                </span>
                <h1 className="text-xl font-bold text-secondary">
                  Deals closed from Leads
                </h1>
              </div>
              <div>
                <span className="text-lightBlue text-3xl font-bold">
                  150+ Clients
                </span>
                <h1 className="text-xl font-bold text-secondary">
                  Currently Being Serviced
                </h1>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInsights;
