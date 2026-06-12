import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaAws, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiFirebase,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiOpenai,
  SiPostgresql,
  SiRedis,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

const tech = {
  Frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Spring", icon: <SiSpring /> },
    { name: "GraphQL", icon: <SiGraphql /> },
  ],
  Data: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  "Cloud & AI": [
    { name: "AWS", icon: <FaAws /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Nginx", icon: <SiNginx /> },
    { name: "OpenAI", icon: <SiOpenai /> },
  ],
};

const TechStack = () => {
  const navigate = useNavigate();

  return (
    <section className="section-pad bg-[#f7f3ea] text-[#101312]">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Technology</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              A practical stack for fast, scalable product work.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              We choose tools around reliability, speed, and long-term
              maintainability, then connect them to the business outcome.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#101312] bg-[#101312] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Plan Your Stack
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {Object.entries(tech).map(([category, items], categoryIndex) => (
              <Motion.div
                key={category}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.06 }}
                viewport={{ once: true }}
                className="light-card rounded-lg p-5"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#101312]/55">
                  {category}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-3 text-center transition hover:border-[#101312]/30 hover:bg-white"
                    >
                      <span className="text-2xl text-[#16837a]">{item.icon}</span>
                      <span className="mt-2 text-xs font-semibold text-[#101312]/70">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
