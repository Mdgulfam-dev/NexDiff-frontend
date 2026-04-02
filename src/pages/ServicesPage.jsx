import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";
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

const ServicesPage = () => {
return ( <section className="min-h-screen bg-[#0F172A] text-white py-22 px-6"> <div className="max-w-7xl mx-auto">


    {/* Heading */}
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Our Services
      </h1>
      <p className="mt-4 text-white/70">
        We provide complete digital solutions tailored to your business.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-3 gap-8 mt-14">
      {services.map((service, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg"
        >
          <h3 className="text-xl font-semibold">
            {service.title}
          </h3>
          <p className="mt-4 text-white/70 text-sm">
            {service.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>


);
};

export default ServicesPage;
