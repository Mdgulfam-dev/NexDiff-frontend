import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HelpCircle,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import Button from "../components/Button";

const plans = [
  {
    name: "Launch",
    price: "Rs 10k+",
    description:
      "For new brands that need a clean online presence and a practical start.",
    timeline: "7-14 days",
    popular: false,
    features: [
      "Website or landing page setup",
      "Basic social profile polish",
      "Contact and WhatsApp enquiry flow",
      "Launch checklist and guidance",
    ],
  },
  {
    name: "Growth",
    price: "Rs 25k+",
    description:
      "For businesses ready to connect content, campaigns, and enquiries.",
    timeline: "2-4 weeks",
    popular: true,
    features: [
      "Website improvements or custom pages",
      "Social media content system",
      "Campaign and lead funnel setup",
      "Weekly reporting and optimizations",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    description:
      "For teams that need software, automation, marketing, and deeper growth support.",
    timeline: "Scoped plan",
    popular: false,
    features: [
      "Custom software or dashboard build",
      "Advanced marketing and lead operations",
      "CRM, automation, and integrations",
      "Dedicated roadmap and support rhythm",
    ],
  },
];

const addOns = [
  "Brand strategy sprint",
  "Meta and Google ads setup",
  "Monthly social media management",
  "Lead generation campaigns",
  "Custom software modules",
  "Analytics and tracking setup",
];

const analysisPlans = [
  {
    name: "Free Social Media Analysis",
    price: "Free",
    note: "One-time",
    icon: <SearchCheck size={21} />,
    description:
      "Users answer a few questions so NexDiff can review the account and share practical improvement points.",
    features: [
      "Account start date, niche, platform, content type, and goals review",
      "What is working and where the account has friction",
      "Suggested improvements and actionable recommendations",
    ],
  },
  {
    name: "Premium Social Media Analysis",
    price: "Rs 499 / Rs 799",
    note: "1-month or 2-month calendar",
    icon: <CalendarDays size={21} />,
    description:
      "Includes everything from the free analysis plus a ready content calendar for consistent posting.",
    features: [
      "Complete social media analysis",
      "1-month content calendar for Rs 499",
      "2-month content calendar option for Rs 799",
    ],
  },
  {
    name: "Marketing Strategy for Startups",
    price: "Rs 999",
    note: "Startup roadmap",
    icon: <Target size={21} />,
    description:
      "A startup-focused marketing strategy built around the right platforms, channels, and growth path.",
    features: [
      "Suitable online platforms for your niche",
      "Online and offline marketing strategy",
      "Influencer marketing strategy and growth roadmap",
    ],
  },
];

const faqs = [
  {
    question: "Can I start with one service?",
    answer:
      "Yes. We can begin with the most urgent service, then expand once the first system is live.",
  },
  {
    question: "Are ad spends included?",
    answer:
      "No. Plan pricing covers NexDiff work. Any ad spend, hosting, tools, or third-party costs are billed separately.",
  },
  {
    question: "Do you create custom packages?",
    answer:
      "Yes. If your business needs a different mix, we scope a custom plan after a short consultation.",
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <main className="page-shell">
      <section className="section-pad pb-10">
        <div className="container-wide grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="eyebrow">Pricing</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Clear starting points for serious online growth.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              Choose a plan based on where your business is today. Every project
              starts with a short consultation so the final scope matches your
              goals, timeline, and budget.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => navigate("/contact")} className="group w-full sm:w-auto">
                Get Custom Quote
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/services")}
                className="w-full bg-white sm:w-auto"
              >
                Compare Services
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-[#101312]/10 bg-[#101312] p-5 text-white shadow-[0_18px_48px_rgba(16,19,18,0.16)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#c7f9cc] text-[#101312]">
                <Sparkles size={20} />
              </span>
              <div>
                <h2 className="text-lg font-semibold">Free consultation</h2>
                <p className="text-sm text-white/58">Get the right package before you pay.</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/68">
              {["Business goal audit", "Recommended service mix", "Budget and timeline clarity"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#c7f9cc]" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-8">
        <div className="container-wide grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-lg border p-6 shadow-[0_18px_48px_rgba(16,19,18,0.08)] ${
                plan.popular
                  ? "border-[#101312] bg-[#101312] text-white"
                  : "border-[#101312]/10 bg-white text-[#101312]"
              }`}
            >
              {plan.popular && (
                <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-[#c7f9cc] px-3 py-2 text-xs font-semibold text-[#101312]">
                  <BadgeCheck size={15} />
                  Most requested
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold">{plan.name}</h2>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      plan.popular ? "text-white/62" : "text-[#101312]/62"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-4xl font-semibold">{plan.price}</p>
                <div
                  className={`mt-3 flex items-center gap-2 text-sm ${
                    plan.popular ? "text-white/58" : "text-[#101312]/55"
                  }`}
                >
                  <Clock3 size={16} />
                  {plan.timeline}
                </div>
              </div>

              <div
                className={`mt-7 space-y-3 border-t pt-6 ${
                  plan.popular ? "border-white/12" : "border-[#101312]/10"
                }`}
              >
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        plan.popular ? "text-[#c7f9cc]" : "text-[#16837a]"
                      }`}
                    />
                    <p
                      className={`text-sm leading-6 ${
                        plan.popular ? "text-white/72" : "text-[#101312]/68"
                      }`}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.popular ? "light" : "primary"}
                onClick={() => navigate("/contact")}
                className="mt-8 w-full"
              >
                Choose {plan.name}
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Social analysis</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Quick audits and strategy plans for sharper content decisions.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#101312]/62">
              Start with a focused review, then upgrade into calendars or a
              startup-ready marketing roadmap when you need more structure.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {analysisPlans.map((plan) => (
              <article key={plan.name} className="light-card rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f7f3ea] text-[#e05f2f]">
                    {plan.icon}
                  </span>
                  <span className="rounded-lg border border-[#101312]/10 px-3 py-2 text-xs font-semibold text-[#101312]/62">
                    {plan.note}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold">{plan.name}</h3>
                <p className="mt-3 text-3xl font-semibold">{plan.price}</p>
                <p className="mt-3 text-sm leading-7 text-[#101312]/62">
                  {plan.description}
                </p>

                <div className="mt-6 space-y-3 border-t border-[#101312]/10 pt-5">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#16837a]" />
                      <p className="text-sm leading-6 text-[#101312]/68">{feature}</p>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => navigate("/contact")}
                  variant="outline"
                  className="mt-7 w-full bg-[#f7f3ea]"
                >
                  Request This Plan
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Add-ons</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              Build only what your next stage needs.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#101312]/62">
              Packages can be expanded with focused add-ons when your growth
              plan needs more depth in a specific area.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {addOns.map((item) => (
              <div
                key={item}
                className="flex min-h-16 items-center gap-3 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3"
              >
                <CheckCircle2 size={18} className="shrink-0 text-[#16837a]" />
                <span className="text-sm font-semibold text-[#101312]/72">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid gap-5 lg:grid-cols-3">
          {faqs.map((item) => (
            <article key={item.question} className="light-card rounded-lg p-5">
              <HelpCircle size={20} className="text-[#e05f2f]" />
              <h2 className="mt-4 text-lg font-semibold">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-[#101312]/62">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
