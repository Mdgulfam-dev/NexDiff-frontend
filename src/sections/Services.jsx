import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud, FaChartLine, FaRobot } from "react-icons/fa";

const services = [
{
title: "Web Development",
icon: <FaCode size={28} />,
desc: "Modern, fast and scalable web applications using latest technologies.",
},
{
title: "App Development",
icon: <FaMobileAlt size={28} />,
desc: "High-performance mobile apps for Android and iOS platforms.",
},
{
title: "AI Solutions",
icon: <FaRobot size={28} />,
desc: "AI-powered tools, automation and smart business solutions.",
},
{
title: "Cloud & DevOps",
icon: <FaCloud size={28} />,
desc: "Deploy, scale and manage apps with AWS, Docker & CI/CD pipelines.",
},
{
title: "Digital Marketing",
icon: <FaChartLine size={28} />,
desc: "Grow your brand with data-driven marketing strategies.",
},
];

const Services = () => {
return ( <section className="py-20 bg-[#0F172A] text-white"> <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold">
        Our <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">Services</span>
      </h2>
      <p className="mt-4 text-white/70">
        We provide complete digital solutions to grow your business.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-14">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 transition shadow-lg"
        >
          {/* Icon */}
          <div className="mb-4 text-purple-400">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-white/70 text-sm">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


);
};

export default Services;
