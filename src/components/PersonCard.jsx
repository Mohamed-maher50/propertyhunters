import React from "react";

const PersonCard = ({ imgUrl, name, job }) => {
  return (
    <div className="overflow-hidden  w-fit">
      <img
        src={imgUrl}
        alt={name + job}
        className="border-2 border-gray-800 h-64  rounded-md "
      />
      <div className=" flex-col flex items-center font-bold text-2xl">
        <span className="font-medium text-gray-600">{job}</span>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default PersonCard;
