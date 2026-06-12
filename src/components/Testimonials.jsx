import { motion as Motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Startup Founder",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1",
    feedback:
      "NexDiff helped us build a high-performance website that boosted our business growth significantly.",
  },
  {
    name: "Priya Verma",
    role: "Business Owner",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=5",
    feedback:
      "Professional team with strong technical skills. They understood what we needed and delivered quickly.",
  },
  {
    name: "Rahul Mehta",
    role: "Entrepreneur",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=3",
    feedback:
      "The UI, performance, and launch support were excellent. It felt like working with a focused product team.",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section className="section-pad bg-[#f7f3ea] text-[#101312]">
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Client voice</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Trusted by growing businesses.
            </h2>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#101312] bg-[#101312] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 md:self-auto"
          >
            Start Your Project
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="light-card rounded-lg p-6"
            >
              <div className="flex gap-1 text-[#e05f2f]">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} size={17} fill="currentColor" />
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-[#101312]/68">
                "{testimonial.feedback}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-11 w-11 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                  <p className="text-xs text-[#101312]/50">{testimonial.role}</p>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
