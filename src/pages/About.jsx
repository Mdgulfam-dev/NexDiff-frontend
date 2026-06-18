import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  UserRound,
  UsersRound,
} from "lucide-react";
import Button from "../components/Button";
import CountUp from "../components/CountUp";

const team = [
  { name: "Md Gulfam", role: "Founder & CEO" },
  { name: "Frontend Team", role: "Product UI" },
  { name: "Backend Team", role: "Systems" },
  { name: "Growth Team", role: "Marketing" },
];

const capabilities = [
  "Website development",
  "Application development",
  "SEO and digital marketing",
  "Lead generation",
  "Server management",
  "Business automation",
];

const industries = [
  "Healthcare",
  "Real estate",
  "Education",
  "E-commerce",
  "Hospitality",
  "Construction",
  "Professional services",
  "Manufacturing",
  "Finance",
  "Travel",
  "Local service businesses",
];

const brands = [
  {
    name: "NexDiff",
    desc: "Software, AI, and growth systems for modern businesses.",
    link: "https://nexdiff.in",
  },
  {
    name: "Renovax",
    desc: "Construction, renovation, and infrastructure solutions.",
    link: "https://mdrabbancontractor.in",
  },
  {
    name: "SK Discount Bazaar",
    desc: "Retail and discount platform for everyday products.",
    link: "https://share.google/Wraq3eo2M4aLrqIqM",
  },
];

const faqs = [
  {
    question: "What is NexDiff?",
    answer:
      "NexDiff is a technology-driven digital growth company headquartered in New Delhi, India. We help businesses build online presence, generate qualified leads, and grow through technology and digital marketing solutions.",
  },
  {
    question: "What services does NexDiff provide?",
    answer:
      "NexDiff provides website development, application development, SEO, digital marketing, lead generation, server management, and business automation services.",
  },
  {
    question: "Where is NexDiff located?",
    answer:
      "NexDiff is headquartered in New Delhi, India, and works with businesses across different locations through digital-first collaboration.",
  },
  {
    question: "Who is the founder of NexDiff?",
    answer:
      "NexDiff was founded in 2026 by Md Gulfam, who serves as the Founder and CEO of the company.",
  },
  {
    question: "Which industries does NexDiff serve?",
    answer:
      "NexDiff serves healthcare, real estate, education, e-commerce, hospitality, construction, professional services, manufacturing, finance, travel, and local service businesses.",
  },
  {
    question: "Does NexDiff work with international clients?",
    answer:
      "Yes. NexDiff works with clients in India and can support international businesses that need technology, marketing, lead generation, or automation support.",
  },
  {
    question: "How can businesses contact NexDiff?",
    answer:
      "Businesses can contact NexDiff through the contact page to share their goals, requirements, and project details. The team will review the request and guide the next steps.",
  },
];

const About = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(0);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="page-shell">
      <Helmet>
        <title>About NexDiff | Digital Growth Company in New Delhi</title>
        <meta
          name="description"
          content="NexDiff is a technology-driven digital growth company in New Delhi, founded by Md Gulfam, helping businesses grow with development, SEO, marketing, leads, and automation."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <p className="eyebrow">About NexDiff</p>
              <Motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl"
              >
                Helping businesses grow through technology, marketing, and innovation.
              </Motion.h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
                NexDiff is a technology-driven digital growth company
                headquartered in New Delhi, India, founded in 2026 by Md
                Gulfam. We help startups, small businesses, and growing
                enterprises build a strong online presence, generate qualified
                leads, and achieve sustainable business growth.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => navigate("/contact")}>
                  Work With Us
                  <ArrowUpRight size={16} />
                </Button>
                <Button variant="outline" onClick={() => navigate("/services")}>
                  View Services
                </Button>
              </div>
            </div>

            <div className="light-card rounded-lg p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05f2f]">
                  Growth partner
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Built around business outcomes</h2>
                <p className="mt-3 text-sm leading-7 text-[#101312]/65">
                  We provide a complete growth ecosystem that combines
                  development, SEO, digital marketing, lead generation, server
                  management, and automation under one roof.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "10+", label: "Service Areas" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-[#101312]/10 bg-[#101312] p-6 text-white">
                <p className="text-4xl font-semibold text-[#c7f9cc]">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-2 text-sm text-white/58">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              A complete digital growth ecosystem under one roof.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-[#101312]/68 sm:text-base">
            <p>
              At NexDiff, we believe that business growth requires more than
              just a website or marketing campaign. That is why we combine
              strategy, technology, marketing, and automation into solutions
              designed for measurable business results.
            </p>
            <p>
              Our team works closely with clients to understand their goals,
              challenges, and opportunities, enabling us to create customized
              solutions that improve visibility, increase customer acquisition,
              and streamline operations through technology.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f7f3ea]">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Solutions across build, visibility, leads, infrastructure, and automation.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="light-card flex gap-3 rounded-lg p-4">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#16837a]" />
                  <p className="text-sm font-medium text-[#101312]/75">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <p className="eyebrow">Industries</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-lg border border-[#101312]/10 bg-white px-4 py-2 text-sm font-medium text-[#101312]/70"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
                className="light-card rounded-lg p-6 transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{brand.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#101312]/62">{brand.desc}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e05f2f]">
                  Visit Website <ArrowUpRight size={15} />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#101312] text-white">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7f9cc]">
                Founder
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Md Gulfam, Founder and CEO of NexDiff.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/58 sm:text-base">
                With a passion for technology, business growth, and digital
                innovation, Md Gulfam established NexDiff to help businesses
                leverage modern technology and marketing strategies to scale
                efficiently.
              </p>
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="dark-card rounded-lg p-6"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-[#c7f9cc]/20 bg-[#c7f9cc]/10 text-[#c7f9cc]">
                <UserRound size={28} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">Practical growth leadership</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Under his leadership, NexDiff focuses on delivering practical
                solutions that combine software development, digital marketing,
                lead generation, and business automation to help organizations
                achieve measurable growth and long-term success.
              </p>
            </Motion.div>
          </div>

          <div className="mt-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7f9cc]">
                Team
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Small, focused, and execution-driven.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Motion.div
                key={member.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                className="dark-card rounded-lg p-5"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-[#c7f9cc]/20 bg-[#c7f9cc]/10 text-[#c7f9cc]">
                  <UsersRound size={28} />
                </div>
                <h3 className="mt-5 font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-white/50">{member.role}</p>
              </Motion.div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Helping businesses grow through technology, marketing, and
                innovation.
              </p>
            </div>
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                To become a trusted global growth partner that empowers
                thousands of businesses worldwide through innovative digital
                solutions and sustainable growth strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white text-[#101312]">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
                Frequently asked questions about NexDiff.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/65 sm:text-base">
                Quick answers for businesses exploring NexDiff as a technology,
                marketing, and growth partner.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <article
                    key={faq.question}
                    className="light-card overflow-hidden rounded-lg"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : index)}
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
    </main>
  );
};

export default About;
