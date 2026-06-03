import { Menu, X} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/logo.png"

const HeroBanner = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
             <img onClick={()=>navigate("/")} src={logo} alt="" srcset="" className="w-12 rounded-full" />
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
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

          {/* <button className="relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs h-5 w-5 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </button> */}
        </div>

        {/* Mobile Menu Icon */}
         <button
  onClick={() => setMobileMenuOpen(true)}
  className="md:hidden text-white"
>
  <Menu size={28} />
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

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-[85vh] px-6 md:px-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-full mb-6">
            🔥 Best Fried Chicken In Town
          </div>

          {/* Heading */}
          <h1 className="text-white font-extrabold leading-tight text-5xl md:text-7xl">
            Crispy Chicken
            <span className="block text-yellow-400">
              Cooked To Perfection
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
            Enjoy freshly prepared fried chicken, spicy wings, juicy burgers,
            and family meals made from premium ingredients and served hot every
            day.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            {/* <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl">
              Order Now
            </button> */}

            <button
             onClick={()=>navigate("/menu")}
             className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300">
              View Menu
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg">
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">15K+</h3>
              <p className="text-gray-300 text-sm">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">50+</h3>
              <p className="text-gray-300 text-sm">Menu Items</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">4.9★</h3>
              <p className="text-gray-300 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroBanner;