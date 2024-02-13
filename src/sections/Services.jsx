import React from "react";
import ServicesCard from "../components/ServicesCard";

const posts = [
  {
    title: "A Quick Guide to WordPress Hosting",
    desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
];

const Services = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 ">
          <div className="gap-6 grid pr-8">
            <h1 className="text-4xl">Empowering Your Sales Success</h1>
            <p>
              Our comprehensive range of services is tailored to meet your
              specific sales needs. With AK Callers by your side, you'll
              experience unparalleled support in generating leads and securing
              valuable appointments that lead to more closed deals.
            </p>
          </div>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((items, key) => (
            <ServicesCard key={key} {...items} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
