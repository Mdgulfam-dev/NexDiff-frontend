// import { motion } from "framer-motion";
// import { FaRocket, FaUsers, FaBolt, FaHandshake, FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const features = [
//   {
//     title: "Agile & Adaptive",
//     desc: "We quickly scale teams and adapt to your business needs.",
//     icon: <FaRocket />,
//     tag: "Fast Execution",
//   },
//   {
//     title: "Rapid Development",
//     desc: "Launch faster with modern tools and proven workflows.",
//     icon: <FaBolt />,
//     tag: "Speed",
//   },
//   {
//     title: "Dedicated Team",
//     desc: "Work with experienced developers focused on your growth.",
//     icon: <FaUsers />,
//     tag: "Experts",
//   },
//   {
//     title: "Flexible Engagement",
//     desc: "Choose pricing models that fit your business goals.",
//     icon: <FaHandshake />,
//     tag: "Flexible",
//   },
// ];

// const WhyChoose = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#0B1120] text-white py-24 px-6 relative overflow-hidden">
//       {/* 🔥 Background Glow */}
//       <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl top-[-100px] left-[-100px]" />
//       <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-3xl bottom-[-100px] right-[-100px]" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* 🔥 Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
//             Why Businesses Choose{" "}
//             <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
//               NexDiff
//             </span>
//           </h2>

//           <p className="text-white/60 mt-4 max-w-2xl mx-auto">
//             We don’t just deliver projects — we deliver{" "}
//             <span className="text-white font-medium">
//               measurable growth & results
//             </span>
//             .
//           </p>
//         </motion.div>

//         {/* 🔥 Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10, scale: 1.03 }}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition overflow-hidden"
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl rounded-2xl" />

//               {/* Tag */}
//               <span className="absolute top-4 right-4 text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
//                 {f.tag}
//               </span>

//               {/* Icon */}
//               <div className="relative text-3xl text-purple-400 mb-4 group-hover:scale-110 transition">
//                 {f.icon}
//               </div>

//               {/* Title */}
//               <h3 className="relative text-lg font-semibold mb-2">{f.title}</h3>

//               {/* Description */}
//               <p className="relative text-white/60 text-sm leading-relaxed">
//                 {f.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* 🔥 Bottom CTA */}
//         <div className="text-center mt-16">
//           <p className="text-white/50 mb-4">
//             Ready to grow your business with smart technology?
//           </p>

//           <button
//             onClick={() => navigate("/contact")}
//             className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl font-semibold text-black hover:scale-105 transition"
//           >
//             Get Free Consultation
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;

import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaBolt, FaHandshake } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Agile & Adaptive",
    desc: "We quickly scale teams and adapt to your business needs.",
    icon: <FaRocket />,
    tag: "Fast Execution",
  },
  {
    title: "Rapid Development",
    desc: "Launch faster with modern tools and proven workflows.",
    icon: <FaBolt />,
    tag: "Speed",
  },
  {
    title: "Dedicated Team",
    desc: "Work with experienced developers focused on your growth.",
    icon: <FaUsers />,
    tag: "Experts",
  },
  {
    title: "Flexible Engagement",
    desc: "Choose pricing models that fit your business goals.",
    icon: <FaHandshake />,
    tag: "Flexible",
  },
];

const WhyChoose = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0B1120] text-white py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-3xl top-0 left-0" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-3xl bottom-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              NexDiff
            </span>
          </h2>

          <p className="text-white/60 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            We don’t just deliver — we deliver{" "}
            <span className="text-white font-medium">
              measurable growth & results
            </span>
          </p>
        </motion.div>

        {/* 🔥 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative p-5 sm:p-6 rounded-xl 
              bg-gradient-to-br from-white/10 to-white/5 
              backdrop-blur-xl border border-white/10 
              hover:border-cyan-400/40 transition"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
              bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl rounded-xl"
              />

              {/* Tag */}
              <span
                className="absolute top-3 right-3 text-[10px] sm:text-xs 
              bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded-full"
              >
                {f.tag}
              </span>

              {/* Icon */}
              <div
                className="relative text-xl sm:text-2xl text-cyan-400 mb-3 
              group-hover:scale-110 transition"
              >
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-base sm:text-lg font-semibold mb-1">
                {f.title}
              </h3>

              {/* Description */}
              <p className="relative text-white/60 text-xs sm:text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-white/50 text-sm mb-3">
            Ready to grow your business with smart technology?
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-5 sm:px-6 py-2.5 sm:py-3 
            bg-gradient-to-r from-purple-500 to-cyan-400 
            rounded-full text-white font-medium 
            hover:scale-105 transition"
          >
            Get Free Growth Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;