import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import BookingForm from "./BookingForm";

const PopUpWithBookingForm = () => {
  const [bookingFormStatus, seTbookingFormStatus] = useState(true);
  const handleCloseModal = () => {
    // seTbookingFormStatus(false);
  };

  return (
    <Dialog.Root open={bookingFormStatus}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => seTbookingFormStatus(false)}
          className=" bg-[rgba(0,0,0,.8)] z-20 DialogOverlay  fixed inset-0"
        />
        <Dialog.Content className="data-[state=open]: DialogContent delay-1000 dela duration-500 fixed top-[50%] left-[50%] z-20 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className=" text-3xl py-3 font-medium">
            Reach out now!
          </Dialog.Title>
          <BookingForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PopUpWithBookingForm;
