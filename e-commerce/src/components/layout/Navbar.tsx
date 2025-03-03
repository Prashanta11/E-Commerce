import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCountStore } from "../../pages/countStore";

const Navbar = () => {
  const { count } = useCountStore();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0 z-50 fixed bg-transparent w-full">
      <nav className="flex justify-between items-center mx-auto px-6 py-4">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Shop", "About us", "Pages", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="font-medium text-black hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-black hover:text-white">
            <Search size={20} />
          </button>
          <Link
            to="/cart"
            className="flex items-center text-black hover:text-black"
          >
            <ShoppingBag size={20} />
            <span className="ml-1">
              Cart
              <span className="text-lg">({count})</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

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
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="font-medium text-black hover:text-[#FFB22C] transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
