import CountUp from "react-countup";

const KeyInsights = () => {
  return (
    <section id="customer_section" className="bg-gray-100">
      <div className="container  mx-auto">
        <div className="grid py-4 gap-10">
          <h2 className="text-5xl text-primary underline font-bold">
            Key Insights
          </h2>
          <div className="grid p-5 max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3">
            <div className="grid    gap-4 grid-col">
              <div className="grid gap-2">
                <span className="text-primary opacity-80 italic underline text-3xl font-bold">
                  <CountUp
                    end={1500}
                    enableScrollSpy={true}
                    duration={2}
                    decimal=","
                  />
                  +
                </span>
                <h1 className="text-2xl font-normal text-gray-600 text">
                  Vetted Leads Generator
                </h1>
              </div>
              <div className="grid gap-2 ">
                <span className="text-primary opacity-80 underline italic  text-3xl font-bold">
                  <span className="p-2 ">Over</span>
                  <CountUp end={7000} decimal="," enableScrollSpy={true} />+
                </span>
                <h1 className="text-2xl font-normal text-gray-600">
                  Daily Cold Calls
                </h1>
              </div>
            </div>
            <div className="grid   gap-6">
              <div className="grid gap-2">
                <span className="text-primary underline opacity-80 italic  text-3xl font-bold">
                  $2,000,000
                </span>
                <h1 className="text-2xl  font-normal text-gray-600">
                  Deals closed from Leads
                </h1>
              </div>
              <div className="grid gap-2">
                <span className="text-primary underline opacity-80 italic  text-3xl font-extrabold">
                  <CountUp
                    enableScrollSpy={true}
                    end={40}
                    duration={5}
                    decimal=","
                  />{" "}
                  + Clients
                </span>
                <h1 className="text-2xl font-normal text-gray-600">
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
