import { useNavigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Services from "../sections/Services";

const process = [
  "Audit your current online presence",
  "Choose the best service mix for your goal",
  "Launch the build, content, campaign, or funnel",
  "Track enquiries and improve the system",
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <main className="page-shell">
      <section className="section-pad pb-10">
        <div className="container-wide grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Software, content, campaigns, and leads under one roof.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              NexDiff helps brands move from scattered digital activity to one
              connected growth system that looks credible, works fast, and
              turns interest into enquiries.
            </p>
          </div>

          <div className="light-card rounded-lg p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#101312]/55">
              How we work
            </h2>
            <div className="mt-5 space-y-4">
              {process.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#16837a]" />
                  <p className="text-sm leading-6 text-[#101312]/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="section-pad bg-[#f7f3ea] pt-0">
        <div className="container-wide rounded-lg bg-[#101312] p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ready to grow your business?</h2>
              <p className="mt-2 text-sm text-white/58">
                Book a free consultation and we will map the fastest path.
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#c7f9cc] px-5 py-3 text-sm font-semibold text-[#101312] transition hover:bg-white"
            >
              Book Free Consultation
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
