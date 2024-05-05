import { forwardRef } from "react";

const Calendar = forwardRef(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={"text"}
      onFocus={function (e) {
        e.target.type = "datetime-local";
      }}
      onBlur={function (e) {
        e.target.value = "";
        e.target.type = "text";
      }}
      required
      className="w-full"
      {...props}
    />
  );
});

export default Calendar;
