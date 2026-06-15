import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, CheckCircle2, MapPin } from "lucide-react";
import ShareButton from "../components/ShareButton";
import { getJobPosts } from "../api/api";

const formatJobDetails = (focus = "") =>
  focus
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const getJobPath = (job) => `/careers/${encodeURIComponent(job.jobId || job._id || job.title)}`;

const findJobByParam = (jobs, jobId) => {
  const decodedJobId = decodeURIComponent(jobId || "").toLowerCase();

  return jobs.find(
    (job) =>
      String(job.jobId || "").toLowerCase() === decodedJobId ||
      String(job._id || "").toLowerCase() === decodedJobId,
  );
};

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getJobPosts()
      .then((response) => {
        const jobs = response.data.jobs || [];
        const matchedJob = findJobByParam(jobs, jobId);

        setJob(matchedJob || null);
        setRelatedJobs(
          jobs.filter((item) => String(item.jobId || item._id) !== String(matchedJob?.jobId || matchedJob?._id)),
        );
      })
      .catch(() => {
        setJob(null);
        setRelatedJobs([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return (
      <main className="page-shell section-pad">
        <div className="container-wide">
          <p className="text-[#101312]/60">Loading job details...</p>
        </div>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="page-shell section-pad">
        <div className="container-wide">
          <p className="text-[#101312]/60">Job opening not found.</p>
          <Link to="/careers" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e05f2f]">
            <ArrowLeft size={16} /> Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  const details = formatJobDetails(job.focus);
  const applyPath = `/careers?apply=${encodeURIComponent(job.jobId || job._id || job.title)}`;

  return (
    <main className="page-shell">
      <section className="section-pad pb-10">
        <div className="container-wide">
          <Link to="/careers" className="inline-flex items-center gap-2 text-sm font-semibold text-[#e05f2f]">
            <ArrowLeft size={16} /> Back to Careers
          </Link>

          <div className="mt-8 grid min-w-0 gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-end">
            <div className="min-w-0">
              <p className="eyebrow">{job.jobId || "Open role"}</p>
              <h1 className="mt-4 max-w-4xl break-words text-4xl font-semibold leading-tight sm:text-6xl">
                {job.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[#101312]/68">
                  <BriefcaseBusiness size={16} className="text-[#e05f2f]" />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[#101312]/68">
                  <MapPin size={16} className="text-[#16837a]" />
                  {job.location}
                </span>
              </div>
            </div>

            <div className="light-card rounded-lg p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#101312]/42">
                Job actions
              </p>
              <Link
                to={applyPath}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#101312] bg-[#101312] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#202522]"
              >
                Apply for this role
                <ArrowUpRight size={16} />
              </Link>
              <ShareButton
                title={job.title}
                text={`NexDiff is hiring: ${job.title}`}
                url={getJobPath(job)}
                className="mt-3 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.28fr_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-lg border border-[#101312]/10 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05f2f]">
                Role snapshot
              </p>
              <p className="mt-3 text-sm leading-7 text-[#101312]/62">
                Review the full role details, then apply with your resume and
                practical work links.
              </p>
            </div>
          </aside>

          <article className="rounded-lg border border-[#101312]/10 bg-white px-5 py-7 shadow-[0_18px_48px_rgba(16,19,18,0.08)] sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold text-[#101312]">Complete job details</h2>
            {details.length > 1 ? (
              <ul className="mt-6 space-y-4">
                {details.map((line) => (
                  <li key={line} className="flex min-w-0 gap-3 text-base leading-8 text-[#101312]/70">
                    <CheckCircle2 size={18} className="mt-1.5 shrink-0 text-[#16837a]" />
                    <span className="min-w-0 break-words">{line.replace(/^[-•]\s*/, "")}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 break-words text-base leading-8 text-[#101312]/70">
                {job.focus}
              </p>
            )}
          </article>
        </div>
      </section>

      {relatedJobs.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-wide">
            <h2 className="text-2xl font-semibold">More Open Roles</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relatedJobs.slice(0, 3).map((item) => (
                <Link
                  key={item._id || item.jobId || item.title}
                  to={getJobPath(item)}
                  className="light-card rounded-lg p-5 transition hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05f2f]">
                    {item.jobId || "Open role"}
                  </p>
                  <h3 className="mt-3 break-words text-lg font-semibold">{item.title}</h3>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#16837a]">
                    View details <ArrowUpRight size={15} />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default JobDetails;
