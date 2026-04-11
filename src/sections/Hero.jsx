// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import DashboardPreview from "../components/DashboardPreview";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="min-h-screen flex items-start md:items-center justify-center bg-[#0F172A] text-white relative overflow-hidden pt-24 md:pt-28">
//       {/* 🔥 Background Glow */}
//       <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
//       <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

//       {/* 🔥 GRID */}
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
//         {/* 🔥 LEFT */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           {/* 🔥 TAGLINE */}
//           <motion.p
//             variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//             className="text-sm text-cyan-400 mb-3"
//           >
//             AI + Software + Growth Systems
//           </motion.p>

//           {/* 🔥 HEADING */}
//           <motion.h1
//             variants={{
//               hidden: { opacity: 0, y: 40 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
//           >
//             Build. Scale. Dominate with{" "}
//             <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
//               NexDiff
//             </span>
//           </motion.h1>

//           {/* 🔥 DESCRIPTION */}
//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             className="mt-6 text-base sm:text-lg text-white/70 max-w-lg"
//           >
//             We don’t just build software — we build{" "}
//             <span className="text-white font-medium">growth systems</span> that
//             generate leads, automate operations, and scale your business faster.
//           </motion.p>

//           {/* 🔥 TRUST LINE */}
//           <motion.p
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1 },
//             }}
//             className="mt-4 text-sm text-white/50"
//           >
//             Trusted by startups & businesses across India
//           </motion.p>

//           {/* 🔥 BUTTONS */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             className="mt-8 flex flex-col sm:flex-row gap-4"
//           >
//             <Button onClick={() => navigate("/contact")}>
//               Get Free Consultation
//             </Button>

//             <Button variant="outline" onClick={() => navigate("/services")}>
//               Explore Services
//             </Button>
//           </motion.div>

//           {/* 🔥 BRANDS (NEW 🔥) */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1 },
//             }}
//             className="mt-8 flex flex-wrap gap-4 text-xs text-white/60"
//           >
//             <span>NexDiff</span>
//             <span>Renovax</span>
//             <span>SK Discount Bazaar</span>
//           </motion.div>

//           {/* 🔥 STATS */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0 },
//               visible: { opacity: 1 },
//             }}
//             className="mt-6 flex gap-6 text-sm"
//           >
//             <div>
//               <p className="text-purple-400 font-bold text-lg">50+</p>
//               <p className="text-white/50">Projects</p>
//             </div>
//             <div>
//               <p className="text-purple-400 font-bold text-lg">30+</p>
//               <p className="text-white/50">Clients</p>
//             </div>
//             <div>
//               <p className="text-purple-400 font-bold text-lg">2+</p>
//               <p className="text-white/50">Years</p>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* 🔥 RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 40 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mt-10 md:mt-0"
//         >
//           <motion.div
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 4, repeat: Infinity }}
//             className="relative"
//           >
//             <DashboardPreview />

//             {/* 🔥 GLOW BORDER */}
//             <div className="absolute inset-0 rounded-xl border border-purple-500/20 pointer-events-none" />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaChartLine, FaCogs, FaUsers, FaMoneyBillWave } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-purple-600/20 blur-3xl rounded-full -top-40 -left-40" />
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-500/20 blur-3xl rounded-full -bottom-40 -right-40" />

      {/* 🔥 GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 🔥 MAIN GRID */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        {/* ================= LEFT ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* BADGE */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 mb-4"
          >
            Software + Marketing + Automation
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            We Build Systems That{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Generate Leads & Revenue
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-5 text-sm sm:text-base md:text-lg text-white/70 max-w-lg"
          >
            From websites to automation and marketing funnels — NexDiff builds
            complete growth systems that bring customers, convert them, and help
            your business scale faster.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button onClick={() => navigate("/contact")}>
              Get Free Growth Plan
            </Button>

            <Button variant="outline" onClick={() => navigate("/services")}>
              View Services
            </Button>
          </motion.div>

          {/* TRUST */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="mt-5 text-xs sm:text-sm text-white/50"
          >
            Helping startups & businesses grow across India
          </motion.p>

          {/* STATS */}
          <motion.div className="mt-5 flex flex-wrap gap-6 sm:gap-8 text-sm">
            <div>
              <p className="text-cyan-400 font-bold text-lg sm:text-xl">50+</p>
              <p className="text-white/50 text-xs sm:text-sm">Projects</p>
            </div>
            <div>
              <p className="text-purple-400 font-bold text-lg sm:text-xl">
                30+
              </p>
              <p className="text-white/50 text-xs sm:text-sm">Clients</p>
            </div>
            <div>
              <p className="text-green-400 font-bold text-lg sm:text-xl">3X</p>
              <p className="text-white/50 text-xs sm:text-sm">Growth</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center w-full mt-8 md:mt-0"
        >
          {/* MAIN CARD */}
          <div
            className="
            w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]
            bg-gradient-to-br from-white/10 to-white/5 
            backdrop-blur-2xl border border-white/10 
            rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            p-5 sm:p-6 flex flex-col gap-5
          "
          >
            {/* TITLE */}
            <div className="text-center">
              <p className="text-[10px] sm:text-xs text-cyan-300 tracking-widest mb-1">
                NEXDIFF SYSTEM
              </p>
              <h3 className="text-base sm:text-lg font-semibold">
                Growth Pipeline
              </h3>
            </div>

            {/* PIPELINE */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: <FaUsers className="text-cyan-400" />,
                  text: "Lead Generation",
                },
                {
                  icon: <FaCogs className="text-purple-400" />,
                  text: "Automation System",
                },
                {
                  icon: <FaChartLine className="text-green-400" />,
                  text: "Conversion Funnel",
                },
                {
                  icon: <FaMoneyBillWave className="text-yellow-400" />,
                  text: "Revenue Growth",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3"
                >
                  {item.icon}
                  <p className="text-xs sm:text-sm text-white/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FLOATING METRICS */}
          {/* 🔥 FLOATING METRICS (RESPONSIVE FIXED) */}

          {/* Leads */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="
    absolute top-2 left-2
    sm:top-4 sm:left-4
    md:top-6 md:-left-8 lg:-left-12
    bg-[#111827]/80 backdrop-blur-xl border border-white/10 
    rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg
  "
          >
            <p className="text-[9px] sm:text-[10px] text-white/50">Leads</p>
            <p className="text-cyan-400 font-semibold text-xs sm:text-sm">
              +240%
            </p>
          </motion.div>

          {/* Automation */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="
    absolute bottom-2 right-2
    sm:bottom-4 sm:right-4
    md:bottom-6 md:-right-8 lg:-right-12
    bg-[#111827]/80 backdrop-blur-xl border border-white/10 
    rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg
  "
          >
            <p className="text-[9px] sm:text-[10px] text-white/50">
              Automation
            </p>
            <p className="text-purple-400 font-semibold text-xs sm:text-sm">
              24/7
            </p>
          </motion.div>

          {/* ROI */}
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="
    absolute top-1/2 right-2 -translate-y-1/2
    sm:right-4
    md:right-[-50px] lg:right-[-70px]
    bg-[#111827]/80 backdrop-blur-xl border border-white/10 
    rounded-lg sm:rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 shadow-lg
  "
          >
            <p className="text-[9px] sm:text-[10px] text-white/50">ROI</p>
            <p className="text-green-400 font-semibold text-xs sm:text-sm">
              3X
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;