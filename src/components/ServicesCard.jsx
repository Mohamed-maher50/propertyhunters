import React from "react";

const ServicesCard = ({ img, title, href, date, desc }) => {
  return (
    <li className="w-full mx-auto group sm:max-w-sm">
      <a href={href}>
        <img
          src={img}
          loading="lazy"
          alt={title}
          className="w-full rounded-lg"
        />
        <div className="mt-3 space-y-2">
          <span className="block text-indigo-600 text-sm">{date}</span>
          <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
            {title}
          </h3>
          <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
            {desc}
          </p>
        </div>
      </a>
    </li>
  );
};

export default ServicesCard;
