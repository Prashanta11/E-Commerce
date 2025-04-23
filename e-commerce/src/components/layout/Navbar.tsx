import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCountStore } from "../../pages/countStore";

const Navbar = () => {
  const { count } = useCountStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="top-0 z-50 fixed bg-white shadow-md w-full">
      <nav className="flex justify-between items-center gap-6 px-6 py-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FFB22C]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-bold text-black text-2xl">
          Trinetra
        </Link>

        <div className="hidden md:flex flex-shrink-0 items-center gap-10">
          {["Home", "Shop", "About us", "Pages", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className="font-medium text-black hover:text-[#FFB22C] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="hidden relative lg:flex flex-shrink items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-[#FFB22C] focus:ring-2 w-72 text-sm"
          />
          <FiSearch className="right-4 absolute w-5 h-5 text-gray-600 cursor-pointer" />
        </div>

        {/* Icons Section */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-5 ml-auto">
          {/* Cart */}
          <Link to="/cart" className="relative flex items-center gap-1">
            <FiShoppingCart className="text-primary hover:text-[#FFB22C] text-2xl transition-transform" />
            <span className="text-sm">({count})</span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="flex items-center">
            <FiHeart className="text-primary hover:text-[#FFB22C] text-2xl transition-transform" />
          </Link>

          {/* Login/Signup */}
          <div className="flex items-center gap-3">
            <Link to="/login" className="flex items-center gap-1">
              <FaUserCircle className="text-primary hover:text-[#FFB22C] text-lg" />
              <span className="font-semibold text-primary hover:text-[#FFB22C] text-sm">
                Login
              </span>
            </Link>
            <span className="text-primary">|</span>
            <Link to="/signup">
              <span className="font-semibold text-primary hover:text-[#FFB22C] text-sm">
                Signup
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 p-6 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="top-4 right-4 absolute"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col space-y-6 mt-10">
          {["Home", "Shop", "About us", "Pages", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className="font-medium text-black hover:text-[#FFB22C] transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          <hr />
          <Link to="/cart" className="flex items-center gap-2">
            <FiShoppingCart />
            <span>Cart ({count})</span>
          </Link>
          <Link to="/wishlist" className="flex items-center gap-2">
            <FiHeart />
            Wishlist
          </Link>
          <Link to="/login" className="flex items-center gap-2">
            <FaUserCircle />
            Login
          </Link>
          <Link to="/signup" className="flex items-center gap-2">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
