import { forwardRef } from "react";

const Calendar = forwardRef(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={"datetime-local"}
      required
      className="w-full"
      {...props}
    />
  );
});

export default Calendar;
