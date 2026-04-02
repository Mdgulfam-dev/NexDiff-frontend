// import { motion } from "framer-motion";

// const CTA = () => {
// return ( <section className="relative py-24 bg-[#0F172A] text-white overflow-hidden">

//   {/* Background Glow */}
//   <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-150px] left-[20%]" />
//   <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 blur-3xl rounded-full bottom-[-150px] right-[20%]" />

//   <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

//     {/* Heading */}
//     <motion.h2
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="text-3xl md:text-5xl font-bold leading-tight"
//     >
//       Ready to Grow Your{" "}
//       <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
//         Business?
//       </span>
//     </motion.h2>

//     {/* Subtext */}
//     <p className="mt-6 text-white/70 text-lg">
//       Let NexDiff help you build powerful digital solutions and scale faster than ever.
//     </p>

//     {/* Buttons */}
//     <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

//       {/* Primary Button */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-full font-semibold shadow-lg"
//       >
//         Start Your Project 🚀
//       </motion.button>

//       {/* Secondary Button */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         className="border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition"
//       >
//         Book a Free Call 📞
//       </motion.button>

//     </div>
//   </div>
// </section>

// );
// };

// export default CTA;




import { motion } from "framer-motion";
import Button from "../components/Button";

const CTA = () => {
return ( <section className="relative py-24 bg-[#0F172A] text-white overflow-hidden">


  {/* Background Glow */}
  <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-150px] left-[20%]" />
  <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 blur-3xl rounded-full bottom-[-150px] right-[20%]" />

  <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-5xl font-bold leading-tight"
    >
      Let’s Build Something{" "}
      <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
        Powerful
      </span>
    </motion.h2>

    {/* Subtext */}
    <p className="mt-6 text-white/70 text-lg">
      Talk to our team and start your project today.
    </p>

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

      {/* WhatsApp */}
      <Button
        onClick={() =>
          window.open(
            "https://wa.me/919001402531?text=Hi NexDiff, I want to start a project"
          )
        }
      >
        Chat on WhatsApp 💬
      </Button>

      {/* Book Call */}
      <Button
        variant="outline"
        onClick={() =>
          window.open("https://calendly.com/your-link")
        }
      >
        Book a Free Call 📞
      </Button>

    </div>
  </div>
</section>


);
};

export default CTA;
