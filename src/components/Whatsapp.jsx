import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Whatsapp = () => {
  return (
    <Link
      to={"https://wa.me/+14099168655"}
      target={"_blank"}
      className="fixed bottom-5 right-5 shadow-lg hover:scale-95 rounded-full overflow-hidden bg-blue-50 cursor-pointer duration-500 ease-in-out"
    >
      <FaWhatsapp className="text-green-400 text-6xl    p-2  w-fit" />
    </Link>
  );
};

export default Whatsapp;
