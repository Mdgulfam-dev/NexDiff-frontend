import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Send, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { getTestimonials, submitTestimonial } from "../api/api";

const emptyForm = {
  name: "",
  role: "",
  service: "",
  rating: 5,
  feedback: "",
};

const Testimonials = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTestimonials({ limit: 9 })
      .then((response) => setTestimonials(response.data.testimonials))
      .catch(() => setTestimonials([]));
  }, []);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.role || !form.service || !form.feedback) {
      setStatus("Please complete all review fields.");
      return;
    }

    try {
      setLoading(true);
      await submitTestimonial(form);
      setForm(emptyForm);
      setStatus("Thanks. Your review was submitted and will appear after approval.");
    } catch (error) {
      setStatus(error.response?.data?.message || "Unable to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-pad overflow-hidden bg-[#f7f3ea] text-[#101312]">
      <div className="container-wide min-w-0">
        <div className="flex min-w-0 flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="min-w-0">
            <p className="eyebrow">Client voice</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              Reviews from NexDiff clients.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#101312]/62">
              Share your experience with our services or read approved reviews
              from businesses we have worked with.
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#101312] bg-[#101312] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 md:self-auto"
          >
            Start Your Project
          </button>
        </div>

        <div className="mt-10 grid min-w-0 gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid min-w-0 gap-4 md:grid-cols-2">
            {testimonials.length === 0 ? (
              <div className="light-card rounded-lg p-6 text-sm leading-7 text-[#101312]/62 md:col-span-2">
                No approved reviews yet. Be the first to share your experience.
              </div>
            ) : (
              testimonials.map((testimonial, index) => (
                <Motion.article
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="light-card min-w-0 overflow-hidden rounded-lg p-5 sm:p-6"
                >
                  <div className="flex flex-wrap gap-1 text-[#e05f2f]">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} size={17} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-6 break-words text-sm leading-7 text-[#101312]/68">
                    "{testimonial.feedback}"
                  </p>
                  <div className="mt-6 border-t border-[#101312]/10 pt-4">
                    <h3 className="break-words text-sm font-semibold">{testimonial.name}</h3>
                    <p className="mt-1 break-words text-xs text-[#101312]/50">
                      {testimonial.role} · {testimonial.service}
                    </p>
                  </div>
                </Motion.article>
              ))
            )}
          </div>

          <form onSubmit={handleSubmit} className="light-card min-w-0 rounded-lg p-5 sm:p-6">
            <div className="flex min-w-0 items-center gap-3">
              <Send size={21} className="text-[#16837a]" />
              <h3 className="text-xl font-semibold">Write a review</h3>
            </div>

            {status && (
              <div className="mt-4 rounded-lg border border-[#16837a]/20 bg-[#16837a]/10 px-4 py-3 text-sm font-medium text-[#0f5f58]">
                {status}
              </div>
            )}

            <div className="mt-5 grid min-w-0 gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name *"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
              />
              <input
                type="text"
                placeholder="Role / business *"
                value={form.role}
                onChange={(event) => updateField("role", event.target.value)}
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
              />
            </div>
            <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-[1fr_130px]">
              <input
                type="text"
                placeholder="Service used *"
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
              />
              <select
                value={form.rating}
                onChange={(event) => updateField("rating", Number(event.target.value))}
                className="min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
              >
                {[5, 4, 3, 2, 1].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating} stars
                  </option>
                ))}
              </select>
            </div>
            <textarea
              rows="5"
              placeholder="Write your review *"
              value={form.feedback}
              onChange={(event) => updateField("feedback", event.target.value)}
              className="mt-3 w-full min-w-0 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
            />
            <Button type="submit" className="mt-4 w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
