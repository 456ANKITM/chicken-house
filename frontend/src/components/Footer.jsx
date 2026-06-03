import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../public/logo.png"

import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

        {/* Brand Section */}
        <div>
         <div className="h-12  rounded-full gap-4 flex items-center justify-center shadow-lg">
            <img src={logo} alt="" srcset="" className="w-12 rounded-full" />
             <h2 className="text-white text-xl md:text-xl font-bold">
              Chicken Hub - Balkot, Bhaktapur
            </h2>
                   </div>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Serving the crispiest and freshest chicken meals in Nepal.  
            Made with love, spice, and perfection.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
           <li> <Link to="/" className="hover:text-yellow-400 cursor-pointer">Home</Link> </li> 
            <li> <Link to="/menu" className="hover:text-yellow-400 cursor-pointer">Menu</Link> </li>
           <li>  <Link to="/about" className="hover:text-yellow-400 cursor-pointer">About Us</Link></li>
           <li> 
               <Link to="/contact" className="hover:text-yellow-400 cursor-pointer">Contact</Link>
           </li>
           
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>

          <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
            <Phone size={18} /> +977 9823629155
          </div>

          <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
            <Mail size={18} /> support@chickenhub.com
          </div>

          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <MapPin size={18} /> Balkot - Bhaktapur, Nepal
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get updates on new meals and special offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none focus:border-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Chicken Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;