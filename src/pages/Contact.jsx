import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/Button";
import SuccessPopup from "../components/SuccessPopup";
import { sendContactForm } from "../api/api";

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Social Media Handling",
  "Digital Marketing",
  "Lead Generation",
  "SEO Optimization",
  "E-commerce Solutions",
  "Cloud Solutions",
  "Google Ads Services",
];

const budgets = ["Rs 10k-20k", "Rs 20k-50k", "Rs 50k+"];
const urgency = ["Urgent", "1-2 Weeks", "Flexible"];
const officeAddress = "A-192 Sarita, New Delhi - 110076";
const officeMapUrl = "https://maps.app.goo.gl/28Li6YPu6D6dQmNm7";
const officeMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  officeAddress,
)}&output=embed`;

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
  const [showSuccess, setShowSuccess] = useState(false);

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

      await sendContactForm(form);

      setStatus("");
      setShowSuccess(true);
      setStep(1);
      setForm({
        name: "",
        email: "",
        service: "",
        budget: "",
        urgency: "",
        message: "",
      });
    } catch (error) {
      setStatus(error.response?.data?.message || "Something went wrong. Please try again.");
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
      <SuccessPopup
        open={showSuccess}
        title="Project brief submitted"
        message="Thank you for sharing your details. Our team will review your requirement and contact you soon with the next steps."
        onClose={() => setShowSuccess(false)}
      />
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
                {
                  icon: <Phone size={18} />,
                  text: "+91 9001402531",
                  href: "tel:+919001402531",
                },
                {
                  icon: <Mail size={18} />,
                  text: "info.nexdiff@gmail.com",
                  href: "mailto:info.nexdiff@gmail.com",
                },
                {
                  icon: <MapPin size={18} />,
                  text: officeAddress,
                  href: officeMapUrl,
                },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noopener noreferrer" : undefined}
                  className="light-card flex items-center gap-3 rounded-lg p-4 transition hover:-translate-y-0.5"
                >
                  <span className="text-[#16837a]">{item.icon}</span>
                  <span className="text-sm font-medium text-[#101312]/72">{item.text}</span>
                </a>
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

            <div className="light-card mt-6 overflow-hidden rounded-lg">
              <iframe
                title="NexDiff office location"
                src={officeMapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-52 w-full border-0"
              />
              <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#101312]">Visit our office</p>
                  <p className="mt-1 text-sm text-[#101312]/60">{officeAddress}</p>
                </div>
                <a
                  href={officeMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#101312] bg-[#101312] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#202522]"
                >
                  Open Maps
                </a>
              </div>
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
