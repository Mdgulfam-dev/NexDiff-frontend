import { motion as Motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects delivered", note: "Web, software, and growth systems" },
  { value: "30+", label: "Brands served", note: "Local businesses and startups" },
  { value: "4", label: "Core services", note: "Build, content, ads, and leads" },
  { value: "2+", label: "Years experience", note: "Practical product execution" },
];

const Stats = () => {
  return (
    <section className="bg-[#101312] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-[#101312] p-6"
            >
              <p className="text-4xl font-semibold text-[#c7f9cc]">{stat.value}</p>
              <h3 className="mt-3 text-sm font-semibold">{stat.label}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{stat.note}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
