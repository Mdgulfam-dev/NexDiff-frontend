import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Layers3,
  MousePointerClick,
  SearchCheck,
  Sparkles,
} from "lucide-react";
import Button from "../components/Button";
import CountUp from "../components/CountUp";

const caseStudies = [
  {
    title: "Local renovation brand",
    industry: "Construction and renovation",
    timeline: "21 days",
    services: ["Website rebuild", "Lead funnel", "Local SEO", "WhatsApp flow"],
    summary:
      "A service business had word-of-mouth enquiries but no strong online trust layer. We rebuilt the website and made enquiry capture simpler.",
    before: [
      "Old single-page website with unclear services",
      "No visible project proof or enquiry path",
      "Visitors had to call without context",
    ],
    after: [
      "Service pages with trust-focused content",
      "WhatsApp and contact flows placed across pages",
      "Location, services, and project categories easier to scan",
    ],
    metrics: [
      { value: "2.4x", label: "more enquiry clicks" },
      { value: "38%", label: "lower bounce rate" },
      { value: "14", label: "days to first leads" },
    ],
    accent: "#e05f2f",
  },
  {
    title: "Retail discount store",
    industry: "Local retail",
    timeline: "30 days",
    services: ["Social content", "Offer calendar", "Google profile", "Lead capture"],
    summary:
      "The store had offers but inconsistent posting. We created a content rhythm and simple online discovery flow for repeat visibility.",
    before: [
      "Random offer posts with no calendar",
      "Low clarity around best-selling categories",
      "No simple path from post to store enquiry",
    ],
    after: [
      "Monthly content calendar for product categories",
      "Offer-led creatives and captions",
      "Google profile and WhatsApp direction improved",
    ],
    metrics: [
      { value: "3x", label: "posting consistency" },
      { value: "52%", label: "more profile actions" },
      { value: "4", label: "weekly offer themes" },
    ],
    accent: "#16837a",
  },
  {
    title: "Startup service launch",
    industry: "B2B services",
    timeline: "28 days",
    services: ["Landing page", "Messaging", "Campaign plan", "Analytics"],
    summary:
      "A new startup needed a credible launch page and a practical go-to-market plan before spending on ads.",
    before: [
      "Offer was explained differently each time",
      "No dedicated page for campaign traffic",
      "No tracking for visitor intent",
    ],
    after: [
      "Clear offer, audience, and conversion section",
      "Campaign-ready landing page",
      "Analytics events for calls, forms, and WhatsApp clicks",
    ],
    metrics: [
      { value: "1.8x", label: "better CTA clicks" },
      { value: "6", label: "tracked actions" },
      { value: "10", label: "launch assets" },
    ],
    accent: "#0891b2",
  },
];

const trustPoints = [
  "Before and after clarity",
  "Outcome-focused project scope",
  "Lead capture and tracking",
  "Practical handover after launch",
];

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <main className="page-shell">
      <section className="section-pad pb-10">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="eyebrow">Case studies</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Before and after snapshots of growth-focused work.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              Explore realistic project snapshots showing how scattered online
              presence becomes a clearer website, content system, campaign
              flow, and enquiry path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => navigate("/contact")} className="group w-full sm:w-auto">
                Discuss Your Project
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/pricing")}
                className="w-full bg-white sm:w-auto"
              >
                View Pricing
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-[#101312]/10 bg-[#101312] p-5 text-white shadow-[0_18px_48px_rgba(16,19,18,0.16)]">
            <Sparkles size={24} className="text-[#c7f9cc]" />
            <h2 className="mt-4 text-2xl font-semibold">How to read these</h2>
            <div className="mt-5 grid gap-3">
              {trustPoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#c7f9cc]" />
                  <p className="text-sm leading-6 text-white/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-8">
        <div className="container-wide space-y-8">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="light-card overflow-hidden rounded-lg"
            >
              <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-lg px-3 py-2 text-xs font-semibold text-white"
                      style={{ backgroundColor: study.accent }}
                    >
                      Project {index + 1}
                    </span>
                    <span className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-3 py-2 text-xs font-semibold text-[#101312]/58">
                      {study.timeline}
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold leading-tight">
                    {study.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-[#101312]/52">
                    {study.industry}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[#101312]/65">
                    {study.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-3 py-2 text-xs font-semibold text-[#101312]/62"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg bg-[#101312] p-4 text-white">
                        <p className="text-2xl font-semibold text-[#c7f9cc]">
                          <CountUp value={metric.value} />
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/55">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#101312]/10 bg-[#f7f3ea] p-4 lg:border-l lg:border-t-0">
                  <div className="grid h-full gap-4 xl:grid-cols-2">
                    <BeforeAfterPanel
                      title="Before"
                      tone="muted"
                      items={study.before}
                      accent={study.accent}
                    />
                    <BeforeAfterPanel
                      title="After"
                      tone="strong"
                      items={study.after}
                      accent={study.accent}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide rounded-lg bg-[#101312] p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7f9cc]">
                Your project next
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Want your own before and after story?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">
                Share your current website, social profile, or business goal.
                We will map what needs to improve first.
              </p>
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#c7f9cc] px-5 py-3 text-sm font-semibold text-[#101312] transition hover:bg-white"
            >
              Start Case Review
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const BeforeAfterPanel = ({ title, tone, items, accent }) => {
  const isStrong = tone === "strong";

  return (
    <div
      className={`min-h-full rounded-lg border p-4 ${
        isStrong
          ? "border-[#101312]/10 bg-white"
          : "border-[#101312]/10 bg-[#101312] text-white"
      }`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-current/10 pb-4">
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.16em] ${
              isStrong ? "text-[#101312]/42" : "text-white/42"
            }`}
          >
            {title}
          </p>
          <h3 className="mt-2 text-lg font-semibold">
            {isStrong ? "Clearer system" : "Scattered setup"}
          </h3>
        </div>
        <span
          className="flex h-11 w-11 items-center justify-center rounded-lg"
          style={{
            backgroundColor: isStrong ? `${accent}18` : "rgba(255,255,255,0.08)",
            color: isStrong ? accent : "#c7f9cc",
          }}
        >
          {isStrong ? <BarChart3 size={20} /> : <SearchCheck size={20} />}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            {isStrong ? (
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#16837a]" />
            ) : (
              <MousePointerClick size={18} className="mt-0.5 shrink-0 text-white/40" />
            )}
            <p className={`text-sm leading-6 ${isStrong ? "text-[#101312]/68" : "text-white/62"}`}>
              {item}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`mt-6 rounded-lg border p-4 ${
          isStrong
            ? "border-[#101312]/10 bg-[#f7f3ea]"
            : "border-white/10 bg-white/[0.04]"
        }`}
      >
        <div className="flex items-center gap-2">
          <Layers3 size={17} style={{ color: isStrong ? accent : "#c7f9cc" }} />
          <p className={`text-sm font-semibold ${isStrong ? "text-[#101312]" : "text-white"}`}>
            {isStrong ? "Connected workflow" : "Missing structure"}
          </p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((item) => (
            <span
              key={item}
              className={`h-2 rounded-full ${
                isStrong ? "bg-[#101312]/18" : "bg-white/12"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
