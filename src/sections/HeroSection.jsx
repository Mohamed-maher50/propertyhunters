import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="py-28"
      data-aos="fade-in"
      data-aos-delay="950"
      data-aos-duration="1500"
    >
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-indigo-600 font-medium">
            Over 200 successful deals
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            We help startups to grow and make money
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to={"/"}
              className="block py-2 px-4 text-center text-white font-medium bg-primary duration-150 hover:bg-indigo-800 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Let's get started
            </Link>
          </div>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            className=" md:rounded-tl-[108px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
