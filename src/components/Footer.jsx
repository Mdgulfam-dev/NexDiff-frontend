


import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
return (
  <footer className="bg-[#0F172A] text-white border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
      {/* Brand */}
      <div>
        <div className="flex items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="NexDiff Logo"
            className="w-12 h-12 object-contain"
          />

          {/* Text */}
          <h2 className="text-xl font-semibold">NexDiff</h2>
        </div>

        <p className="mt-4 text-white/70 text-sm leading-relaxed">
          We build modern digital solutions to help businesses grow faster.
        </p>
      </div>

      {/* Links */}
      <div>
        <h3 className="font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-white/70 text-sm">
          <li>
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-white transition">
              Services
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="font-semibold mb-4">Services</h3>
        <ul className="space-y-2 text-white/70 text-sm">
          <li>Web Development</li>
          <li>App Development</li>
          <li>AI Solutions</li>
          <li>Cloud & DevOps</li>
        </ul>
      </div>

      {/* Social */}
      <div>
        <h3 className="font-semibold mb-4">Connect</h3>
        <div className="flex gap-4 text-xl text-white/70">
          <FaFacebook className="hover:text-white cursor-pointer transition" />
          <FaInstagram className="hover:text-white cursor-pointer transition" />
          <FaLinkedin className="hover:text-white cursor-pointer transition" />
          <FaTwitter className="hover:text-white cursor-pointer transition" />
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-white/10 text-center py-6 text-white/50 text-sm">
      © {new Date().getFullYear()} NexDiff. All rights reserved.
    </div>
  </footer>
);
};

export default Footer;
