import React from "react";
import cn from "./utils/cn";

const FormLabel = React.forwardRef(
  ({ children, className = "", ...props }, ref) => {
    return (
      <label ref={ref} className={cn(`font-medium`, className)} {...props}>
        {children}
      </label>
    );
  }
);

export default FormLabel;
