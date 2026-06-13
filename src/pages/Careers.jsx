import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import Button from "../components/Button";
import { sendCareerApplication } from "../api/api";

const openings = [
  {
    title: "Frontend Developer Intern",
    type: "Internship",
    location: "Remote / Delhi NCR",
    focus: "React, responsive UI, landing pages, dashboards",
  },
  {
    title: "Social Media Growth Intern",
    type: "Internship",
    location: "Remote",
    focus: "Content planning, captions, trends, account audits",
  },
  {
    title: "Digital Marketing Associate",
    type: "Part-time / Project",
    location: "Remote",
    focus: "Campaign planning, lead generation, reporting",
  },
];

const benefits = [
  "Work on real business websites, funnels, and growth systems",
  "Learn product thinking, client communication, and execution",
  "Flexible remote-friendly collaboration",
  "Portfolio-worthy projects with practical ownership",
];

const process = [
  "Submit your profile",
  "Short skill and interest review",
  "Practical task or discussion",
  "Offer, onboarding, and project allocation",
];

const Careers = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: openings[0].title,
    experience: "",
    portfolio: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.role || !form.experience) {
      setStatus("Please complete your name, phone, role, and experience.");
      return;
    }

    try {
      setLoading(true);
      await sendCareerApplication(form);
      setStatus("Application submitted. Our team will review it from the admin dashboard.");
      setForm({
        name: "",
        phone: "",
        email: "",
        role: openings[0].title,
        experience: "",
        portfolio: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="eyebrow">Careers</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
              Build practical digital products with Nex
              <span
                style={{
                  fontFeatureSettings: '"liga" 0',
                  fontVariantLigatures: "none",
                  letterSpacing: "0.035em",
                }}
              >
                Diff
              </span>
              .
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              Join a small execution-driven team working across websites,
              software, content systems, marketing campaigns, and lead
              generation for growing businesses.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { icon: <BriefcaseBusiness size={18} />, label: "Real projects" },
                { icon: <Users size={18} />, label: "Small team" },
                { icon: <Sparkles size={18} />, label: "Growth work" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="light-card flex items-center gap-3 rounded-lg p-4"
                >
                  <span className="text-[#16837a]">{item.icon}</span>
                  <span className="text-sm font-semibold text-[#101312]/72">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#101312]/10 bg-[#101312] p-6 text-white shadow-[0_18px_48px_rgba(16,19,18,0.16)]">
            <GraduationCap size={26} className="text-[#c7f9cc]" />
            <h2 className="mt-5 text-2xl font-semibold">Who should apply?</h2>
            <p className="mt-3 text-sm leading-7 text-white/62">
              Students, freshers, freelancers, and early-career professionals
              who can learn fast, communicate clearly, and care about useful
              business outcomes.
            </p>
            <div className="mt-6 space-y-3">
              {benefits.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#c7f9cc]" />
                  <p className="text-sm leading-6 text-white/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Open roles</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
                Current opportunities.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#101312]/62">
              These roles are flexible starting points. If your skill fits
              NexDiff work, apply even if your exact title is not listed.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {openings.map((job) => (
              <article key={job.title} className="light-card rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-lg bg-[#f7f3ea] px-3 py-2 text-xs font-semibold text-[#e05f2f]">
                    {job.type}
                  </span>
                  <BriefcaseBusiness size={20} className="text-[#16837a]" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{job.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#101312]/58">
                  <MapPin size={16} />
                  {job.location}
                </div>
                <p className="mt-4 text-sm leading-7 text-[#101312]/65">{job.focus}</p>
                <button
                  type="button"
                  onClick={() => updateField("role", job.title)}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#101312] bg-[#101312] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#202522]"
                >
                  Select Role
                  <ArrowUpRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">Hiring process</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              Simple, practical, and focused on ability.
            </h2>
            <div className="mt-8 space-y-4">
              {process.map((item, index) => (
                <div key={item} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#101312] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="border-b border-[#101312]/10 pb-4">
                    <p className="font-semibold">{item}</p>
                    <p className="mt-1 text-sm text-[#101312]/55">
                      {index === 0
                        ? "Share your details, links, and preferred role."
                        : "We keep the next step clear and role-specific."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="light-card rounded-lg p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <Send size={22} className="text-[#16837a]" />
              <h2 className="text-2xl font-semibold">Apply now</h2>
            </div>

            {status && (
              <div className="mt-5 rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
                {status}
              </div>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name *"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
              <input
                type="tel"
                placeholder="Phone number *"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
              <select
                value={form.role}
                onChange={(event) => updateField("role", event.target.value)}
                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              >
                {openings.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Experience / current status *"
              value={form.experience}
              onChange={(event) => updateField("experience", event.target.value)}
              className="mt-4 w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
            />

            <input
              type="url"
              placeholder="Portfolio, LinkedIn, GitHub, or work sample link"
              value={form.portfolio}
              onChange={(event) => updateField("portfolio", event.target.value)}
              className="mt-4 w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
            />

            <textarea
              rows="5"
              placeholder="Tell us why you want to work with NexDiff"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="mt-4 w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
            />

            <Button type="submit" className="mt-6 w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
              <Clock3 size={17} />
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Careers;
