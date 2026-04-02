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
{ name: "React", icon: <FaReact /> },
{ name: "Next.js", icon: <SiNextdotjs /> },
{ name: "React Native", icon: <FaReact /> },
{ name: "JavaScript", icon: <SiJavascript /> },
{ name: "TypeScript", icon: <SiTypescript /> },
{ name: "HTML5", icon: <FaHtml5 /> },
{ name: "CSS3", icon: <FaCss3Alt /> },
{ name: "Tailwind", icon: <SiTailwindcss /> },
],

Backend: [
{ name: "Node.js", icon: <FaNodeJs /> },
{ name: "Express.js", icon: <SiExpress /> },
{ name: "Spring Boot", icon: <SiSpring /> },
{ name: "Django", icon: <SiDjango /> },
{ name: "GraphQL", icon: <SiGraphql /> },
],

Database: [
{ name: "MongoDB", icon: <SiMongodb /> },
{ name: "MySQL", icon: <SiMysql /> },
{ name: "PostgreSQL", icon: <SiPostgresql /> },
{ name: "Redis", icon: <SiRedis /> },
{ name: "Firebase", icon: <SiFirebase /> },
],

DevOps: [
{ name: "Docker", icon: <FaDocker /> },
{ name: "Kubernetes", icon: <SiKubernetes /> },
{ name: "Nginx", icon: <SiNginx /> },
],

Cloud: [
{ name: "AWS", icon: <FaAws /> },
{ name: "Google Cloud", icon: <SiGooglecloud /> },
],

AI: [
{ name: "OpenAI", icon: <SiOpenai /> },
{ name: "AI Integration", icon: <SiOpenai /> },
],
};

const TechStack = () => {
return ( <section className="bg-[#0B1120] text-white py-24 px-6"> <div className="max-w-7xl mx-auto">


    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
      Technology Stack
    </h2>

    {/* Sections */}
    {Object.entries(tech).map(([category, items]) => (
      <div key={category} className="mb-16">

        <h3 className="text-lg text-white/60 mb-8 tracking-wide uppercase">
          {category}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">

          {items.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl" />

              {/* Icon */}
              <div className="relative text-4xl mb-3 text-white/80 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Name */}
              <p className="relative text-sm text-white/60 group-hover:text-white transition">
                {item.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    ))}

  </div>
</section>


);
};

export default TechStack;
