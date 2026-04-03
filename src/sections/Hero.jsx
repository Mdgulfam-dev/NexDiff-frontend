import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import DashboardPreview from "../components/DashboardPreview";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-start md:items-center justify-center bg-[#0F172A] text-white relative overflow-hidden pt-24 md:pt-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="pointer-events-none absolute w-[400px] h-[400px] bg-cyan-500/30 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            Build. Scale. Dominate with{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              NexDiff
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-6 text-base sm:text-lg text-white/70 max-w-lg"
          >
            We don’t just build software — we help you generate leads, increase
            revenue, and grow your business.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button onClick={() => navigate("/contact")}>Get Started</Button>

            <Button variant="outline" onClick={() => navigate("/services")}>
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <DashboardPreview />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
