import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#101312]/65 sm:text-base">
                {service.desc}
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#101312] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Get Strategy
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="light-card rounded-lg p-6">
              <h2 className="text-xl font-semibold">Key Features</h2>
              <div className="mt-5 space-y-4">
                {service.features.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#16837a]" />
                    <p className="text-sm leading-6 text-[#101312]/68">{item}</p>
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
