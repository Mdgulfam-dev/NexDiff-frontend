import { useState } from "react";
import Button from "../components/Button";

const Contact = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    urgency: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service) {
      setStatus("⚠️ Please complete required fields");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      const message = `
🔥 New Lead from Website

Name: ${form.name}
Email: ${form.email}

Service: ${form.service}
Budget: ${form.budget || "Not specified"}
Urgency: ${form.urgency || "Not specified"}

Message:
${form.message || "N/A"}
      `;

      const encodedMessage = encodeURIComponent(message);

      window.open(
        `https://wa.me/919001402531?text=${encodedMessage}`,
        "_blank",
      );

      setStatus("✅ Redirecting to WhatsApp...");
      setStep(1);
      setForm({
        name: "",
        email: "",
        service: "",
        budget: "",
        urgency: "",
        message: "",
      });
    } catch (err) {
      setStatus("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0F172A] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* 🔥 LEFT SIDE (NEW - CONTACT INFO) */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Build Something{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>

          <p className="mt-6 text-white/70 max-w-md">
            Get a free consultation and discover how we can help you generate
            leads and grow your business.
          </p>

          {/* 🔥 TRUST SECTION */}
          <div className="mt-6 text-sm text-white/60 space-y-2">
            <p> Fast response (10–15 mins)</p>
            <p> Free consultation</p>
            <p> 100% secure & no spam</p>
          </div>

          {/* 🔥 CONTACT DETAILS */}
          <div className="mt-8 space-y-3 text-white/80">
            <p> +91 9001402531</p>
            <p> Delhi, India</p>
            <p> info.nexdiff@gmail.com</p>
          </div>

          {/* 🔥 WHATSAPP QUICK CTA */}
          <div className="mt-6">
            <Button
              onClick={() =>
                window.open("https://wa.me/919001402531", "_blank")
              }
            >
              Chat on WhatsApp 💬
            </Button>
          </div>
        </div>

        {/* 🔥 RIGHT SIDE (YOUR EXISTING FORM) */}
        <div>
          <form
            className="bg-white/5 p-8 rounded-2xl shadow-xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Get a Free Strategy for Your Business
            </h3>

            {status && <div className="mb-4 text-purple-400">{status}</div>}

            {/* STEP UI (UNCHANGED) */}
            {step === 1 && (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 rounded bg-white/10"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full p-3 rounded bg-white/10"
                />

                <Button onClick={nextStep}>Next →</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p>Select Service:</p>

                {[
                  "Website Development",
                  "App Development",
                  "Marketing",
                  "AI Solution",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setForm({ ...form, service: item })}
                    className={`w-full p-3 rounded border ${
                      form.service === item ? "bg-purple-600" : "bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <div className="flex justify-between">
                  <Button onClick={prevStep}>← Back</Button>
                  <Button onClick={nextStep}>Next →</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p>Budget Range:</p>

                {["₹10k–20k", "₹20k–50k", "₹50k+"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setForm({ ...form, budget: item })}
                    className={`w-full p-3 rounded border ${
                      form.budget === item ? "bg-green-600" : "bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <div className="flex justify-between">
                  <Button onClick={prevStep}>← Back</Button>
                  <Button onClick={nextStep}>Next →</Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <p>How urgent is your project?</p>

                {["Urgent", "1-2 Weeks", "Flexible"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setForm({ ...form, urgency: item })}
                    className={`w-full p-3 rounded border ${
                      form.urgency === item ? "bg-blue-600" : "bg-white/10"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                <textarea
                  placeholder="Example: I need a website for my business to generate leads"
                  rows="3"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full p-3 rounded bg-white/10"
                />

                <div className="flex justify-between">
                  <Button onClick={prevStep}>← Back</Button>

                  <Button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Submit 🚀"}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
