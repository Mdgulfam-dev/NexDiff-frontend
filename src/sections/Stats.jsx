// const stats = [
// { value: "50+", label: "Projects Delivered" },
// { value: "30+", label: "Happy Clients" },
// { value: "10+", label: "Team Members" },
// { value: "2+", label: "Years Experience" },
// ];

// const Stats = () => {
// return ( <section className="bg-[#0F172A] text-white py-16"> <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 text-center">

//     {stats.map((s, i) => (
//       <div
//         key={i}
//         className="p-6 bg-white/5 border border-white/10 rounded-xl"
//       >
//         <h3 className="text-3xl font-bold text-purple-400">
//           {s.value}
//         </h3>
//         <p className="text-sm text-white/60 mt-2">
//           {s.label}
//         </p>
//       </div>
//     ))}

//   </div>
// </section>

// );
// };

// export default Stats;

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "10+", label: "Team Members" },
  { value: "2+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <section className="bg-[#0B1120] text-white py-14 sm:py-16 relative overflow-hidden">
      {/* 🔥 Subtle Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full top-0 left-0" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full bottom-0 right-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`
                p-5 sm:p-6 rounded-xl border border-white/10 backdrop-blur-xl
                bg-gradient-to-br from-white/10 to-white/5
                shadow-md hover:shadow-xl transition
                ${i === 0 ? "ring-1 ring-cyan-400/40" : ""}
              `}
            >
              {/* VALUE */}
              <h3
                className="text-2xl sm:text-3xl font-bold 
                bg-gradient-to-r from-purple-400 to-cyan-400 
                bg-clip-text text-transparent"
              >
                {s.value}
              </h3>

              {/* LABEL */}
              <p className="text-xs sm:text-sm text-white/60 mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;