import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Gauge,
  Sparkles,
  Trophy,
} from "lucide-react";
import services from "../data/services";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <main className="page-shell section-pad">
        <div className="container-wide">
          <p className="text-[#101312]/60">Service not found.</p>
          <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#e05f2f]">
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const related = services.filter((item) => item.id !== service.id);
  const normalizedFeatures = service.features.map((feature) =>
    typeof feature === "string" ? { title: feature } : feature,
  );

  return (
    <main className="page-shell">
      <section className="section-pad">
        <div className="container-wide">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e05f2f]"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
            <div>
              <p className="eyebrow">{service.highlight}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                {service.title}
              </h1>
              {service.tagline && (
                <p className="mt-3 text-xl font-semibold text-[#16837a]">
                  {service.tagline}
                </p>
              )}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
                {service.desc}
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#101312] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="light-card rounded-lg p-6">
              <h2 className="text-xl font-semibold">Key Features</h2>
              <div className="mt-5 space-y-4">
                {normalizedFeatures.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#16837a]" />
                    <div>
                      <p className="text-sm font-semibold leading-6 text-[#101312]">
                        {item.title}
                      </p>
                      {item.desc && (
                        <p className="mt-1 text-sm leading-6 text-[#101312]/62">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-[#101312] p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62">
              {service.details}
            </p>
          </div>

          {service.whyChoose && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {service.whyChoose.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#101312]/10 bg-white p-4"
                >
                  <CheckCircle2 size={18} className="text-[#16837a]" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#101312]/72">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          )}

          {service.technologies && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold">Technologies We Use</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.technologies.map((item) => (
                  <div key={item.name} className="light-card rounded-lg p-5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <span className="text-sm font-semibold text-[#16837a]">
                        {item.score}%
                      </span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-[#101312]/10">
                      <div
                        className="h-full rounded-full bg-[#16837a]"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.process && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold">Our Process</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.process.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-[#101312]/10 bg-white p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#101312] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#101312]/62">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.benefits && (
            <div className="mt-12 rounded-lg bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Gauge size={22} className="text-[#16837a]" />
                <h2 className="text-2xl font-semibold">Key Benefits</h2>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Sparkles size={18} className="mt-0.5 shrink-0 text-[#e05f2f]" />
                    <p className="text-sm leading-6 text-[#101312]/68">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.successStories && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold">Success Stories</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {service.successStories.map((item) => (
                  <div key={item.title} className="light-card rounded-lg p-5">
                    <Trophy size={21} className="text-[#e05f2f]" />
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#101312]/62">
                      {item.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold">Explore More Services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/service/${item.id}`}
                className="light-card rounded-lg p-5 transition hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05f2f]">
                  {item.highlight}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#101312]/62">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;
