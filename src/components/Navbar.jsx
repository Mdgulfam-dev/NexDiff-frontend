// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import logo from "../assets/logo.png";

// const Navbar = () => {
// const navigate = useNavigate();

// return (
//   <nav className="fixed w-full z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10">
//     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//       {/* Logo */}
//       <Link to="/" className="flex items-center group">
//         {/* Logo Icon */}
//         <div className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
//           <img
//             src={logo}
//             alt="NexDiff Logo"
//             className="w-12 h-12 object-contain"
//           />
//         </div>

//         {/* Text */}
//         <span className="text-xl font-semibold text-white tracking-wide leading-none">
//           NexDiff
//         </span>
//       </Link>

//       {/* Links */}
//       <div className="hidden md:flex gap-8 text-white/70">
//         <Link to="/" className="hover:text-white transition">
//           Home
//         </Link>
//         <Link to="/services" className="hover:text-white transition">
//           Services
//         </Link>
//         <Link to="/about" className="hover:text-white transition">
//           About
//         </Link>
//         <Link to="/contact" className="hover:text-white transition">
//           Contact
//         </Link>
//         <Link to="/blog" className="hover:text-white transition">
//           Blog
//         </Link>
//       </div>

//       {/* CTA */}
//       <motion.button
//         whileHover={{ scale: 1.08 }}
//         onClick={() => navigate("/contact")}
//         className="bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-white font-medium shadow-lg"
//       >
//         Get Started
//       </motion.button>
//     </div>
//   </nav>
// );
// };

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="NexDiff Logo" className="w-10 h-10" />
          <span className="text-xl font-semibold text-white">NexDiff</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-white/70">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/services" className="hover:text-white">
            Services
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link to="/blog" className="hover:text-white">
            Blog
          </Link>
        </div>

        {/* CTA (Desktop only) */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          onClick={() => navigate("/contact")}
          className="hidden md:block bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-white font-medium"
        >
          Get Started
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-white bg-[#0B1120]/95">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>

          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/contact");
            }}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-white font-medium"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;