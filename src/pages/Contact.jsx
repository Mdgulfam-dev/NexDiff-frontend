import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/Button";

const services = [
  "Software Development",
  "Social Media Handling",
  "Digital Marketing",
  "Lead Generation",
];

const budgets = ["Rs 10k-20k", "Rs 20k-50k", "Rs 50k+"];
const urgency = ["Urgent", "1-2 Weeks", "Flexible"];

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

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service) {
      setStatus("Please complete your name, email, and service.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      const message = `
New Lead from Website

Name: ${form.name}
Email: ${form.email}

Service: ${form.service}
Budget: ${form.budget || "Not specified"}
Urgency: ${form.urgency || "Not specified"}

Message:
${form.message || "N/A"}
      `;

      window.open(
        `https://wa.me/919001402531?text=${encodeURIComponent(message)}`,
        "_blank",
      );

      setStatus("Opening WhatsApp with your project details.");
      setStep(1);
      setForm({
        name: "",
        email: "",
        service: "",
        budget: "",
        urgency: "",
        message: "",
      });
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const optionButton = (value, field) => (
    <button
      type="button"
      key={value}
      onClick={() => setForm({ ...form, [field]: value })}
      className={`w-full rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
        form[field] === value
          ? "border-[#101312] bg-[#101312] text-white"
          : "border-[#101312]/10 bg-white text-[#101312]/70 hover:border-[#101312]/30"
      }`}
    >
      {value}
    </button>
  );

  return (
    <main className="page-shell">
      <section className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
              Tell us what you want to build or grow.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              Get a free consultation and a practical direction for your
              website, software, marketing, or lead-generation system.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                { icon: <Phone size={18} />, text: "+91 9001402531" },
                { icon: <Mail size={18} />, text: "info.nexdiff@gmail.com" },
                { icon: <MapPin size={18} />, text: "Delhi, India" },
              ].map((item) => (
                <div key={item.text} className="light-card flex items-center gap-3 rounded-lg p-4">
                  <span className="text-[#16837a]">{item.icon}</span>
                  <span className="text-sm font-medium text-[#101312]/72">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#101312]/60">
              {["Fast response", "Free consultation", "No spam"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-lg border border-[#101312]/10 bg-white px-3 py-2">
                  <ShieldCheck size={16} className="text-[#16837a]" />
                  {item}
                </span>
              ))}
            </div>

            <button
              onClick={() => window.open("https://wa.me/919001402531", "_blank")}
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#25d366] px-5 py-3 text-sm font-semibold text-[#101312]"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </button>
          </div>

          <form onSubmit={handleSubmit} className="light-card rounded-lg p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Project brief</h2>
                <p className="mt-1 text-sm text-[#101312]/55">Step {step} of 4</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((item) => (
                  <span
                    key={item}
                    className={`h-2 w-8 rounded-full ${
                      item <= step ? "bg-[#101312]" : "bg-[#101312]/12"
                    }`}
                  />
                ))}
              </div>
            </div>

            {status && (
              <div className="mt-5 rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
                {status}
              </div>
            )}

            <div className="mt-7">
              {step === 1 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
                  />
                  <Button onClick={nextStep} className="w-full">Next</Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-[#101312]/68">Select service</p>
                  {services.map((item) => optionButton(item, "service"))}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button variant="outline" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep}>Next</Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-[#101312]/68">Budget range</p>
                  {budgets.map((item) => optionButton(item, "budget"))}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button variant="outline" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep}>Next</Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-[#101312]/68">Project urgency</p>
                  {urgency.map((item) => optionButton(item, "urgency"))}
                  <textarea
                    placeholder="Tell us about your business goal"
                    rows="4"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
                  />
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button variant="outline" onClick={prevStep}>Back</Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Submit"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
