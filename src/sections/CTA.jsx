import { ArrowUpRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="bg-[#f7f3ea] px-4 pb-16 text-[#101312] sm:px-6 sm:pb-20 lg:px-8">
      <div className="container-wide">
        <div className="overflow-hidden rounded-lg bg-[#101312] text-white">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c7f9cc]">
                Free consultation
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                Ready to turn your online presence into a growth system?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                Share your goal and we will map the right mix of software,
                content, campaigns, and lead capture for your business.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-3">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919001402531?text=Hi NexDiff, I want to start a project",
                    "_blank",
                  )
                }
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#c7f9cc] px-5 py-3 text-sm font-semibold text-[#101312] transition hover:bg-white"
              >
                <FaWhatsapp />
                Chat on WhatsApp
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => window.open("tel:+919001402531")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/16 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                Call +91 9001402531
              </button>
              <p className="text-center text-xs text-white/42">
                Usually responds within 10-15 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
