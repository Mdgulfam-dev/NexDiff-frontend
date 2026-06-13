import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MessageCircle } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Outlet />
      <button
        type="button"
        onClick={() => navigate("/contact")}
        className="fixed bottom-5 right-4 z-40 inline-flex h-12 w-12 items-center justify-center gap-2 rounded-lg border border-[#101312]/10 bg-[#101312] text-sm font-semibold text-white shadow-[0_18px_48px_rgba(16,19,18,0.22)] transition hover:-translate-y-0.5 hover:bg-[#202522] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:min-h-12 sm:px-5 sm:py-3"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Enquiry Now</span>
      </button>
      <Footer />
    </>
  );
};

export default MainLayout;
