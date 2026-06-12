import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#101312]/10 bg-[#f7f3ea]/88 text-[#101312] backdrop-blur-xl">
      <div className="container-wide flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setIsOpen(false)}
          aria-label="NexDiff home"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#101312]/10 bg-white shadow-[0_8px_22px_rgba(16,19,18,0.08)] transition group-hover:-translate-y-0.5">
            <img
              src={logo}
              alt=""
              className="h-9 w-9 object-contain"
              aria-hidden="true"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-normal text-[#101312]">
              Nex<span className="text-[#e05f2f]">Diff</span>
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#101312]/10 bg-white lg:hidden"
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
            className="border-t border-[#101312]/10 bg-[#f7f3ea] px-4 py-5 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
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
