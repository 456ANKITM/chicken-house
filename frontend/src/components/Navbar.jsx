import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="relative bg-black z-50 flex items-center justify-between px-6 md:px-12 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
            <img
              onClick={()=>navigate("/")}
              src={logo}
              alt="Chicken Hub"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-white text-xl md:text-2xl font-bold">
              Chicken Hub
            </h2>
            <p className="text-yellow-400 text-xs">
              Fresh • Crispy • Delicious
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/menu" className="hover:text-yellow-400 transition">
            Menu
          </Link>

          <Link to="/about" className="hover:text-yellow-400 transition">
            About Us
          </Link>

          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={30} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-[100] transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-yellow-500/20">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Chicken Hub"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h2 className="text-white text-xl font-bold">
                Chicken Hub
              </h2>
              <p className="text-yellow-400 text-xs">
                Fresh • Crispy • Delicious
              </p>
            </div>
          </div>

          <button
            onClick={closeMenu}
            className="text-white hover:text-yellow-400 transition"
          >
            <X size={32} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-white text-3xl font-bold hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            onClick={closeMenu}
            className="text-white text-3xl font-bold hover:text-yellow-400 transition"
          >
            Menu
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="text-white text-3xl font-bold hover:text-yellow-400 transition"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-white text-3xl font-bold hover:text-yellow-400 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;