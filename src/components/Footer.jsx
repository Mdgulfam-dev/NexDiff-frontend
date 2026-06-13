import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { ArrowUpRight, MapPin, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const linkGroups = [
  {
    title: "Company",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Careers", path: "/careers" },
      { name: "Terms", path: "/terms" },
    ],
  },
  {
    title: "Explore",
    links: [
      { name: "Services", path: "/services" },
      { name: "Pricing", path: "/pricing" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
  },
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

const officeAddress = "A-192 Sarita, New Delhi - 110076";
const officeMapUrl = "https://maps.app.goo.gl/28Li6YPu6D6dQmNm7";

const Footer = () => {
  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#101312] text-white">
      <div className="container-wide px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:p-7">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-[#c7f9cc]/20 bg-[#c7f9cc]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#c7f9cc]">
                <Sparkles size={15} />
                Growth Systems
              </div>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Build a cleaner digital system for your business.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
                Websites, software, marketing, content systems, and lead funnels
                planned around practical business outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                onClick={handleScrollTop}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#c7f9cc] px-5 py-3 text-sm font-semibold text-[#101312] transition hover:bg-white"
              >
                Start Project
                <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/919001402531"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr_1fr]">
          <div>
            <Link to="/" onClick={handleScrollTop} className="inline-flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-white">
                <img src={logo} alt="NexDiff" className="h-10 w-10 object-contain" />
              </span>
              <span className="font-['Poppins'] text-2xl font-extrabold tracking-[0.01em]">
                Nex
                <span
                  className="text-[#c7f9cc]"
                  style={{
                    fontFeatureSettings: '"liga" 0',
                    fontVariantLigatures: "none",
                    letterSpacing: "0.045em",
                  }}
                >
                  Diff
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              A digital execution team for founders and growing businesses that
              need useful products, consistent marketing, and measurable leads.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-[#c7f9cc]/60 hover:bg-[#c7f9cc]/10 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/58">
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        onClick={handleScrollTop}
                        className="transition hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/64"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 text-sm text-white/66">
              <a
                href="mailto:info.nexdiff@gmail.com"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition hover:text-white"
              >
                <FaEnvelope className="shrink-0 text-[#c7f9cc]" />
                info.nexdiff@gmail.com
              </a>
              <a
                href="tel:+919001402531"
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition hover:text-white"
              >
                <Phone size={16} className="shrink-0 text-[#c7f9cc]" />
                +91 9001402531
              </a>
              <a
                href={officeMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition hover:text-white"
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#c7f9cc]" />
                <span>{officeAddress}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NexDiff. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <span>Software</span>
            <span>AI</span>
            <span>Marketing</span>
            <span>Lead Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
