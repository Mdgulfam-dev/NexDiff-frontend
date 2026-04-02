import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
const navigate = useNavigate();

return (
  <nav className="fixed w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10">
    {" "}
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
          NexDiff
        </h1>
      </Link>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-white/80">
        <Link to="/" className="hover:text-white transition">
          Home
        </Link>
        <Link to="/services" className="hover:text-white transition">
          Services
        </Link>
        <Link to="/about" className="hover:text-white transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-white transition">
          Contact
        </Link>
        <Link to="/blog" className="hover:text-white transition">
          Blog
        </Link>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/contact")}
        className="bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-white font-medium shadow-lg"
      >
        Get Started
      </motion.button>
    </div>
  </nav>
);
};

export default Navbar;
