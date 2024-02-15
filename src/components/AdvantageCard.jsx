import React from "react";

const AdvantageCard = ({ className = "", imgUrl, desc, ...props }) => {
  return (
    <div
      {...props}
      className={`items-center gap-x-12 sm:px-4 overflow-hidden md:px-0 lg:flex ${className}`}
    >
      <div className="flex-1 sm:hidden lg:block" data-aos="fade-left">
        <img src={imgUrl} className="md:max-w-lg sm:rounded-lg" alt="" />
      </div>
      <div
        data-aos-delay="500"
        data-aos="fade-in"
        className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
      >
        {/* <h3 className="text-indigo-600 font-semibold">How it works</h3> */}
        <p className=" text-3xl text-primary font-semibold sm:text-4xl">
          How it works
        </p>
        <p className="mt-3 text-gray-600">{desc}</p>
        <a
          href=""
          className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AdvantageCard;
