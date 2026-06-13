import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "What services does NexDiff provide?",
    answer:
      "NexDiff helps with business websites, custom software, social media systems, digital marketing, lead generation, automation, and growth-focused product improvements.",
  },
  {
    question: "Can I start with only one service?",
    answer:
      "Yes. You can begin with a single need like a website, social media analysis, content calendar, or lead funnel. We can expand the system later when your business is ready.",
  },
  {
    question: "How do you decide what my business needs first?",
    answer:
      "We start with your business goal, audience, current online presence, budget, timeline, and biggest bottleneck. Then we suggest the most practical first step instead of pushing every service at once.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. Most of our workflow is built for founders, local businesses, and growing brands that need clear execution without a large internal tech or marketing team.",
  },
  {
    question: "How long does a website or product build take?",
    answer:
      "Simple websites or landing pages can usually start moving within 7-14 days. Custom software, dashboards, automations, and larger growth systems are scoped after understanding the requirements.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can help with updates, tracking, content improvements, campaign changes, bug fixes, and ongoing optimization after the first launch.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-pad bg-white text-[#101312]">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              Clear answers before you start building.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              These are the questions most businesses ask before working with
              NexDiff on software, marketing, content, or lead generation.
            </p>

            <div className="mt-7 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-[#e05f2f]">
                  <MessageCircleQuestion size={20} />
                </span>
                <div>
                  <h3 className="text-base font-semibold">Still unsure?</h3>
                  <p className="mt-2 text-sm leading-6 text-[#101312]/62">
                    Share your goal and we will guide you toward the right
                    service, scope, and next step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <article
                  key={faq.question}
                  className="light-card overflow-hidden rounded-lg"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="flex items-start gap-3">
                      <HelpCircle
                        size={19}
                        className="mt-0.5 shrink-0 text-[#16837a]"
                      />
                      <span className="text-base font-semibold leading-6">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#101312]/45 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#101312]/10 px-5 pb-5 pt-4">
                      <p className="text-sm leading-7 text-[#101312]/65">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
