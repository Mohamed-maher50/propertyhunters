import React from "react";

const ContactForm = () => {
  return (
    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
      <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-5">
        <div>
          <label className="font-medium">Full name</label>
          <input
            type="text"
            {...register("fullName", ValidationForm.FullName)}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Phone</label>
          <input
            {...register("phone", ValidationForm.phone)}
            type="text"
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">Email</label>
          <input
            {...register("email", ValidationForm.email)}
            type="email"
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
          />
        </div>

        <button className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-[#3652adba] active:bg-[#3652adba] rounded-lg duration-150">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
