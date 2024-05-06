import React, { useState } from "react";
import {
  Dialog,
  Portal,
  Overlay,
  Title,
  Content,
  Root,
} from "@radix-ui/react-dialog";
import BookingForm from "./BookingForm";

const PopUpWithBookingForm = () => {
  const [bookingFormStatus, seTbookingFormStatus] = useState(true);

  return (
    <Portal>
      <Overlay className=" bg-[rgba(0,0,0,.8)] z-20 DialogOverlay  fixed inset-0" />
      <Content className="data-[state=open]: DialogContent delay-1000  duration-500 fixed top-[50%] left-[50%] z-20 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Title className=" text-3xl py-3 font-medium">Reach out now!</Title>
        <BookingForm />
      </Content>
    </Portal>
  );
};

export default PopUpWithBookingForm;
