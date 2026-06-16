import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, Globe2 } from "lucide-react";
import Button from "../components/Button";
import { getAnalysisPlanById } from "../data/pricingPlans";

const platforms = ["Instagram", "Facebook", "LinkedIn", "YouTube", "X", "Other"];
const platformLinkPlaceholders = {
  Instagram: "Instagram profile link *",
  Facebook: "Facebook page/profile link *",
  LinkedIn: "LinkedIn page/profile link *",
  YouTube: "YouTube channel link *",
  X: "X profile link *",
  Other: "Website or other platform link *",
};
const contentTypes = ["Reels", "Posts", "Stories", "Videos", "Blogs", "Mixed"];
const goals = [
  "More followers",
  "More leads",
  "Better engagement",
  "Brand awareness",
  "Sales growth",
  "Content consistency",
];

const today = new Date().toISOString().split("T")[0];
const namePattern = /^[a-zA-Z][a-zA-Z\s'.-]{1,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[6-9]\d{9}$/;
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const isValidUrl = (value) => {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && url.hostname.includes(".");
  } catch {
    return false;
  }
};

const normalizeUrl = (value) => {
  const trimmedValue = value.trim();
  if (!trimmedValue) return "";
  return /^https?:\/\//i.test(trimmedValue) ? trimmedValue : `https://${trimmedValue}`;
};

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
    profileLinks: {},
    profileLink: "",
    contentType: [],
    goal: [],
    issue: "",
    requirement: "",
  });
  const [status, setStatus] = useState("");
  const [invalidFields, setInvalidFields] = useState([]);
  const [fieldErrors, setFieldErrors] = useState({});

  const selectedOption = selectedPlan.options?.[0] || null;
  const [planOption, setPlanOption] = useState(selectedOption);
  const SelectedPlanIcon = selectedPlan.icon;

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setInvalidFields((current) => current.filter((item) => item !== field));
    setFieldErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const updateProfileLink = (platform, value) => {
    const field = `profileLinks.${platform}`;
    setForm((current) => ({
      ...current,
      profileLinks: {
        ...current.profileLinks,
        [platform]: value,
      },
    }));
    setInvalidFields((current) => current.filter((item) => item !== field));
    setFieldErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const toggleMultiField = (field, value) => {
    setForm((current) => {
      const currentValues = current[field];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      if (field !== "platform" || nextValues.includes(value)) {
        return { ...current, [field]: nextValues };
      }

      const nextProfileLinks = { ...current.profileLinks };
      delete nextProfileLinks[value];
      return { ...current, [field]: nextValues, profileLinks: nextProfileLinks };
    });
    setInvalidFields((current) =>
      current.filter((item) => item !== field && item !== `profileLinks.${value}`),
    );
    setFieldErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[field];
      delete nextErrors[`profileLinks.${value}`];
      return nextErrors;
    });
  };

  const optionButton = (field, value) => (
    <button
      key={value}
      type="button"
      onClick={() => toggleMultiField(field, value)}
      className={`min-w-0 break-words rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
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
    `min-w-0 rounded-lg border bg-[#f7f3ea] px-4 py-3 outline-none transition ${
      hasError(field)
        ? "border-[#e05f2f] ring-2 ring-[#e05f2f]/15 placeholder:text-[#9b3e1f]/70"
        : "border-[#101312]/10 focus:border-[#101312]"
    }`;

  const getFieldError = (field) => fieldErrors[field];

  const errorText = (field) =>
    getFieldError(field) ? (
      <p className="mt-2 break-words text-xs font-semibold text-[#9b3e1f]">
        {getFieldError(field)}
      </p>
    ) : null;

  const sectionClass = (field) =>
    hasError(field)
      ? "rounded-lg border border-[#e05f2f]/40 bg-[#e05f2f]/5 p-3"
      : "";

  const requiredFields = [
    "name",
    "phone",
    "email",
    "businessName",
    "niche",
    "accountStartDate",
    "platform",
    "contentType",
    "goal",
    "issue",
    "requirement",
  ];

  const validateForm = () => {
    const nextErrors = {};
    const addError = (field, message) => {
      nextErrors[field] = message;
    };

    requiredFields.forEach((field) => {
      const value = form[field];
      if (Array.isArray(value) ? value.length === 0 : !String(value || "").trim()) {
        addError(field, "This field is required.");
      }
    });

    if (form.name.trim() && !namePattern.test(form.name.trim())) {
      addError("name", "Enter a valid name with at least 2 letters.");
    }

    const digitsOnlyPhone = form.phone.replace(/\D/g, "");
    if (form.phone.trim() && !phonePattern.test(digitsOnlyPhone)) {
      addError("phone", "Enter a valid 10-digit Indian mobile number.");
    }

    if (form.email.trim() && !emailPattern.test(form.email.trim())) {
      addError("email", "Enter a valid email address.");
    }

    if (form.businessName.trim() && form.businessName.trim().length < 2) {
      addError("businessName", "Business name must be at least 2 characters.");
    }

    if (form.niche.trim() && form.niche.trim().length < 2) {
      addError("niche", "Niche must be at least 2 characters.");
    }

    if (form.accountStartDate.trim()) {
      if (!datePattern.test(form.accountStartDate)) {
        addError("accountStartDate", "Use a valid date in YYYY-MM-DD format.");
      } else if (form.accountStartDate > today) {
        addError("accountStartDate", "Account start date cannot be in the future.");
      }
    }

    form.platform.forEach((platform) => {
      const field = `profileLinks.${platform}`;
      const normalizedLink = normalizeUrl(form.profileLinks[platform] || "");
      if (!normalizedLink) {
        addError(field, `${platform} profile link is required.`);
      } else if (!isValidUrl(normalizedLink)) {
        addError(field, "Enter a valid URL, for example https://example.com/profile.");
      }
    });

    if (form.issue.trim() && form.issue.trim().length < 10) {
      addError("issue", "Please describe the issue in at least 10 characters.");
    }

    if (form.requirement.trim() && form.requirement.trim().length < 10) {
      addError("requirement", "Please describe your requirement in at least 10 characters.");
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    const invalidFieldNames = Object.keys(validationErrors);

    if (invalidFieldNames.length > 0) {
      setInvalidFields(invalidFieldNames);
      setFieldErrors(validationErrors);
      setStatus("Please fix the highlighted fields before continuing.");
      return;
    }

    const normalizedProfileLinks = form.platform.reduce((links, platform) => {
      links[platform] = normalizeUrl(form.profileLinks[platform]);
      return links;
    }, {});

    const normalizedForm = {
      ...form,
      name: form.name.trim(),
      phone: form.phone.replace(/\D/g, ""),
      email: form.email.trim(),
      businessName: form.businessName.trim(),
      niche: form.niche.trim(),
      issue: form.issue.trim(),
      requirement: form.requirement.trim(),
      profileLinks: normalizedProfileLinks,
      profileLink: form.platform
        .map((platform) => `${platform}: ${normalizedProfileLinks[platform]}`)
        .join(", "),
    };

    navigate("/pricing/payment", {
      state: {
        planId: selectedPlan.id,
        planOption,
        form: normalizedForm,
      },
    });
  };

  return (
    <main className="page-shell overflow-hidden">
      <section className="section-pad">
        <div className="container-wide grid min-w-0 gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="min-w-0">
            <p className="eyebrow">Plan request</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Tell us about your business and current problem.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#101312]/65 sm:text-base">
              We collect the key details NexDiff needs to review your account,
              understand your goals, and prepare the right analysis or strategy.
            </p>

            <div className="light-card mt-8 min-w-0 rounded-lg p-5">
              <div className="flex min-w-0 items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f7f3ea] text-[#e05f2f]">
                  <SelectedPlanIcon size={21} />
                </span>
                <div className="min-w-0">
                  <h2 className="break-words text-lg font-semibold">{selectedPlan.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-[#101312]/62">
                    {planOption ? `Rs ${planOption.amount}` : selectedPlan.price}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {selectedPlan.features.map((feature) => (
                  <div key={feature} className="flex min-w-0 gap-3">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#16837a]" />
                    <p className="min-w-0 break-words text-sm leading-6 text-[#101312]/65">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="light-card min-w-0 rounded-lg p-5 sm:p-7">
            <div className="flex min-w-0 items-center gap-3">
              <Building2 size={22} className="shrink-0 text-[#16837a]" />
              <h2 className="text-2xl font-semibold">Business details</h2>
            </div>

            {status && (
              <div className="mt-5 break-words rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
                {status}
              </div>
            )}

            {selectedPlan.options && (
              <div className="mt-6">
                <p className="text-sm font-semibold text-[#101312]/68">Select package</p>
                <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-2">
                  {selectedPlan.options.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setPlanOption(option)}
                      className={`min-w-0 rounded-lg border px-4 py-3 text-left transition ${
                        planOption?.label === option.label
                          ? "border-[#101312] bg-[#101312] text-white"
                          : "border-[#101312]/10 bg-[#f7f3ea] text-[#101312]"
                      }`}
                    >
                      <span className="block break-words text-sm font-semibold">{option.label}</span>
                      <span className="mt-1 block text-sm opacity-70">Rs {option.amount}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
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
                placeholder="Email *"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={fieldClass("email")}
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
                type="date"
                aria-label="Account start date"
                max={today}
                value={form.accountStartDate}
                onChange={(event) => updateField("accountStartDate", event.target.value)}
                className={fieldClass("accountStartDate")}
              />
            </div>
            <div className="mt-2 grid min-w-0 gap-x-4 gap-y-2 sm:grid-cols-2">
              {errorText("name")}
              {errorText("phone")}
              {errorText("email")}
              {errorText("businessName")}
              {errorText("niche")}
              {errorText("accountStartDate")}
            </div>

            <div className={`mt-6 ${sectionClass("platform")}`}>
              <div className="flex items-center gap-3">
                <Globe2 size={20} className="text-[#16837a]" />
                <p className={`text-sm font-semibold ${hasError("platform") ? "text-[#9b3e1f]" : "text-[#101312]/68"}`}>
                  Platform *
                </p>
              </div>
              <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-3">
                {platforms.map((platform) => optionButton("platform", platform))}
              </div>
              {errorText("platform")}
            </div>

            {form.platform.length > 0 && (
              <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-2">
                {form.platform.map((platform) => {
                  const field = `profileLinks.${platform}`;
                  return (
                    <div key={platform} className="min-w-0">
                      <input
                        type="text"
                        inputMode="url"
                        placeholder={platformLinkPlaceholders[platform]}
                        value={form.profileLinks[platform] || ""}
                        onChange={(event) => updateProfileLink(platform, event.target.value)}
                        className={`${fieldClass(field)} w-full`}
                      />
                      {errorText(field)}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-6 grid min-w-0 gap-6 lg:grid-cols-2">
              <div className={sectionClass("contentType")}>
                <p className={`text-sm font-semibold ${hasError("contentType") ? "text-[#9b3e1f]" : "text-[#101312]/68"}`}>
                  Content type *
                </p>
                <div className="mt-3 grid min-w-0 gap-3">
                  {contentTypes.map((type) => optionButton("contentType", type))}
                </div>
                {errorText("contentType")}
              </div>
              <div className={sectionClass("goal")}>
                <p className={`text-sm font-semibold ${hasError("goal") ? "text-[#9b3e1f]" : "text-[#101312]/68"}`}>
                  Main goal *
                </p>
                <div className="mt-3 grid min-w-0 gap-3">
                  {goals.map((goal) => optionButton("goal", goal))}
                </div>
                {errorText("goal")}
              </div>
            </div>

            <div className="mt-6 grid min-w-0 gap-4">
              <div>
                <textarea
                  rows="4"
                  placeholder="What issue are you facing right now? *"
                  value={form.issue}
                  onChange={(event) => updateField("issue", event.target.value)}
                  className={`${fieldClass("issue")} w-full`}
                />
                {errorText("issue")}
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="What do you require from NexDiff? *"
                  value={form.requirement}
                  onChange={(event) => updateField("requirement", event.target.value)}
                  className={`${fieldClass("requirement")} w-full`}
                />
                {errorText("requirement")}
              </div>
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
