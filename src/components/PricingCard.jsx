import React from "react";

const PricingCard = ({ item }) => {
  return (
    <div
      className={`relative flex-1 bg-lightBlue min-w-80 max-w-96 text-start  flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
        item.isMostPop ? "mt-10" : ""
      }`}
    >
      <div className="p-8 space-y-4 border-b">
        <span className="text-3xl font-bold text-primary">{item.name}</span>

        {item.price ? (
          <>
            {" "}
            <div className=" text-3xl text-se font-semibold">
              <span className=""> ${item.price}</span>{" "}
              <span className="text-xl  font-normal">/per hour</span>{" "}
            </div>
          </>
        ) : (
          <div className="text-lg capitalize">customized pricing plans</div>
        )}

        <p>{item.desc}</p>
      </div>
      <ul className="p-8 space-y-3 overflow-hidden" data-aos-mirror={"true"}>
        {item.features.map((featureItem, idx) => (
          <li
            key={idx}
            className="flex items-center gap-5"
            data-aos="fade-left"
            data-aos-mirror={"true"}
            data-aos-delay={(idx + 1) * 150}
            data-aos-offset={-100} // offset (in px) from the original trigger point
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {featureItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
