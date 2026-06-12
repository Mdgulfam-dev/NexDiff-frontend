import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  Megaphone,
  MessageSquareShare,
  Target,
} from "lucide-react";
import services from "../data/services";

const icons = {
  code: <Code2 />,
  social: <MessageSquareShare />,
  megaphone: <Megaphone />,
  target: <Target />,
};

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] py-20 text-[#101312] sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,19,18,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,19,18,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-0 top-0 h-full w-2 bg-[#f97316]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f97316]">
              What we offer
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-5xl">
              A modern growth stack for brands going online.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#101312]/70 sm:text-base">
            NexDiff connects the four things most businesses need to grow
            online: a strong digital product, active social presence, marketing
            campaigns, and a lead system that captures demand.
          </p>
        </Motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Motion.article
              key={service.title}
              onClick={() => navigate(`/service/${service.id}`)}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group flex min-h-[330px] cursor-pointer flex-col justify-between border border-[#101312]/10 bg-white p-5 transition hover:border-[#101312] hover:shadow-[12px_12px_0_#101312]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#101312] text-[#c7f9cc]">
                    {icons[service.icon]}
                  </div>
                  <span className="border border-[#101312]/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#101312]/60">
                    {service.highlight}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#101312]/65">
                  {service.desc}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/contact");
                }}
                className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#101312] transition group-hover:gap-3"
              >
                Get Strategy
                <ArrowUpRight size={17} />
              </button>
            </Motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border border-[#101312]/10 bg-[#101312] p-5 text-white sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#c7f9cc]">
              Brands turn online with NexDiff
            </p>
            <p className="mt-1 text-sm text-white/60">
              Tell us your business goal and we will map the right service mix.
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center gap-2 bg-[#c7f9cc] px-5 py-3 text-sm font-semibold text-[#101312] transition hover:bg-white"
          >
            Book Free Growth Plan
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
