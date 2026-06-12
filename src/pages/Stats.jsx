import CountUp from "../components/CountUp";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "10+", label: "Team Members" },
  { value: "2+", label: "Years Experience" },
];

const Stats = () => {
  return (
    <main className="page-shell">
      <section className="section-pad">
        <div className="container-wide">
          <p className="eyebrow">Stats</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            Measurable work for modern businesses.
          </h1>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-[#101312] p-6 text-white">
                <p className="text-4xl font-semibold text-[#c7f9cc]">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-3 text-sm text-white/58">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stats;
