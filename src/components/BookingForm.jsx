import { ValidationForm } from "../services/ValidationForm";
import BaseInput from "./BaseInput";
import FormLabel from "../components/FormLabel";
import ValidationErrorLabel from "./ValidationErrorLabel";
import PrimaryButton from "./PrimaryButton";
import WithWarningAalert from "./HOCs/WithWarningAalert";
import { useForm } from "react-hook-form";
import Calendar from "./Calendar";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const BookingForm = () => {
  const {
    register,

    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = (values) => {
    toast.promise(
      emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICES_POPUP_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_POPUP_ID,
        { ...values },
        {
          publicKey: process.env.REACT_APP_EMAIL_PUBLIC_ID,
        }
      ),
      {
        pending: "please wait ",
        success: "thank you for connection👌",
        error: {
          render: (res) => {
            console.log(res);
            return "error";
          },
        },
      }
    );

    // const promise = new Promise((resolve, reg) => {
    //   SendEmail(values).then(([status, errors]) => {
    //     if (errors) return reg(errors);
    //     return resolve(status);
    //   });
    // });
    // toast.promise(promise, {
    //   pending: "please wait ",
    //   success: "thank you for connection👌",
    //   error: "sorry you can contact us by phone number 🤯",
    // });
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-5">
      <div>
        <FormLabel> Full name</FormLabel>
        <div>
          <BaseInput
            placeholder="Enter Full Name"
            {...register("fullName", ValidationForm.FullName)}
          />

          <WithWarningAalert
            errors={errors}
            Component={ValidationErrorLabel}
            filedName="fullName"
          />
        </div>
      </div>
      <div>
        <FormLabel> Email</FormLabel>

        <div>
          <BaseInput
            type="email"
            placeholder="Email Address"
            {...register("email", ValidationForm.email)}
          />
          <WithWarningAalert
            errors={errors}
            Component={ValidationErrorLabel}
            filedName="email"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <FormLabel> company </FormLabel>
          <div>
            <BaseInput
              placeholder="Company Name"
              {...register("company", ValidationForm.company)}
            />
            <WithWarningAalert
              errors={errors}
              Component={ValidationErrorLabel}
              filedName="company"
            />
          </div>
        </div>
        <div className="flex-1">
          <FormLabel> Phone</FormLabel>
          <div>
            <BaseInput
              placeholder="Phone Number"
              {...register("phone", ValidationForm.phone)}
            />{" "}
            <WithWarningAalert
              errors={errors}
              Component={ValidationErrorLabel}
              filedName="phone"
            />
          </div>
        </div>
      </div>
      <div>
        <FormLabel> Date/Time </FormLabel>
        <Calendar
          placeholder="Date/Time"
          {...register("Calendar", {
            required: "please choose a calendar",
          })}
        />
      </div>
      <PrimaryButton type="submit">Book</PrimaryButton>
    </form>
  );
};

export default BookingForm;
