import { useState } from "react";
import Button from "../components/Button";

const Contact = () => {
const [form, setForm] = useState({
name: "",
email: "",
message: "",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(""); // success | error

// const handleSubmit = async (e) => {
// e.preventDefault();


// // Validation
// if (!form.name || !form.email || !form.message) {
//   setStatus("Please fill all fields");
//   return;
// }

// try {
//   setLoading(true);
//   setStatus("");

//   // 👉 Replace with your backend API later
//   await new Promise((res) => setTimeout(res, 1500));

//   setStatus("Message sent successfully 🚀");
//   setForm({ name: "", email: "", message: "" });
// } catch (err) {
//   setStatus("Something went wrong ❌");
// } finally {
//   setLoading(false);
// }


// };


const handleSubmit = async (e) => {
e.preventDefault();

if (!form.name || !form.email || !form.message) {
setStatus("Please fill all fields");
return;
}

try {
setLoading(true);
setStatus("");

// Format message
const message = `

Hi NexDiff 👋

Name: ${form.name}
Email: ${form.email}
Message: ${form.message}
`;


const encodedMessage = encodeURIComponent(message);

// Open WhatsApp
window.open(
  `https://wa.me/919001402531?text=${encodedMessage}`,
  "_blank"
);

setStatus("Redirecting to WhatsApp 🚀");
setForm({ name: "", email: "", message: "" });


} catch (err) {
setStatus("Something went wrong ❌");
} finally {
setLoading(false);
}
};


return (
  <section className="min-h-screen bg-[#0F172A] text-white py-60 px-6">
    {" "}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Amazing
          </span>
        </h2>

        <p className="mt-6 text-white/70 max-w-md">
          Have a project or idea? Reach out and let’s turn your vision into
          reality.
        </p>

        <div className="mt-8 space-y-4 text-white/80">
          {/* <p>📧 info@nexdiff.com</p> */}
          <p>📞 +91 9001402531</p>
          <p>📍 Delhi, India</p>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-6">
          <Button onClick={() => window.open("https://wa.me/9001402531")}>
            Chat on WhatsApp 💬
          </Button>
        </div>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl"
      >
        <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

        {/* Status Message */}
        {status && <div className="mb-4 text-sm text-purple-400">{status}</div>}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 outline-none transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 outline-none transition"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 outline-none transition"
          />

          {/* Button */}
          <Button
            className={`w-full ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  </section>
);
};

export default Contact;
