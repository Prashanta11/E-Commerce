import {
  Facebook,
  Instagram,
  Mail,
  MailWarningIcon,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="px-10">
        <div className="gap-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 text-[#FFB22C]">
          {/* Section for News-letter */}
          <div className="space-x-6">
            <div>
              <h3 className="mb-4 font-bold text-[#FFB22C] text-2xl">
                Trinetra
              </h3>
              <p className="mb-6 text-[#FFB22C] text-md">
                Elegance is always in style. Discover our latest collections of
                premium clothing and accessories.
              </p>
            </div>

            <div className="flex space-x-6 mt-6">
              <Link
                to="#"
                className="px-1 py-1 border border-rounded-full hover:text-white"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="#"
                className="px-1 py-1 border border-rounded-full hover:text-white"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="#"
                className="px-1 py-1 border border-rounded-full hover:text-white"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Category for clothes*/}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Category</h3>
            <ul className="space-y-2">
              {["Women", "Men", "Kids", "Accessories"].map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category.toLowerCase()}`}
                    className="hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links for Navigation */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Shop", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-white"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact us Section */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span className="break-words">+977 9876542112</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span className="break-words">Kathmandu, Nepal, 13646</span>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Mail className="p-1 w-8 h-8" />
                <span className="pt-4 md:pt-0 break-all">
                  info.trinetra@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-gray-800 border-t text-[#FFB22C] text-center">
          <p>
            &copy; {new Date().getFullYear()} Trinetra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
