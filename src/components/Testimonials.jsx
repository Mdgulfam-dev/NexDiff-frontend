// import { motion } from "framer-motion";
// import { FaStar, FaQuoteLeft } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const testimonials = [
//   {
//     name: "Amit Sharma",
//     role: "Startup Founder",
//     rating: 5,
//     image: "https://i.pravatar.cc/100?img=1",
//     feedback:
//       "NexDiff helped us build a high-performance website that boosted our business growth significantly.",
//     highlight: true,
//   },
//   {
//     name: "Priya Verma",
//     role: "Business Owner",
//     rating: 4,
//     image: "https://i.pravatar.cc/100?img=5",
//     feedback:
//       "Professional team with great technical skills. They delivered exactly what we needed.",
//   },
//   {
//     name: "Rahul Mehta",
//     role: "Entrepreneur",
//     rating: 5,
//     image: "https://i.pravatar.cc/100?img=3",
//     feedback:
//       "Amazing experience! The UI/UX and performance of our app is outstanding.",
//   },
// ];

// const Testimonials = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
//       {/* 🔥 Background Glow */}
//       <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl top-[-100px] left-[-100px]" />
//       <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-3xl bottom-[-100px] right-[-100px]" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* 🔥 Heading */}
//         <div className="text-center">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             Loved by Clients
//           </h2>

//           <p className="mt-4 text-white/60">
//             Trusted by startups & businesses for real results
//           </p>

//           {/* 🔥 Trust Badge */}
//           <div className="mt-4 text-sm text-yellow-400">
//             ⭐ 4.9/5 Average Rating • 30+ Happy Clients
//           </div>
//         </div>

//         {/* 🔥 Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mt-16">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ y: -10, scale: 1.03 }}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.15 }}
//               className={`group relative p-6 rounded-2xl backdrop-blur-lg border transition overflow-hidden ${
//                 t.highlight
//                   ? "bg-purple-500/10 border-purple-500/40 scale-105"
//                   : "bg-white/5 border-white/10 hover:border-purple-500/40"
//               }`}
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl rounded-2xl" />

//               {/* Quote Icon */}
//               <FaQuoteLeft className="text-white/20 text-3xl mb-4" />

//               {/* Stars */}
//               <div className="flex items-center gap-1 text-yellow-400 mb-4">
//                 {[...Array(5)].map((_, index) => (
//                   <FaStar
//                     key={index}
//                     className={
//                       index < t.rating ? "text-yellow-400" : "text-white/20"
//                     }
//                   />
//                 ))}
//                 <span className="text-xs text-white/50 ml-2">{t.rating}.0</span>
//               </div>

//               {/* Feedback */}
//               <p className="text-white/70 text-sm leading-relaxed">
//                 “{t.feedback}”
//               </p>

//               {/* User */}
//               <div className="mt-6 flex items-center gap-3">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-10 h-10 rounded-full object-cover border border-white/20"
//                 />

//                 <div>
//                   <h4 className="font-semibold">{t.name}</h4>
//                   <p className="text-xs text-white/50">{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 🔥 CTA */}
//         <div className="text-center mt-16">
//           <p className="text-white/50 mb-4">Want results like these?</p>

//           <button
//             onClick={() => navigate("/contact")}
//             className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl font-semibold text-black hover:scale-105 transition"
//           >
//             Start Your Project
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Startup Founder",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1",
    feedback:
      "NexDiff helped us build a high-performance website that boosted our business growth significantly.",
    highlight: true,
  },
  {
    name: "Priya Verma",
    role: "Business Owner",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=5",
    feedback:
      "Professional team with great technical skills. They delivered exactly what we needed.",
  },
  {
    name: "Rahul Mehta",
    role: "Entrepreneur",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
    feedback:
      "Amazing experience! The UI/UX and performance of our app is outstanding.",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-[#0B1120] text-white relative overflow-hidden">
      {/* 🔥 Glow */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-3xl top-0 left-0" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 blur-3xl bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* 🔥 Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
            Loved by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>

          <p className="mt-3 text-white/60 text-sm sm:text-base">
            Trusted by startups & businesses for real results
          </p>

          {/* Trust badge */}
          <div className="mt-3 text-xs sm:text-sm text-yellow-400">
            ⭐ 4.9/5 Rating • 30+ Clients
          </div>
        </div>

        {/* 🔥 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`
                group relative p-5 sm:p-6 rounded-xl 
                bg-gradient-to-br from-white/10 to-white/5 
                backdrop-blur-xl border transition
                ${
                  t.highlight
                    ? "border-cyan-400/40"
                    : "border-white/10 hover:border-cyan-400/30"
                }
              `}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
              bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl rounded-xl"
              />

              {/* Quote */}
              <FaQuoteLeft className="text-white/20 text-2xl mb-3" />

              {/* Stars */}
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < t.rating ? "text-yellow-400" : "text-white/20"
                    }
                  />
                ))}
                <span className="text-[10px] sm:text-xs text-white/50 ml-2">
                  {t.rating}.0
                </span>
              </div>

              {/* Feedback */}
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                “{t.feedback}”
              </p>

              {/* User */}
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-white/20"
                />

                <div>
                  <h4 className="text-sm font-semibold">{t.name}</h4>
                  <p className="text-[10px] sm:text-xs text-white/50">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-white/50 text-sm mb-3">Want results like these?</p>

          <button
            onClick={() => navigate("/contact")}
            className="px-5 sm:px-6 py-2.5 sm:py-3 
            bg-gradient-to-r from-purple-500 to-cyan-400 
            rounded-full text-white font-medium 
            hover:scale-105 transition"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;