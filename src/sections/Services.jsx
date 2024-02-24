import React from "react";
import ServicesCard from "../components/ServicesCard";

const posts = [
  {
    title: "Telemarketing",
    desc: "Property Hunters Telemarketing Service provides clients with top talent capable of handling a large volume of calls while executing their marketing strategies as good if not better than an in-house team.",
    img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // date: "Jan 4 2022",
    href: "",
  },
  {
    title: "lead generation",
    desc: "property Hunters Lead Generation Service, we will go through our client’s data to provide them with the best possible qualified leads. ",
    img: "https://images.pexels.com/photos/5239911/pexels-photo-5239911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // date: "Jan 4 2022",
    href: "",
  },
  {
    title: "Business development",
    desc: "Property Hunters Business Development Service, We work with our clients to help them improve their revenue stream. We work closely with them providing daily, weekly and monthly feedback.",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    // date: "Jan 4 2022",
    href: "",
  },
  {
    title: "quality assurance",
    desc: "Property Hunters Quality Assurance, We never send to our clients the expected deliverables without being properly screened, qualified, and checked that it meets the standards we are expected to adhere to. Every Lead, Sale, Appointment is reviewed by our QA department",
    img: "https://images.pexels.com/photos/5239913/pexels-photo-5239913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // date: "Jan 4 2022",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 " data-aos="fade-in">
          <div className="gap-3 grid pr-8">
            <h1 className="text-4xl font-bold   text-primary">
              why property hunters ?
            </h1>
            <p className="text-xl">
              - well-experinced virtual assistants who can help you scale up
              your business and closing more deals
            </p>
          </div>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((items, key) => (
            <ServicesCard key={key} {...items} index={key} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
