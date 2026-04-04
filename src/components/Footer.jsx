// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const handleScrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="bg-[#0F172A] text-white border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
//         {/* Brand */}
//         <div>
//           <div className="flex items-center gap-2">
//             <img
//               src={logo}
//               alt="NexDiff Logo"
//               className="w-12 h-12 object-contain"
//             />
//             <h2 className="text-xl font-semibold">NexDiff</h2>
//           </div>

//           <p className="mt-4 text-white/70 text-sm leading-relaxed">
//             We build modern digital solutions to help businesses grow faster.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-white/70 text-sm">
//             <li>
//               <Link
//                 to="/"
//                 onClick={handleScrollTop}
//                 className="hover:text-white transition"
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/services"
//                 onClick={handleScrollTop}
//                 className="hover:text-white transition"
//               >
//                 Services
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/about"
//                 onClick={handleScrollTop}
//                 className="hover:text-white transition"
//               >
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to="/contact"
//                 onClick={handleScrollTop}
//                 className="hover:text-white transition"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="font-semibold mb-4">Services</h3>
//           <ul className="space-y-2 text-white/70 text-sm">
//             <li>Web Development</li>
//             <li>App Development</li>
//             <li>AI Solutions</li>
//             <li>Cloud & DevOps</li>
//           </ul>
//         </div>

//         {/* Social */}
//         <div>
//           <h3 className="font-semibold mb-4">Connect</h3>
//           <div className="flex gap-4 text-xl text-white/70">
//             <FaFacebook className="hover:text-white cursor-pointer transition" />
//             <FaInstagram className="hover:text-white cursor-pointer transition" />
//             <FaLinkedin className="hover:text-white cursor-pointer transition" />
//             <FaTwitter className="hover:text-white cursor-pointer transition" />
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-white/10 text-center py-6 text-white/50 text-sm">
//         © {new Date().getFullYear()} NexDiff. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-white border-t border-white/10 relative overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 relative z-10">
        {/* 🔥 Brand */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="NexDiff Logo" className="w-12 h-12" />
            <h2 className="text-xl font-semibold">NexDiff</h2>
          </div>

          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            We build scalable software, AI systems, and growth-focused solutions
            for modern businesses.
          </p>

          {/* 🔥 Brands */}
          <div className="mt-4 text-xs text-white/50 space-y-1">
            <p>🏢 NexDiff</p>
            <p>🏗️ Rennovax</p>
            <p>🛍️ SK Discount Bazaar</p>
          </div>
        </div>

        {/* 🔥 Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            {["/", "/services", "/about", "/contact"].map((path, i) => (
              <li key={i}>
                <Link
                  to={path}
                  onClick={handleScrollTop}
                  className="hover:text-white transition"
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔥 Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>AI Solutions</li>
            <li>Cloud & DevOps</li>
            <li>Performance Marketing</li>
          </ul>
        </div>

        {/* 🔥 Contact + Social */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@nexdiff.in
            </p>

            <a
              href="https://wa.me/919001402531"
              target="_blank"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <FaWhatsapp /> WhatsApp Chat
            </a>
          </div>

          {/* 🔥 Social */}
          <div className="flex gap-4 mt-5 text-xl text-white/70">
            <a href="#" target="_blank">
              <FaFacebook className="hover:text-white hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank">
              <FaInstagram className="hover:text-white hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin className="hover:text-white hover:scale-110 transition" />
            </a>
            <a href="#" target="_blank">
              <FaTwitter className="hover:text-white hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* 🔥 Bottom */}
      <div className="border-t border-white/10 text-center py-6 text-white/50 text-sm">
        © {new Date().getFullYear()} NexDiff. All rights reserved.
        <br />
        <span className="text-xs text-white/40">
          Built with ❤️ using modern web technologies
        </span>
      </div>
    </footer>
  );
};

export default Footer;