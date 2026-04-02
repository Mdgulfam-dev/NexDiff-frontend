import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaBolt, FaHandshake } from "react-icons/fa";

const features = [
{
title: "Agile & Adaptive",
desc: "We quickly scale teams and adapt to your business needs.",
icon: <FaRocket />,
},
{
title: "Rapid Development",
desc: "Fast prototyping and development using modern tools.",
icon: <FaBolt />,
},
{
title: "Dedicated Team",
desc: "Work with experienced developers and engineers.",
icon: <FaUsers />,
},
{
title: "Flexible Engagement",
desc: "Choose fixed price, hourly, or project-based models.",
icon: <FaHandshake />,
},
];

const WhyChoose = () => {
return ( <section className="bg-[#0B1120] text-white py-24 px-6"> <div className="max-w-7xl mx-auto">


    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Why Choose NexDiff
      </h2>
      <p className="text-white/60 mt-4 max-w-2xl mx-auto">
        We combine technology, strategy, and execution to deliver real business results.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {features.map((f, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8 }}
          className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl" />

          {/* Icon */}
          <div className="relative text-3xl text-purple-400 mb-4">
            {f.icon}
          </div>

          {/* Title */}
          <h3 className="relative text-lg font-semibold mb-2">
            {f.title}
          </h3>

          {/* Description */}
          <p className="relative text-white/60 text-sm leading-relaxed">
            {f.desc}
          </p>

        </motion.div>
      ))}

    </div>

  </div>
</section>


);
};

export default WhyChoose;
