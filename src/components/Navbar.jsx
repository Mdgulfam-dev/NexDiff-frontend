// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed w-full z-50 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="NexDiff Logo" className="w-10 h-10" />
//           <span className="text-xl font-semibold text-white">NexDiff</span>
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-8 text-white/70">
//           <Link to="/" className="hover:text-white">
//             Home
//           </Link>
//           <Link to="/services" className="hover:text-white">
//             Services
//           </Link>
//           <Link to="/about" className="hover:text-white">
//             About
//           </Link>
//           <Link to="/contact" className="hover:text-white">
//             Contact
//           </Link>
//           <Link to="/blog" className="hover:text-white">
//             Blog
//           </Link>
//         </div>

//         {/* CTA (Desktop only) */}
//         <motion.button
//           whileHover={{ scale: 1.08 }}
//           onClick={() => navigate("/contact")}
//           className="hidden md:block bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-white font-medium"
//         >
//           Get Started
//         </motion.button>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-white bg-[#0B1120]/95">
//           <Link to="/" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//           <Link to="/services" onClick={() => setIsOpen(false)}>
//             Services
//           </Link>
//           <Link to="/about" onClick={() => setIsOpen(false)}>
//             About
//           </Link>
//           <Link to="/contact" onClick={() => setIsOpen(false)}>
//             Contact
//           </Link>
//           <Link to="/blog" onClick={() => setIsOpen(false)}>
//             Blog
//           </Link>

//           <button
//             onClick={() => {
//               setIsOpen(false);
//               navigate("/contact");
//             }}
//             className="bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-white font-medium"
//           >
//             Get Started
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Blog", path: "/blog" },
//   ];

//   return (
//     <nav className="fixed w-full z-50 bg-[#0B1120]/60 backdrop-blur-xl border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
//         {/* 🔥 LOGO */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <img
//             src={logo}
//             alt="NexDiff Logo"
//             className="w-10 h-10 md:w-12 md:h-12 object-contain transition group-hover:scale-105"
//           />

//           <span className="text-lg md:text-xl font-semibold tracking-wide text-white">
//             Nex
//             <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
//               Diff
//             </span>
//           </span>
//         </Link>

//         {/* 🔥 DESKTOP NAV */}
//         <div className="hidden md:flex items-center gap-6 lg:gap-8">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.path;

//             return (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="relative text-sm lg:text-base text-white/70 hover:text-white transition"
//               >
//                 {link.name}

//                 {/* Underline */}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ${
//                     isActive ? "w-full" : "w-0 hover:w-full"
//                   }`}
//                 />
//               </Link>
//             );
//           })}
//         </div>

//         {/* 🔥 CTA */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate("/contact")}
//           className="hidden md:block text-sm bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-white font-medium shadow-md hover:shadow-cyan-500/30 transition"
//         >
//           Get Started →
//         </motion.button>

//         {/* 🔥 MOBILE BUTTON */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* 🔥 MOBILE MENU (FULL SCREEN STYLE 🔥) */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden fixed inset-0 bg-[#0B1120]/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 text-white"
//           >
//             {navLinks.map((link) => {
//               const isActive = location.pathname === link.path;

//               return (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`text-2xl font-medium ${
//                     isActive ? "text-cyan-400" : "text-white/80"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}

//             <button
//               onClick={() => {
//                 setIsOpen(false);
//                 navigate("/contact");
//               }}
//               className="mt-6 bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-3 rounded-full text-white font-semibold"
//             >
//               Get Started
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0B1120]/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* 🔥 LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="text-lg font-semibold text-white">
            Nex
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Diff
            </span>
          </span>
        </Link>

        {/* 🔥 DESKTOP NAV */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-white/70 hover:text-white transition"
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* 🔥 CTA */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden md:block bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 rounded-full text-white text-sm"
        >
          Get Started
        </button>

        {/* 🔥 MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-[60]"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full 
            bg-[#0B1120]/95 backdrop-blur-xl border-t border-white/10 
            px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg ${
                    isActive ? "text-cyan-400" : "text-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/contact");
              }}
              className="mt-4 bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-3 rounded-full text-white"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;