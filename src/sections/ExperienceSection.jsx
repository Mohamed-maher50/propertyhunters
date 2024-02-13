import React from "react";

const ExperienceSection = () => {
  return (
    <section className="relative w-full  overflow-hidden  min-h-[500px] ">
      <div className="container mx-auto">
        <div className="absolute bg-primary p-3 right-0 left-0 z-10 h-full w-full grid place-items-center ">
          <div
            className="grid gap-10 lg:grid-cols-2 h-full "
            data-aos="fade-in"
            data-aos-delay="250"
          >
            <div className="grid place-items-center place-content-center">
              <span className="text-4xl font-semibold text-white">
                The AK Callers <br /> Experience
              </span>
              <img src="/background/Untitled-1.webp" alt="" />
            </div>
            <div className="grid w-full place-content-center xl:pr-48">
              <p className="text-lg text-lightBlue w-full  font-medium">
                At AK Callers, we specialize in providing top-notch virtual
                assistants who excel in making outbound calls, meticulously
                vetting prospects from your data lists, and delivering qualified
                leads right to your inbox. Our team of skilled professionals is
                dedicated to streamlining your sales process, setting
                appointments with potential clients, and helping you close deals
                with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
