// import {
// FaReact,
// FaNodeJs,
// FaAws,
// FaDocker,
// FaHtml5,
// FaCss3Alt,
// } from "react-icons/fa";

// import {
// SiMongodb,
// SiMysql,
// SiRedis,
// SiKubernetes,
// SiNginx,
// SiTailwindcss,
// SiDjango,
// SiSpring,
// SiJavascript,
// SiTypescript,
// SiNextdotjs,
// SiExpress,
// SiFirebase,
// SiPostgresql,
// SiGraphql,
// SiGooglecloud,
// SiOpenai,
// } from "react-icons/si";

// const tech = {
// Frontend: [
// { name: "React", icon: <FaReact /> },
// { name: "Next.js", icon: <SiNextdotjs /> },
// { name: "React Native", icon: <FaReact /> },
// { name: "JavaScript", icon: <SiJavascript /> },
// { name: "TypeScript", icon: <SiTypescript /> },
// { name: "HTML5", icon: <FaHtml5 /> },
// { name: "CSS3", icon: <FaCss3Alt /> },
// { name: "Tailwind", icon: <SiTailwindcss /> },
// ],

// Backend: [
// { name: "Node.js", icon: <FaNodeJs /> },
// { name: "Express.js", icon: <SiExpress /> },
// { name: "Spring Boot", icon: <SiSpring /> },
// { name: "Django", icon: <SiDjango /> },
// { name: "GraphQL", icon: <SiGraphql /> },
// ],

// Database: [
// { name: "MongoDB", icon: <SiMongodb /> },
// { name: "MySQL", icon: <SiMysql /> },
// { name: "PostgreSQL", icon: <SiPostgresql /> },
// { name: "Redis", icon: <SiRedis /> },
// { name: "Firebase", icon: <SiFirebase /> },
// ],

// DevOps: [
// { name: "Docker", icon: <FaDocker /> },
// { name: "Kubernetes", icon: <SiKubernetes /> },
// { name: "Nginx", icon: <SiNginx /> },
// ],

// Cloud: [
// { name: "AWS", icon: <FaAws /> },
// { name: "Google Cloud", icon: <SiGooglecloud /> },
// ],

// AI: [
// { name: "OpenAI", icon: <SiOpenai /> },
// { name: "AI Integration", icon: <SiOpenai /> },
// ],
// };

// const TechStack = () => {
// return ( <section className="bg-[#0B1120] text-white py-24 px-6"> <div className="max-w-7xl mx-auto">

//     {/* Heading */}
//     <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
//       Technology Stack
//     </h2>

//     {/* Sections */}
//     {Object.entries(tech).map(([category, items]) => (
//       <div key={category} className="mb-16">

//         <h3 className="text-lg text-white/60 mb-8 tracking-wide uppercase">
//           {category}
//         </h3>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">

//           {items.map((item, i) => (
//             <div
//               key={i}
//               className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
//             >

//               {/* Glow Effect */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl" />

//               {/* Icon */}
//               <div className="relative text-4xl mb-3 text-white/80 group-hover:text-white transition">
//                 {item.icon}
//               </div>

//               {/* Name */}
//               <p className="relative text-sm text-white/60 group-hover:text-white transition">
//                 {item.name}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>
//     ))}

//   </div>
// </section>

// );
// };

// export default TechStack;

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiNginx,
  SiTailwindcss,
  SiDjango,
  SiSpring,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiFirebase,
  SiPostgresql,
  SiGraphql,
  SiGooglecloud,
  SiOpenai,
} from "react-icons/si";

const tech = {
  Frontend: [
    { name: "React", icon: <FaReact />, tag: "🔥 Core" },
    { name: "Next.js", icon: <SiNextdotjs />, tag: "⚡ Fast" },
    { name: "React Native", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript />, tag: "🔥 Core" },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ],

  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, tag: "🔥 Core" },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "GraphQL", icon: <SiGraphql /> },
  ],

  Database: [
    { name: "MongoDB", icon: <SiMongodb />, tag: "🔥 Core" },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Redis", icon: <SiRedis />, tag: "⚡ Fast" },
    { name: "Firebase", icon: <SiFirebase /> },
  ],

  DevOps: [
    { name: "Docker", icon: <FaDocker />, tag: "🔥 Core" },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Nginx", icon: <SiNginx /> },
  ],

  Cloud: [
    { name: "AWS", icon: <FaAws />, tag: "🔥 Core" },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
  ],

  AI: [
    { name: "OpenAI", icon: <SiOpenai />, tag: "🤖 AI" },
    { name: "AI Integration", icon: <SiOpenai />, tag: "🤖 AI" },
  ],
};

const TechStack = () => {
  return (
    <section className="bg-[#0B1120] text-white py-24 px-6 relative overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl top-[-100px] left-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-cyan-500/20 blur-3xl bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Powerful{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>

          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            We use modern, scalable, and AI-driven technologies to build fast,
            secure, and high-performing products.
          </p>
        </motion.div>

        {/* 🔥 Sections */}
        {Object.entries(tech).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="mb-16"
          >
            <h3 className="text-sm text-purple-400 mb-6 uppercase tracking-widest">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl rounded-2xl" />

                  {/* Tag */}
                  {item.tag && (
                    <span className="absolute top-2 right-2 text-[10px] bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                      {item.tag}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="relative text-4xl mb-3 text-white/80 group-hover:text-white transition">
                    {item.icon}
                  </div>

                  {/* Name */}
                  <p className="relative text-sm text-white/60 group-hover:text-white transition">
                    {item.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* 🔥 Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/50 mb-4">Want to build using modern tech?</p>

          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl font-semibold text-black hover:scale-105 transition">
            🚀 Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;