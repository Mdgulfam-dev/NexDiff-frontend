
import { useNavigate } from "react-router-dom";
import Services from "../sections/Services";


const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0F172A] text-white py-24 px-6 relative overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔥 Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Growth-Focused{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            We don’t just build — we help you generate leads, increase revenue,
            and scale your business.
          </p>
        </div>

        {/* 🔥 Services Grid */}
        <Services/>

        {/* 🔥 Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold">
            Ready to grow your business? 
          </h3>

          <p className="text-white/50 mt-3">
            Let’s build something powerful together.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl font-semibold text-black hover:scale-105 transition"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;