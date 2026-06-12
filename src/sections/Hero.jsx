import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Code2,
  Megaphone,
  MessageSquareShare,
  MousePointerClick,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import Button from "../components/Button";
import CountUp from "../components/CountUp";

const services = [
  { label: "Software Development", icon: <Code2 size={18} /> },
  { label: "Social Media Handling", icon: <MessageSquareShare size={18} /> },
  { label: "Digital Marketing", icon: <Megaphone size={18} /> },
  { label: "Lead Generation", icon: <Target size={18} /> },
];

const metrics = [
  { value: "4", label: "Core services" },
  { value: "30+", label: "Brands served" },
  { value: "3x", label: "Growth focus" },
];

const pipeline = [
  "Brand audit",
  "Website or software build",
  "Content and ads engine",
  "Qualified leads",
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#101312] text-white pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1f2937]/80 to-transparent" />
      <div className="absolute right-[-18%] top-20 h-[520px] w-[520px] rotate-12 border border-[#f97316]/20 bg-[rgba(249,115,22,0.06)]" />
      <div className="absolute left-[-14%] bottom-[-18%] h-[420px] w-[420px] -rotate-12 border border-[#84cc16]/20 bg-[rgba(132,204,22,0.06)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-3xl"
        >
          <Motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-5 inline-flex items-center gap-2 border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-medium text-[#c7f9cc] backdrop-blur"
          >
            <Sparkles size={15} />
            Brands turn online with one growth partner
          </Motion.div>

          <Motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-white sm:text-5xl lg:text-7xl"
          >
            NexDiff turns brands into{" "}
            <span className="text-[#c7f9cc]">online growth engines.</span>
          </Motion.h1>

          <Motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
          >
            We build the software, content systems, campaigns, and lead
            pipelines that help local and growing brands look credible online,
            attract the right audience, and convert attention into enquiries.
          </Motion.p>

          <Motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              variant="light"
              onClick={() => navigate("/contact")}
              className="group w-full shadow-none sm:w-auto"
            >
              Start Online Growth
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate("/services")}
              className="inline-flex items-center justify-center gap-2 rounded-md border-white/20 bg-white/5"
            >
              View Services
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                navigate("/pricing/request?plan=free-social-media-analysis")
              }
              className="inline-flex items-center justify-center gap-2 rounded-md border-[#c7f9cc]/50 bg-[#c7f9cc]/10 text-[#c7f9cc] hover:bg-[#c7f9cc]/18"
            >
              Get Free Audit
              <span className="rounded-md bg-[#c7f9cc] px-2 py-0.5 text-xs font-semibold text-[#101312]">
                0 cost
              </span>
            </Button>
          </Motion.div>

          <Motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-8 grid max-w-xl grid-cols-3 border-y border-white/10"
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="py-4 pr-4 first:pl-0 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-white/10 sm:px-5"
              >
                <p className="text-2xl font-semibold text-white">
                  <CountUp value={metric.value} />
                </p>
                <p className="mt-1 text-xs text-white/55 sm:text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="border border-white/10 bg-[#f6f1e8] p-2 text-[#101312] shadow-[0_32px_90px_rgba(0,0,0,0.38)]">
            <div className="flex items-center justify-between border-b border-[#101312]/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 bg-[#ef4444]" />
                <span className="h-2.5 w-2.5 bg-[#f59e0b]" />
                <span className="h-2.5 w-2.5 bg-[#22c55e]" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#101312]/45">
                NexDiff OS
              </span>
            </div>

            <div className="grid gap-2 p-2 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[#101312] p-4 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Services
                  </p>
                  <BadgeCheck size={17} className="text-[#c7f9cc]" />
                </div>

                <div className="mt-5 space-y-3">
                  {services.map(({ label, icon }) => (
                    <div
                      key={label}
                      className="flex min-h-12 items-center gap-3 border border-white/10 bg-white/[0.04] px-3"
                    >
                      <span className="text-[#c7f9cc]">{icon}</span>
                      <span className="text-sm text-white/80">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#101312]/45">
                      Online engine
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      From visibility to leads
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center bg-[#c7f9cc]">
                    <TrendingUp size={23} />
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {pipeline.map((item, index) => (
                    <div
                      key={item}
                      className="grid grid-cols-[2.5rem_1fr] items-center gap-3"
                    >
                      <span className="flex h-10 w-10 items-center justify-center bg-[#101312] text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <div className="border-b border-[#101312]/10 pb-3">
                        <p className="text-sm font-medium">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="border border-[#101312]/10 p-4">
                    <MousePointerClick
                      size={20}
                      className="text-[#f97316]"
                    />
                    <p className="mt-3 text-2xl font-semibold">+240%</p>
                    <p className="text-xs text-[#101312]/55">
                      enquiry intent
                    </p>
                  </div>
                  <div className="border border-[#101312]/10 p-4">
                    <BarChart3 size={20} className="text-[#0891b2]" />
                    <p className="mt-3 text-2xl font-semibold">24/7</p>
                    <p className="text-xs text-[#101312]/55">
                      digital presence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
