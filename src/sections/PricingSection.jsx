import React from "react";
import PricingCard from "../components/PricingCard";
const plans = [
  {
    name: "1 caller",

    price: 35,
    isMostPop: true,
    features: [
      "Curabitur faucibus",
      "massa ut pretium maximus",
      "Sed posuere nisi",
      "Pellentesque eu nibh et neque",
    ],
  },
  {
    name: "Enterprise",

    price: 60,
    isMostPop: false,
    features: [
      "Curabitur faucibus",
      "massa ut pretium maximus",
      "Sed posuere nisi",
      "Pellentesque eu nibh et neque",
    ],
  },
];
const PricingSection = () => {
  return (
    <section className="relative bg-secondary  py-10">
      <div className="container mx-auto">
        <div className="lg:grid-cols-2 grid place-items-center place-content-center justify-center">
          <div className="grid gap-4 max-sm:text-center">
            <h1 className="text-4xl text-white font-bold">Pricing Options</h1>
            <p className="text-white">
              At AK Callers, we offer flexible pricing options to meet your
              specific needs and budget. Contact us today to learn more.
            </p>{" "}
            <button
              type="button"
              class="text-white max-sm:mx-auto h-fit w-fit bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            </button>
          </div>

          <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-2">
            {plans.map((item, idx) => (
              <PricingCard item={item} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
