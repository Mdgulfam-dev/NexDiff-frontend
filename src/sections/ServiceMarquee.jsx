const marqueeItems = [
  "Web Development",
  "App Development",
  "SEO Optimization",
  "Digital Marketing",
  "UI/UX Design",
  "Ecommerce Solution",
  "Analytics",
  "Social Media",
  "Brand Strategy",
  "Performance Marketing",
];

const ServiceMarquee = () => {
  const loopItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="overflow-hidden border-y border-[#101312]/10 bg-[#f7f3ea] py-4">
      <div className="flex w-max animate-[marquee-left_28s_linear_infinite] gap-3 hover:[animation-play-state:paused]">
        {loopItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex min-h-11 shrink-0 items-center rounded-lg border border-[#101312]/10 bg-white px-5 py-2 text-sm font-semibold text-[#101312]/72 shadow-[0_10px_28px_rgba(16,19,18,0.06)]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ServiceMarquee;
