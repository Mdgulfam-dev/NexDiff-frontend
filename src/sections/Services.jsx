// import { motion } from "framer-motion";
// import { FaCode, FaMobileAlt, FaCloud, FaChartLine, FaRobot } from "react-icons/fa";

// const services = [
// {
// title: "Web Development",
// icon: <FaCode size={28} />,
// desc: "Modern, fast and scalable web applications using latest technologies.",
// },
// {
// title: "App Development",
// icon: <FaMobileAlt size={28} />,
// desc: "High-performance mobile apps for Android and iOS platforms.",
// },
// {
// title: "AI Solutions",
// icon: <FaRobot size={28} />,
// desc: "AI-powered tools, automation and smart business solutions.",
// },
// {
// title: "Cloud & DevOps",
// icon: <FaCloud size={28} />,
// desc: "Deploy, scale and manage apps with AWS, Docker & CI/CD pipelines.",
// },
// {
// title: "Digital Marketing",
// icon: <FaChartLine size={28} />,
// desc: "Grow your brand with data-driven marketing strategies.",
// },
// ];

// const Services = () => {
// return ( <section className="py-20 bg-[#0F172A] text-white"> <div className="max-w-7xl mx-auto px-6">

//     {/* Heading */}
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="text-center"
//     >
//       <h2 className="text-4xl font-bold">
//         Our <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">Services</span>
//       </h2>
//       <p className="mt-4 text-white/70">
//         We provide complete digital solutions to grow your business.
//       </p>
//     </motion.div>

//     {/* Cards */}
//     <div className="grid md:grid-cols-3 gap-8 mt-14">
//       {services.map((service, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ scale: 1.05 }}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//           className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 transition shadow-lg"
//         >
//           {/* Icon */}
//           <div className="mb-4 text-purple-400">
//             {service.icon}
//           </div>

//           {/* Title */}
//           <h3 className="text-xl font-semibold">
//             {service.title}
//           </h3>

//           {/* Description */}
//           <p className="mt-3 text-white/70 text-sm">
//             {service.desc}
//           </p>
//         </motion.div>
//       ))}
//     </div>

//   </div>
// </section>


// );
// };

// export default Services;




import { motion } from "framer-motion";
import {
FaCode,
FaMobileAlt,
FaCloud,
FaChartLine,
FaRobot,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Lead Generating Websites",
    icon: <FaCode size={26} />,
    desc: "We build high-converting websites designed to generate leads, boost SEO rankings, and grow your business.",
  },
  {
    title: "Mobile Apps for Growth",
    icon: <FaMobileAlt size={26} />,
    desc: "Engaging mobile apps that improve customer retention, user experience, and revenue generation.",
  },
  {
    title: "Web Development",
    icon: <FaCode size={28} />,
    desc: "Modern, fast and scalable web applications using latest technologies.",
  },
  {
    title: "AI Automation Solutions",
    icon: <FaRobot size={26} />,
    desc: "Automate your business with AI chatbots, workflows, and smart tools to save time and increase efficiency.",
  },
  {
    title: "Cloud & DevOps Scaling",
    icon: <FaCloud size={26} />,
    desc: "Scale your product with secure cloud infrastructure, fast deployment, and zero downtime systems.",
  },
  {
    title: "Performance Marketing",
    icon: <FaChartLine size={26} />,
    desc: "Run high-converting ads on Google, Facebook & Instagram to generate real leads and maximize ROI.",
  },
  {
    title: "Social Media Growth",
    icon: <FaChartLine size={26} />,
    desc: "We manage and grow your social media presence to build brand awareness and attract customers.",
  },
];

const Services = () => {
const navigate = useNavigate();

return ( <section className="py-24 bg-[#0B1120] text-white"> <div className="max-w-7xl mx-auto px-6">


    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        Growth-Focused{" "}
        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Services
        </span>
      </h2>

      <p className="mt-4 text-white/60 max-w-2xl mx-auto">
        We don’t just build — we help you generate leads, increase revenue, and scale your business.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl" />

          {/* Icon */}
          <div className="relative mb-4 text-purple-400 text-2xl">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="relative text-lg font-semibold">
            {service.title}
          </h3>

          {/* Description */}
          <p className="relative mt-3 text-white/60 text-sm leading-relaxed">
            {service.desc}
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="relative mt-6 text-sm text-cyan-400 hover:underline"
          >
            Get Leads →
          </button>

        </motion.div>
      ))}

    </div>

  </div>
</section>


);
};

export default Services;
