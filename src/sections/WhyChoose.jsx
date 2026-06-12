import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Handshake, Rocket, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    title: "Business-first delivery",
    desc: "Every build is tied to a clear commercial goal, not only a feature list.",
    icon: <ShieldCheck />,
    tag: "Outcome",
  },
  {
    title: "Fast execution",
    desc: "Lean planning, focused sprints, and quick launches keep momentum high.",
    icon: <Zap />,
    tag: "Speed",
  },
  {
    title: "Scalable systems",
    desc: "We build with maintainable patterns so your product can grow safely.",
    icon: <Rocket />,
    tag: "Scale",
  },
  {
    title: "Flexible partnership",
    desc: "Use us for a launch, a growth sprint, or ongoing product support.",
    icon: <Handshake />,
    tag: "Support",
  },
];

const WhyChoose = () => {
  const navigate = useNavigate();

  return (
    <section className="section-pad bg-[#101312] text-white">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7f9cc]">
              Why NexDiff
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              Built for teams that need real online growth.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
              We combine product thinking, implementation, and growth systems
              so your website, software, content, and campaigns work together.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#c7f9cc] px-5 py-3 text-sm font-semibold text-[#101312] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Get Free Growth Plan
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="dark-card rounded-lg p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#101312]">
                  {feature.icon}
                </span>
                <span className="rounded-md border border-white/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  {feature.tag}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{feature.desc}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
