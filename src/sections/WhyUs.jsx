import React from "react";

const WhyUs = () => {
  return (
    <section
      className="relative  max-lg:bg-primary min-h-[600px] bg-no-repeat w-full "
      style={{
        backgroundImage: "url('/background/svg.png')",
      }}
    >
      <div className="absolute z-10 left-0 w-full h-full ">
        <div className="container h-full mx-auto">
          <div className="  p-5  text-white h-full place-content-end grid sm:grid-cols-2">
            <div className="text-center ">
              <h1 className="text-3xl">Proudly Serving</h1>
              <p>
                Wholesalers, brokers, and realtors within the real estate
                industry
              </p>
            </div>
            <div className="grid gap-4">
              <p>
                At AK Callers, we take pride in delivering exceptional virtual
                assistant services tailored to meet the unique demands of the
                real estate industry. Our specialized solutions cater to real
                estate professionals, brokers, and realtors, offering
                cost-effective and time-saving support that amplifies their
                sales and lead generation efforts.
              </p>
              <p>
                With a dedicated team of virtual assistants skilled in outbound
                calling, prospect vetting, and appointment setting, we empower
                real estate professionals to focus on what they do best –
                closing deals and fostering client relationships. Whether you're
                a seasoned broker or a dynamic realtor, AK Callers is your
                trusted partner in achieving remarkable success in the
                competitive world of real estate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/background/svg.png"
        className="absolute max-lg:hidden  top-0 bottom-0 h-full w-full"
        alt=""
      />
    </section>
  );
};

export default WhyUs;
