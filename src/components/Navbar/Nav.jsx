import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Trigger } from "@radix-ui/react-dialog";
export const Nav = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();

  // Replace  path with your path
  const navigation = [
    { title: "home", path: "#home-section" },
    { title: "Customers", path: "#customer_section" },
    { title: "contact", path: "#contact-form" },
    { title: "Pricing", path: "#pricing_section" },
  ];

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
  }, [state]);
  const customStyle = ["sticky-nav", "fixed", "border-b", "left-0"];
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 110) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav ref={navRef} className="bg-white w-full top-0 z-20">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex capitalize items-center justify-between ">
          <Link to={"/"} className="flex items-center">
            <img
              src="/logo.png"
              alt="Dial Masters Solutions (DMS)"
              className="h-[85px] object-contain"
            />{" "}
            <span className=" -translate-x-5 text-primary">
              Dial Masters Solutions
            </span>
          </Link>

          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1  capitalize  justify-end  items-center flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
            <Trigger>
              <li
                onClick={() => setState(false)}
                className="block py-2 px-4 text-center text-white font-medium bg-primary duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Book
              </li>
            </Trigger>
          </ul>

          <div className="flex-1 max-sm:my-5 items-end justify-end lg:flex pr-9">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    onClick={() => setState(false)}
                    key={idx}
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    <a href={item.path}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
