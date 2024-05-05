import React from "react";
import cn from "./utils/cn";

const PrimaryButton = ({
  type = "button",
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cn(
        "w-full px-4 py-2 text-white font-medium bg-primary hover:bg-[#3652adba] active:bg-[#3652adba] rounded-lg duration-150",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
