import { useForm } from "react-hook-form";
import { ValidationForm } from "../services/ValidationForm";
import { SendEmail } from "../services/SendMail";
import { toast } from "react-toastify";

import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    link: "mailto:info@propertyhunters.co",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "info@propertyhunters.co",
  },
  {
    link: "https://wa.me/+15513255732",
    icon: <FaWhatsapp className="text-green-400 text-xl" />,
    contact: "+1 (551) 325-5732",
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = async (values) => {
    const promise = new Promise((resolve, reg) => {
      SendEmail(values).then(([status, errors]) => {
        if (errors) return reg(errors);
        return resolve(status);
      });
    });
    toast.promise(promise, {
      pending: "please wait ",
      success: "thank you for connection👌",
      error: "sorry you can contact us by phone number 🤯",
    });
  };

  return (
    <main className="py-14" id="contact-form">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-indigo-600 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              We’re here to help and answer any question you might have, We look
              forward to hearing from you! Please fill out the form, or us the
              contact information bellow .
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3 text-lg">
                    <Link
                      to={item.link}
                      target="_blank"
                      className="flex-none text-gray-600 flex items-center"
                    >
                      {item.icon}
                      <p>{item.contact}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form
              onSubmit={handleSubmit(handleSubmitForm)}
              className="space-y-5"
            >
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

              {/* <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                ></textarea>
              </div> */}
              <button className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-[#3652adba] active:bg-[#3652adba] rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
