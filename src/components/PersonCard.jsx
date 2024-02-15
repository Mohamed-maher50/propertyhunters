import React from "react";

const PersonCard = ({ imgUrl, name, job, index }) => {
  return (
    <div
      className=" w-fit"
      data-aos="zoom-in"
      data-aos-delay={index * 150}
      data-aos-duration={"1500"}
    >
      {/* <img
        src={imgUrl}
        alt={name + job}
        className="outline-offset-2 outline outline-primary h-64  rounded-md "
      /> */}
      <div className=" flex-col p-3 flex items-center font-bold text-2xl">
        <span className=" text-lg  text-gray-600">{job}</span>
        <span className="border-b-2 border-secondary text-gray-600">
          {name}
        </span>
      </div>
    </div>
  );
};

export default PersonCard;
