import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ClipboardList,
  Code2,
  LineChart,
  Megaphone,
  Rocket,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

const workflow = [
  {
    title: "Discovery and growth map",
    icon: <SearchCheck size={22} />,
    description:
      "We understand your business, audience, offers, current channels, and the exact problem the product needs to solve.",
    outputs: ["Business goal clarity", "User journey", "Feature priorities"],
  },
  {
    title: "Product plan and content structure",
    icon: <ClipboardList size={22} />,
    description:
      "We turn the idea into screens, pages, content sections, enquiry paths, and a practical launch roadmap.",
    outputs: ["Page flow", "Conversion copy", "Launch scope"],
  },
  {
    title: "Design and build",
    icon: <Code2 size={22} />,
    description:
      "We build the website, software, dashboard, funnel, or automation with clean UI and reliable business logic.",
    outputs: ["Responsive interface", "Fast performance", "Admin-ready systems"],
  },
  {
    title: "Launch and tracking",
    icon: <Rocket size={22} />,
    description:
      "We connect forms, WhatsApp flows, analytics, basic SEO, and tracking so every visitor action is easier to measure.",
    outputs: ["Live deployment", "Lead capture", "Analytics setup"],
  },
  {
    title: "Marketing activation",
    icon: <Megaphone size={22} />,
    description:
      "We align the product with social content, campaigns, landing pages, and lead generation so launch turns into reach.",
    outputs: ["Campaign direction", "Content calendar", "Audience targeting"],
  },
  {
    title: "Improve with data",
    icon: <LineChart size={22} />,
    description:
      "After launch, we review behavior, enquiries, and campaign results to improve pages, content, and conversion paths.",
    outputs: ["Monthly insights", "Better conversions", "Next growth steps"],
  },
];

const checkpoints = [
  "Dedicated project manager",
  "Mobile-first responsive design",
  "SEO & performance optimized",
  "Secure and scalable solutions",
];

const TechStack = () => {
  const navigate = useNavigate();

  return (
    <section className="section-pad bg-[#f7f3ea] text-[#101312]">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Build workflow</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              From business idea to launch-ready growth system.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              At NexDiff, we follow a proven process that takes your business
              from concept to launch and beyond. From strategy and design to
              development, marketing, and ongoing growth, we build solutions
              that deliver real business results.
            </p>

            <div className="mt-6 space-y-3">
              {checkpoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <ShieldCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-[#16837a]"
                  />
                  <p className="text-sm leading-6 text-[#101312]/68">{item}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#101312] bg-[#101312] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Plan Your Project
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((step, index) => (
              <Motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="light-card rounded-lg p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f7f3ea] text-[#e05f2f]">
                    {step.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101312]/42">
                        Step {index + 1}
                      </span>
                      {index === 2 && (
                        <BadgeCheck size={15} className="text-[#16837a]" />
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#101312]/62">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-2 border-t border-[#101312]/10 pt-4">
                  {step.outputs.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between gap-3 rounded-lg bg-[#f7f3ea] px-3 py-2 text-sm font-semibold text-[#101312]/68"
                    >
                      <span>{item}</span>
                      <ArrowRight
                        size={15}
                        className="shrink-0 text-[#16837a]"
                      />
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
