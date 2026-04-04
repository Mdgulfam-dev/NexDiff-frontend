// import { motion } from "framer-motion";
// import Button from "../components/Button";

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
//       className="text-3xl md:text-5xl font-bold leading-tight"
//     >
//       Let’s Build Something{" "}
//       <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
//         Powerful
//       </span>
//     </motion.h2>

//     {/* Subtext */}
//     <p className="mt-6 text-white/70 text-lg">
//       Talk to our team and start your project today.
//     </p>

//     {/* Buttons */}
//     <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

//       {/* WhatsApp */}
//       <Button
//         onClick={() =>
//           window.open(
//             "https://wa.me/919001402531?text=Hi NexDiff, I want to start a project"
//           )
//         }
//       >
//         Chat on WhatsApp 💬
//       </Button>

//       {/* Book Call */}
//       <Button
//         variant="outline"
//         onClick={() =>
//           window.open("https://calendly.com/your-link")
//         }
//       >
//         Book a Free Call 📞
//       </Button>

//     </div>
//   </div>
// </section>

// );
// };

// export default CTA;

import { motion } from "framer-motion";
import Button from "../components/Button";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative py-24 bg-[#0F172A] text-white overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-150px] left-[20%]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/30 blur-3xl rounded-full bottom-[-150px] right-[20%]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* 🔥 Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block px-4 py-1 mb-4 text-sm bg-purple-500/20 text-purple-300 rounded-full"
        >
          🚀 Limited Slots Available
        </motion.div>

        {/* 🔥 Heading */}
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

        {/* 🔥 Subtext */}
        <p className="mt-6 text-white/70 text-lg">
          Get a free strategy call and discover how we can help you generate
          leads, automate systems, and scale your business.
        </p>

        {/* 🔥 Trust Line */}
        <p className="mt-3 text-sm text-white/50">
          No commitment • 100% free consultation
        </p>

        {/* 🔥 Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          {/* WhatsApp */}
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/919001402531?text=Hi NexDiff, I want to start a project",
              )
            }
            className="flex items-center gap-2 justify-center"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </Button>

          {/* Call */}
          <Button
            variant="outline"
            onClick={() => window.open("https://calendly.com/your-link")}
            className="flex items-center gap-2 justify-center"
          >
            <FaPhone /> Book Free Call
          </Button>
        </div>

        {/* 🔥 Extra Trust */}
        <p className="mt-6 text-xs text-white/40">
          ⚡ Usually responds within 5–10 minutes
        </p>
      </div>
    </section>
  );
};

export default CTA;