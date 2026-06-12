import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import CountUp from "../components/CountUp";
import profile from "../assets/profile.jpg";

const team = [
  { name: "Md Gulfam", role: "Founder & CEO", image: profile },
  { name: "Frontend Team", role: "Product UI", image: "https://i.pravatar.cc/100?img=11" },
  { name: "Backend Team", role: "Systems", image: "https://i.pravatar.cc/100?img=12" },
  { name: "Growth Team", role: "Marketing", image: "https://i.pravatar.cc/100?img=13" },
];

const capabilities = [
  "Business websites and landing pages",
  "Custom web apps and dashboards",
  "Social media content systems",
  "Paid campaign and funnel planning",
  "AI integrations and automation",
  "Ongoing support and optimization",
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

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="page-shell">
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
                We build practical digital systems for businesses that want to grow online.
              </Motion.h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
                NexDiff is a growth-focused technology partner. We combine
                software development, social presence, digital marketing, and
                lead generation into one connected operating system for brands.
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
                  We plan, build, launch, and improve digital systems that help
                  businesses look credible online, capture enquiries, and manage
                  growth with less scattered effort.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "4", label: "Core Services" },
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
              Technology should make business simpler, not noisier.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-[#101312]/68 sm:text-base">
            <p>
              NexDiff started with a simple observation: many businesses have
              strong ideas, but their online systems are fragmented. A website,
              a few posts, and a campaign do not automatically create growth.
            </p>
            <p>
              We help connect those pieces. The result is a digital presence
              that is credible, fast, measurable, and easier for teams to run.
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
                Capability across build, presence, reach, and leads.
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
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7f9cc]">
                Team
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Small, focused, and execution-driven.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/58">
              We bring product, engineering, design, and growth thinking into a
              compact team built for practical results.
            </p>
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <h3 className="mt-5 font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-white/50">{member.role}</p>
              </Motion.div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Empower businesses with technology and growth systems that
                improve visibility, efficiency, and revenue.
              </p>
            </div>
            <div className="dark-card rounded-lg p-6">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">
                Become a trusted digital partner for future-ready brands that
                want scalable online operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
