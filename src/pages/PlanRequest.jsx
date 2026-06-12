import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, Globe2 } from "lucide-react";
import Button from "../components/Button";
import { getAnalysisPlanById } from "../data/pricingPlans";

const platforms = ["Instagram", "Facebook", "LinkedIn", "YouTube", "X", "Other"];
const contentTypes = ["Reels", "Posts", "Stories", "Videos", "Blogs", "Mixed"];
const goals = [
  "More followers",
  "More leads",
  "Better engagement",
  "Brand awareness",
  "Sales growth",
  "Content consistency",
];

const PlanRequest = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedPlan = useMemo(
    () => getAnalysisPlanById(searchParams.get("plan")),
    [searchParams],
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    niche: "",
    accountStartDate: "",
    platform: [],
    profileLink: "",
    contentType: [],
    goal: [],
    issue: "",
    requirement: "",
  });
  const [status, setStatus] = useState("");
  const [invalidFields, setInvalidFields] = useState([]);

  const selectedOption = selectedPlan.options?.[0] || null;
  const [planOption, setPlanOption] = useState(selectedOption);
  const SelectedPlanIcon = selectedPlan.icon;

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setInvalidFields((current) => current.filter((item) => item !== field));
  };

  const toggleMultiField = (field, value) => {
    setForm((current) => {
      const currentValues = current[field];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return { ...current, [field]: nextValues };
    });
    setInvalidFields((current) => current.filter((item) => item !== field));
  };

  const optionButton = (field, value) => (
    <button
      key={value}
      type="button"
      onClick={() => toggleMultiField(field, value)}
      className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
        form[field].includes(value)
          ? "border-[#101312] bg-[#101312] text-white"
          : hasError(field)
            ? "border-[#e05f2f] bg-[#e05f2f]/10 text-[#9b3e1f]"
            : "border-[#101312]/10 bg-white text-[#101312]/68 hover:border-[#101312]/30"
      }`}
    >
      {value}
    </button>
  );

  const hasError = (field) => invalidFields.includes(field);

  const fieldClass = (field) =>
    `rounded-lg border bg-[#f7f3ea] px-4 py-3 outline-none transition ${
      hasError(field)
        ? "border-[#e05f2f] ring-2 ring-[#e05f2f]/15 placeholder:text-[#9b3e1f]/70"
        : "border-[#101312]/10 focus:border-[#101312]"
    }`;

  const sectionClass = (field) =>
    hasError(field)
      ? "rounded-lg border border-[#e05f2f]/40 bg-[#e05f2f]/5 p-3"
      : "";

  const requiredFields = [
    "name",
    "phone",
    "businessName",
    "niche",
    "platform",
    "contentType",
    "goal",
    "issue",
    "requirement",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const missingFields = requiredFields.filter((field) => {
      const value = form[field];
      return Array.isArray(value) ? value.length === 0 : !value.trim();
    });

    if (missingFields.length > 0) {
      setInvalidFields(missingFields);
      setStatus("Please complete the highlighted required fields before continuing.");
      return;
    }

    navigate("/pricing/payment", {
      state: {
        planId: selectedPlan.id,
        planOption,
        form,
      },
    });
  };

  return (
    <main className="page-shell">
      <section className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <aside>
            <p className="eyebrow">Plan request</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Tell us about your business and current problem.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              We collect the key details NexDiff needs to review your account,
              understand your goals, and prepare the right analysis or strategy.
            </p>

            <div className="light-card mt-8 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f7f3ea] text-[#e05f2f]">
                  <SelectedPlanIcon size={21} />
                </span>
                <div>
                  <h2 className="text-lg font-semibold">{selectedPlan.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-[#101312]/62">
                    {planOption ? `Rs ${planOption.amount}` : selectedPlan.price}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {selectedPlan.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#16837a]" />
                    <p className="text-sm leading-6 text-[#101312]/65">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="light-card rounded-lg p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <Building2 size={22} className="text-[#16837a]" />
              <h2 className="text-2xl font-semibold">Business details</h2>
            </div>

            {status && (
              <div className="mt-5 rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
                {status}
              </div>
            )}

            {selectedPlan.options && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-[#101312]/68">Select package</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {selectedPlan.options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setPlanOption(option)}
                      className={`rounded-lg border px-4 py-3 text-left transition ${
                        planOption?.label === option.label
                          ? "border-[#101312] bg-[#101312] text-white"
                          : "border-[#101312]/10 bg-[#f7f3ea] text-[#101312]"
                      }`}
                    >
                      <span className="block text-sm font-semibold">{option.label}</span>
                      <span className="mt-1 block text-sm opacity-70">Rs {option.amount}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your name *"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className={fieldClass("name")}
              />
              <input
                type="tel"
                placeholder="Phone number *"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className={fieldClass("phone")}
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
              <input
                type="text"
                placeholder="Business name *"
                value={form.businessName}
                onChange={(event) => updateField("businessName", event.target.value)}
                className={fieldClass("businessName")}
              />
              <input
                type="text"
                placeholder="Niche / industry *"
                value={form.niche}
                onChange={(event) => updateField("niche", event.target.value)}
                className={fieldClass("niche")}
              />
              <input
                type="text"
                placeholder="Account start date"
                value={form.accountStartDate}
                onChange={(event) => updateField("accountStartDate", event.target.value)}
                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
              />
            </div>

            <div className={`mt-6 ${sectionClass("platform")}`}>
              <div className="flex items-center gap-3">
                <Globe2 size={20} className="text-[#16837a]" />
                <p className={`text-sm font-semibold ${hasError("platform") ? "text-[#9b3e1f]" : "text-[#101312]/68"}`}>
                  Platform *
                </p>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {platforms.map((platform) => optionButton("platform", platform))}
              </div>
            </div>

            <input
              type="url"
              placeholder="Profile or website link"
              value={form.profileLink}
              onChange={(event) => updateField("profileLink", event.target.value)}
              className="mt-4 w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none transition focus:border-[#101312]"
            />

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className={sectionClass("contentType")}>
                <p className={`text-sm font-semibold ${hasError("contentType") ? "text-[#9b3e1f]" : "text-[#101312]/68"}`}>
                  Content type *
                </p>
                <div className="mt-3 grid gap-3">
                  {contentTypes.map((type) => optionButton("contentType", type))}
                </div>
              </div>
              <div className={sectionClass("goal")}>
                <p className={`text-sm font-semibold ${hasError("goal") ? "text-[#9b3e1f]" : "text-[#101312]/68"}`}>
                  Main goal *
                </p>
                <div className="mt-3 grid gap-3">
                  {goals.map((goal) => optionButton("goal", goal))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <textarea
                rows="4"
                placeholder="What issue are you facing right now? *"
                value={form.issue}
                onChange={(event) => updateField("issue", event.target.value)}
                className={fieldClass("issue")}
              />
              <textarea
                rows="4"
                placeholder="What do you require from NexDiff? *"
                value={form.requirement}
                onChange={(event) => updateField("requirement", event.target.value)}
                className={fieldClass("requirement")}
              />
            </div>

            <Button type="submit" className="mt-7 w-full">
              Continue to Payment
              <ArrowRight size={17} />
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PlanRequest;
