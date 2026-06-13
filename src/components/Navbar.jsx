import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/case-studies" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 overflow-x-clip border-b border-[#101312]/10 bg-[#f7f3ea]/92 text-[#101312] backdrop-blur-xl">
      <div className="container-wide flex h-16 w-full max-w-full items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex min-w-0 flex-1 items-center gap-2.5 lg:flex-none"
          onClick={() => setIsOpen(false)}
          aria-label="NexDiff home"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#101312]/10 bg-white shadow-[0_8px_22px_rgba(16,19,18,0.08)] transition group-hover:-translate-y-0.5 sm:h-12 sm:w-12">
            <img
              src={logo}
              alt=""
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
              aria-hidden="true"
            />
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-['Poppins'] text-lg font-bold tracking-[0.01em] text-[#101312] sm:text-xl">
              Nex
              <span
                className="text-[#e05f2f]"
                style={{
                  fontFeatureSettings: '"liga" 0',
                  fontVariantLigatures: "none",
                  letterSpacing: "0.045em",
                }}
              >
                Diff
              </span>
            </span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#101312]/42 sm:block">
              Growth Systems
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-lg border border-[#101312]/10 bg-white/70 p-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#101312] text-white"
                    : "text-[#101312]/65 hover:bg-[#101312]/5 hover:text-[#101312]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => navigate("/contact")}
          className="hidden min-h-11 items-center gap-2 rounded-lg border border-[#101312] bg-[#101312] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#202522] lg:inline-flex"
        >
          Start Project
          <ArrowUpRight size={16} />
        </button>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#101312]/10 bg-white lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#101312]/10 bg-[#f7f3ea] px-4 py-4 shadow-2xl sm:top-20 sm:max-h-[calc(100vh-5rem)] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-lg px-4 py-3 text-base font-semibold ${
                      isActive ? "bg-[#101312] text-white" : "bg-white text-[#101312]/75"
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
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#101312] px-5 text-sm font-semibold text-white"
              >
                Start Project
                <ArrowUpRight size={16} />
              </button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
