import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  Paperclip,
  Send,
  Sparkles,
  Users,
} from "lucide-react";
import Button from "../components/Button";
import ShareButton from "../components/ShareButton";
import { getJobPosts, sendCareerApplication } from "../api/api";

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

const formatJobDetails = (focus = "") =>
  focus
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const getJobSharePath = (job) => `/careers/${encodeURIComponent(job.jobId || job._id || job.title)}`;

const Careers = () => {
  const formRef = useRef(null);
  const jobRefs = useRef({});
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [openings, setOpenings] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [selectedJobId, setSelectedJobId] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    jobId: "",
    role: "",
    experience: "",
    portfolio: "",
    resume: null,
    acceptedTerms: false,
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getJobPosts()
      .then((response) => {
        setOpenings(response.data.jobs);
        setForm((current) => ({
          ...current,
          role: current.role || response.data.jobs[0]?.title || "",
          jobId: current.jobId || response.data.jobs[0]?.jobId || "",
        }));
      })
      .catch(() => {
        setOpenings([]);
      })
      .finally(() => {
        setJobsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (jobsLoading || openings.length === 0) return;

    const decodedJobId = jobId ? decodeURIComponent(jobId) : "";
    const matchedJob = decodedJobId
      ? openings.find(
          (job) =>
            String(job.jobId || "").toLowerCase() === decodedJobId.toLowerCase() ||
            String(job._id || "") === decodedJobId,
        )
      : null;

    if (matchedJob) {
      setSelectedJobId(matchedJob.jobId || matchedJob._id || "");
      setForm((current) => ({
        ...current,
        role: matchedJob.title,
        jobId: matchedJob.jobId || "",
      }));
      window.setTimeout(() => {
        jobRefs.current[matchedJob.jobId || matchedJob._id]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 120);
    } else if (decodedJobId) {
      setStatus("That job link is no longer available. Please choose another open role.");
    }
  }, [jobId, jobsLoading, openings]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("");
  };

  const selectJob = (job) => {
    setSelectedJobId(job.jobId || job._id || "");
    setForm((current) => ({
      ...current,
      role: job.title,
      jobId: job.jobId || "",
    }));
    setStatus("");
    navigate(getJobSharePath(job), { replace: false });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleResumeUpload = (file) => {
    if (!file) {
      updateField("resume", null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setStatus("Please upload a PDF, DOC, or DOCX resume.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setStatus("Please upload a resume smaller than 2 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      updateField("resume", {
        name: file.name,
        type: file.type,
        size: file.size,
        dataUrl: reader.result,
      });
    };
    reader.onerror = () => setStatus("Could not read the resume file. Please try again.");
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.role || !form.experience || !form.resume || !form.acceptedTerms) {
      setStatus("Please complete your name, phone, role, experience, resume, and accept the terms.");
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
        jobId: openings[0]?.jobId || "",
        role: openings[0]?.title || "",
        experience: "",
        portfolio: "",
        resume: null,
        acceptedTerms: false,
        message: "",
      });
    } catch (error) {
      setStatus(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell overflow-hidden">
      <section className="section-pad">
        <div className="container-wide grid min-w-0 gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div className="min-w-0">
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

            <div className="mt-8 grid min-w-0 gap-3 sm:grid-cols-3">
              {[
                { icon: <BriefcaseBusiness size={18} />, label: "Real projects" },
                { icon: <Users size={18} />, label: "Small team" },
                { icon: <Sparkles size={18} />, label: "Growth work" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="light-card flex min-w-0 items-center gap-3 rounded-lg p-4"
                >
                  <span className="text-[#16837a]">{item.icon}</span>
                  <span className="min-w-0 break-words text-sm font-semibold text-[#101312]/72">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#101312] p-6 text-white shadow-[0_18px_48px_rgba(16,19,18,0.16)]">
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
        <div className="container-wide min-w-0">
          <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <p className="eyebrow">Open roles</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
                Current opportunities.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#101312]/62">
              Choose an open role from the current listings and submit your
              profile with a resume.
            </p>
          </div>

          <div className="mt-8 grid min-w-0 gap-5 lg:grid-cols-3">
            {jobsLoading ? (
              <div className="col-span-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-6 text-sm font-medium text-[#101312]/60">
                Loading open roles...
              </div>
            ) : openings.length === 0 ? (
              <div className="col-span-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-6 text-sm font-medium text-[#101312]/60">
                No open roles are available right now.
              </div>
            ) : (
              openings.map((job) => {
                const details = formatJobDetails(job.focus);
                const isSelected = selectedJobId === (job.jobId || job._id || "");

                return (
                  <article
                    key={job._id || job.title}
                    ref={(element) => {
                      if (element) jobRefs.current[job.jobId || job._id] = element;
                    }}
                    className={`light-card flex min-h-full min-w-0 flex-col overflow-hidden rounded-lg p-5 transition sm:p-6 ${
                      isSelected ? "border-[#16837a] ring-2 ring-[#16837a]/20" : ""
                    }`}
                  >
                    <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
                      <div className="flex min-w-0 flex-wrap items-center gap-2">
                        <span className="break-words rounded-lg bg-[#101312] px-3 py-2 text-xs font-semibold text-white">
                          {job.jobId || "JOB"}
                        </span>
                        <span className="rounded-lg bg-[#f7f3ea] px-3 py-2 text-xs font-semibold text-[#e05f2f]">
                          {job.type}
                        </span>
                      </div>
                      <ShareButton
                        title={job.title}
                        text={`NexDiff is hiring: ${job.title}`}
                        url={getJobSharePath(job)}
                        className="shrink-0"
                      />
                    </div>

                    <Link to={getJobSharePath(job)} className="mt-5 block">
                      <h3 className="break-words text-xl font-semibold leading-snug text-[#101312] hover:text-[#16837a]">
                        {job.title}
                      </h3>
                    </Link>

                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-3 py-2 text-sm font-medium text-[#101312]/62">
                      <MapPin size={16} className="shrink-0 text-[#16837a]" />
                      <span className="min-w-0 break-words">{job.location}</span>
                    </div>

                    <div className="mt-5 min-w-0 flex-1 rounded-lg border border-[#101312]/10 bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#101312]/42">
                        Role details
                      </p>
                      {details.length > 1 ? (
                        <ul className="mt-3 space-y-2">
                          {details.map((line) => (
                            <li key={line} className="flex min-w-0 gap-2 text-sm leading-6 text-[#101312]/68">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16837a]" />
                              <span className="min-w-0 break-words">{line.replace(/^[-•]\s*/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-3 break-words text-sm leading-7 text-[#101312]/68">
                          {job.focus}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => selectJob(job)}
                      className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#101312] bg-[#101312] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#202522]"
                    >
                      Apply
                      <ArrowUpRight size={16} />
                    </button>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid min-w-0 gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="min-w-0">
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
                  <div className="min-w-0 border-b border-[#101312]/10 pb-4">
                    <p className="break-words font-semibold">{item}</p>
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

          <form ref={formRef} onSubmit={handleSubmit} className="light-card min-w-0 rounded-lg p-5 sm:p-7">
            <div className="flex min-w-0 items-center gap-3">
              <Send size={22} className="shrink-0 text-[#16837a]" />
              <h2 className="text-2xl font-semibold">Apply now</h2>
            </div>

            {status && (
              <div className="mt-5 break-words rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
                {status}
              </div>
            )}

            <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Job ID"
                value={form.jobId}
                readOnly
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 text-[#101312]/60 outline-none"
              />
              <input
                type="text"
                placeholder="Your name *"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
              <input
                type="tel"
                placeholder="Phone number *"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
              <select
                value={form.role}
                onChange={(event) => {
                  const selectedJob = openings.find((job) => job.title === event.target.value);
                  setForm((current) => ({
                    ...current,
                    role: event.target.value,
                    jobId: selectedJob?.jobId || "",
                  }));
                  setStatus("");
                }}
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              >
                <option value="">Select role *</option>
                {openings.map((job) => (
                  <option key={job._id || job.jobId || job.title} value={job.title}>
                    {job.jobId ? `${job.jobId} - ${job.title}` : job.title}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Experience / current status *"
              value={form.experience}
              onChange={(event) => updateField("experience", event.target.value)}
              className="mt-4 w-full min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
            />

            <input
              type="url"
              placeholder="Portfolio, LinkedIn, GitHub, or work sample link"
              value={form.portfolio}
              onChange={(event) => updateField("portfolio", event.target.value)}
              className="mt-4 w-full min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
            />

            <label className="mt-4 flex min-w-0 cursor-pointer flex-col rounded-lg border border-dashed border-[#101312]/20 bg-[#f7f3ea] px-4 py-5 transition hover:border-[#101312]/40">
              <span className="inline-flex min-w-0 items-center gap-2 text-sm font-semibold text-[#101312]">
                <Paperclip size={17} className="shrink-0" />
                <span className="min-w-0 break-all">
                  {form.resume ? form.resume.name : "Upload resume *"}
                </span>
              </span>
              <span className="mt-1 text-xs text-[#101312]/52">PDF, DOC, or DOCX up to 2 MB</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={(event) => handleResumeUpload(event.target.files?.[0])}
                className="sr-only"
              />
            </label>

            <textarea
              rows="5"
              placeholder="Tell us why you want to work with NexDiff"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="mt-4 w-full min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
            />

            <label className="mt-4 flex min-w-0 items-start gap-3 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-4">
              <input
                type="checkbox"
                checked={form.acceptedTerms}
                onChange={(event) => updateField("acceptedTerms", event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#101312]"
              />
              <span className="text-sm leading-6 text-[#101312]/68">
                I have read and agree to the{" "}
                <Link to="/terms" className="font-semibold text-[#e05f2f] underline underline-offset-4">
                  Terms & Conditions
                </Link>
                .
              </span>
            </label>

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
