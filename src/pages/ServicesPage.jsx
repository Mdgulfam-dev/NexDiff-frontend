import { motion } from "framer-motion";

const services = [
{
title: "Web Development",
desc: "We build fast, scalable and SEO-friendly websites using modern technologies like React, Node.js and more.",
},
{
title: "App Development",
desc: "Custom Android & iOS apps designed for performance, scalability and great user experience.",
},
{
title: "AI Solutions",
desc: "AI-powered applications, automation tools and smart integrations for your business.",
},
{
title: "Cloud & DevOps",
desc: "AWS deployment, Docker setup, CI/CD pipelines and scalable cloud infrastructure.",
},
{
title: "Digital Marketing",
desc: "SEO, paid ads, and social media strategies to grow your brand online.",
},
];

const ServicesPage = () => {
return ( <section className="min-h-screen bg-[#0F172A] text-white py-20 px-6"> <div className="max-w-7xl mx-auto">


    {/* Heading */}
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Our Services 🚀
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
