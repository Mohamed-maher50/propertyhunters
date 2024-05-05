import React from "react";
import FormLabel from "./FormLabel";
import cn from "./utils/cn";

const ValidationErrorLabel = ({ children, className = "" }) => {
  return (
    <FormLabel className={cn(`text-red-500`, className)}>{children}</FormLabel>
  );
};

export default ValidationErrorLabel;
