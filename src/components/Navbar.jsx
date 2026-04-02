// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import logo from "../assets/logo.png";


// const Navbar = () => {
// const navigate = useNavigate();

// return (
//   <nav className="fixed w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10">
//     {" "}
//     <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//       {/* Logo */}
//       <Link to="/" className="flex items-center gap-2">
//         <img src={logo} alt="NexDiff Logo" className="w-12 h-12 object-contain" />

//         <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
//           NexDiff
//         </span>
//       </Link>

//       {/* Links */}
//       <div className="hidden md:flex gap-8 text-white/80">
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

//       {/* CTA Button */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
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
import logo from "../assets/logo.png";

const Navbar = () => {
const navigate = useNavigate();

return (
  <nav className="fixed w-full z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center group">
        {/* Logo Icon */}
        <div className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
          <img
            src={logo}
            alt="NexDiff Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Text */}
        <span className="text-xl font-semibold text-white tracking-wide leading-none">
          NexDiff
        </span>
      </Link>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-white/70">
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

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.08 }}
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
