import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const links = [
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com/DialMasters?notif_id=1715006729757758&notif_t=follow_profile&ref=notif",
    title: "Facebook",
  },
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/dialmasterssolutions/",
    title: "Facebook",
  },
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/company/dial-masters-solutions/",
    title: "Facebook",
  },
  {
    Icon: FaWhatsapp,
    link: "https://wa.me/+14099168655",
    title: "Facebook",
  },
];
const SocialMediaLinks = () => {
  return (
    <div className="fixed right-0 gap-4 py-2 text-lg text-white -translate-y-1/2 top-1/2 bg-[#6C6C6C] flex rounded-l px-2 shadow-lg flex-col">
      {links.map((link, index) => {
        return (
          <Link
            to={link.link}
            key={index}
            target="_blank"
            className="hover:scale-110 duration-500"
          >
            {<link.Icon />}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
