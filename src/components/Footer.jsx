import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Software Development",
  "Social Media Handling",
  "Digital Marketing",
  "Lead Generation",
];

const socials = [
  { icon: <FaFacebook />, link: "#", label: "Facebook" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/nexdiff.in", label: "Instagram" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/nexdiff/", label: "LinkedIn" },
  { icon: <FaGoogle />, link: "https://share.google/3NBEUFrLgUfUMbEVE", label: "Google" },
];

const Footer = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#101312] text-white">
      <div className="container-wide px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1fr]">
          <div>
            <Link to="/" onClick={handleScrollTop} className="inline-flex items-center gap-3">
              <img src={logo} alt="NexDiff" className="h-12 w-12 object-contain" />
              <span className="text-xl font-semibold">
                Nex<span className="text-[#c7f9cc]">Diff</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              We build software, social systems, marketing campaigns, and lead
              funnels for brands that want a stronger online business.
            </p>
            <a
              href="https://wa.me/919001402531"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#c7f9cc] px-4 py-3 text-sm font-semibold text-[#101312] transition hover:bg-white"
            >
              WhatsApp Chat
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/58">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} onClick={handleScrollTop} className="hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/58">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-white/62">
              <a href="mailto:info.nexdiff@gmail.com" className="flex items-center gap-2 hover:text-white">
                <FaEnvelope /> info.nexdiff@gmail.com
              </a>
              <a href="https://wa.me/919001402531" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <FaWhatsapp /> +91 9001402531
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[#c7f9cc]/60 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NexDiff. All rights reserved.</p>
          <p>Software, AI, marketing, and lead growth systems.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
