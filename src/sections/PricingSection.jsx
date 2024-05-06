import React from "react";
import PricingCard from "../components/PricingCard";
const plans = [
  {
    name: "1 caller",
    price: 5.5,
    isMostPop: true,
    features: [
      `native/ fluent English speaker`,
      "40 hours per week of productivity",
      "customer support",
      "Quality control",
      "Dialer admin managerment",
    ],
  },
  {
    name: "2-3 callers",
    price: 5,
    isMostPop: false,
    features: [
      "native/ fluent English speakers",
      "40 hours per week of productivity",
      "customer support",
      "Quality control",
      "Dialer admin managerment",
    ],
  },
  {
    name: "4 callers",
    subTitle: "customized pricing plans",
    isMostPop: true,
    features: [
      "customized pricing plans",
      "native/ fluent English speaker",
      "40 hours per week of productivity ",
      "customer support",
      "Quality control",
      "Dialer admin managerment",
    ],
  },
  {
    name: "Other Services ",
    // price: "customized pricing plans",
    isMostPop: true,
    features: [
      "Acquisition Manager $8/ per hour",
      "Lead Manager $7/ per hour",
      "SMS blasting $5/ per hour",
      "Solar Agents $8/ per hour",
      "Skip tracing $0.03 per record ( 20k-30k records )",
      "$0,04 for 5k-15k  records",
    ],
  },
];
const PricingSection = () => {
  return (
    <section id="pricing_section" className="relative bg-secondary  py-10">
      <div className="container mx-auto">
        <div className=" grid text-center place-items-center place-content-center justify-center">
          <div className="grid gap-4 max-sm:text-center">
            <h1 className="text-4xl text-white font-bold">Pricing Options</h1>
            <p className="text-white">
              DMS Callers, we offer flexible pricing options to meet your
              specific needs and budget. Contact us today to learn more.
            </p>{" "}
            {/* <button
              type="button"
              class="text-white max-sm:mx-auto mx-auto h-fit w-fit bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Choose plan
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button> */}
          </div>
        </div>{" "}
      </div>{" "}
      <div className="mt-16 px-2 justify-center gap-2 sm:space-y-0 flex flex-wrap">
        {plans.map((item, idx) => (
          <PricingCard item={item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
