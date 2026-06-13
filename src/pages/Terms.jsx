import { ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";

const sections = [
  {
    title: "Use of Website",
    text: "The NexDiff website is provided for business information, service enquiries, pricing requests, career applications, and general communication with our team. You agree not to misuse forms, submit false information, or interfere with website operations.",
  },
  {
    title: "Service Enquiries",
    text: "Submitting a contact, pricing, or project request does not create a binding service agreement. Project scope, timelines, pricing, payment terms, and deliverables are confirmed separately in writing by NexDiff.",
  },
  {
    title: "Payments",
    text: "Where payment proof is requested, confirmation is subject to manual verification. NexDiff may contact you for additional details before accepting or starting paid work.",
  },
  {
    title: "Career Applications",
    text: "When applying for a role, you confirm that the information and resume you submit are accurate and shared voluntarily. NexDiff may review, store, and contact you regarding your application. Submission of an application does not guarantee selection, interview, or employment.",
  },
  {
    title: "Content and Intellectual Property",
    text: "Website content, branding, visuals, and materials belong to NexDiff or their respective owners. You may not copy, reproduce, or reuse them without permission.",
  },
  {
    title: "Limitation",
    text: "NexDiff aims to keep information accurate and available, but the website may contain errors, delays, or temporary interruptions. Use of the website is at your own discretion.",
  },
  {
    title: "Contact",
    text: "For questions about these terms, contact us at info.nexdiff@gmail.com or +91 9001402531.",
  },
];

const Terms = () => {
  return (
    <main className="page-shell">
      <Helmet>
        <title>Terms & Conditions | NexDiff</title>
        <meta
          name="description"
          content="Read NexDiff terms and conditions for website use, services, payments, and career applications."
        />
      </Helmet>

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside>
              <p className="eyebrow">Terms</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
                Terms & Conditions.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/64">
                Please review these terms before submitting enquiries, payments,
                or career applications through NexDiff.
              </p>
              <div className="light-card mt-7 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={21} className="mt-0.5 shrink-0 text-[#16837a]" />
                  <p className="text-sm leading-7 text-[#101312]/66">
                    Last updated: June 13, 2026
                  </p>
                </div>
              </div>
            </aside>

            <div className="light-card rounded-lg p-5 sm:p-7">
              <div className="grid gap-5">
                {sections.map((section, index) => (
                  <section
                    key={section.title}
                    className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e05f2f]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">{section.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#101312]/68">
                      {section.text}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;
