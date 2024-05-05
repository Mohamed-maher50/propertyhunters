import React from "react";

const BaseInput = React.forwardRef(({ type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
      {...props}
    />
  );
});

export default BaseInput;
