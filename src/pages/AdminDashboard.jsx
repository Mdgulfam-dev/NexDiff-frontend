import { useEffect, useMemo, useState } from "react";
import { BriefcaseBusiness, Inbox, LogOut, RefreshCw, UserRoundCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { getAdminSubmissions, updateSubmissionStatus } from "../api/api";

const tabs = [
  { id: "all", label: "All", icon: Inbox },
  { id: "contact", label: "Contacts", icon: Inbox },
  { id: "career", label: "Careers", icon: BriefcaseBusiness },
  { id: "pricing", label: "Pricing", icon: UserRoundCheck },
];

const statusStyles = {
  new: "bg-[#e05f2f]/10 text-[#9b3e1f] border-[#e05f2f]/20",
  reviewed: "bg-[#16837a]/10 text-[#0f5f58] border-[#16837a]/20",
  closed: "bg-[#101312]/10 text-[#101312]/65 border-[#101312]/15",
};

const labelMap = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  service: "Service",
  budget: "Budget",
  urgency: "Urgency",
  message: "Message",
  role: "Role",
  experience: "Experience",
  portfolio: "Portfolio",
  planName: "Plan",
  packageLabel: "Package",
  amount: "Amount",
  businessName: "Business",
  niche: "Niche",
  platform: "Platform",
  profileLink: "Profile",
  contentType: "Content",
  goal: "Goal",
  issue: "Issue",
  requirement: "Requirement",
  paymentScreenshotName: "Screenshot",
};

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return value || "Not specified";
};

const getTitle = (submission) => {
  if (submission.type === "pricing") {
    return submission.data.businessName || submission.data.name;
  }

  if (submission.type === "career") {
    return submission.data.role || submission.data.name;
  }

  return submission.data.service || submission.data.name;
};

const visibleFields = {
  contact: ["name", "email", "service", "budget", "urgency", "message"],
  career: ["name", "phone", "email", "role", "experience", "portfolio", "message"],
  pricing: [
    "planName",
    "packageLabel",
    "amount",
    "name",
    "phone",
    "email",
    "businessName",
    "niche",
    "platform",
    "profileLink",
    "contentType",
    "goal",
    "issue",
    "requirement",
    "paymentScreenshotName",
  ],
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [submissions, setSubmissions] = useState([]);
  const [counts, setCounts] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const total = useMemo(
    () => Object.values(counts).reduce((sum, count) => sum + count, 0),
    [counts],
  );

  const loadSubmissions = async (type = activeTab) => {
    try {
      setLoading(true);
      setStatus("");
      const response = await getAdminSubmissions(type);
      setSubmissions(response.data.submissions);
      setCounts(response.data.counts);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("nexdiff_admin_token");
        navigate("/admin/login");
        return;
      }

      setStatus(error.response?.data?.message || "Unable to load submissions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("nexdiff_admin_token")) {
      navigate("/admin/login");
      return;
    }

    loadSubmissions(activeTab);
  }, [activeTab]);

  const changeStatus = async (id, nextStatus) => {
    try {
      const response = await updateSubmissionStatus(id, nextStatus);
      setSubmissions((current) =>
        current.map((item) => (item._id === id ? response.data.submission : item)),
      );
    } catch (error) {
      setStatus(error.response?.data?.message || "Unable to update status.");
    }
  };

  const logout = () => {
    localStorage.removeItem("nexdiff_admin_token");
    navigate("/admin/login");
  };

  return (
    <main className="page-shell">
      <section className="section-pad">
        <div className="container-wide">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Admin dashboard</p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                Website submissions.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#101312]/60">
                View and manage MongoDB records from all NexDiff forms.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={() => loadSubmissions()}>
                <RefreshCw size={17} />
                Refresh
              </Button>
              <Button onClick={logout}>
                <LogOut size={17} />
                Logout
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const count = tab.id === "all" ? total : counts[tab.id] || 0;

              return (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg border p-4 text-left transition ${
                    activeTab === tab.id
                      ? "border-[#101312] bg-[#101312] text-white"
                      : "border-[#101312]/10 bg-white text-[#101312]"
                  }`}
                >
                  <Icon size={19} />
                  <span className="mt-4 block text-2xl font-semibold">{count}</span>
                  <span className="mt-1 block text-sm opacity-70">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {status && (
            <div className="mt-6 rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
              {status}
            </div>
          )}

          <div className="mt-8 grid gap-5">
            {loading ? (
              <div className="light-card rounded-lg p-6 text-sm font-medium text-[#101312]/60">
                Loading submissions...
              </div>
            ) : submissions.length === 0 ? (
              <div className="light-card rounded-lg p-6 text-sm font-medium text-[#101312]/60">
                No submissions found.
              </div>
            ) : (
              submissions.map((submission) => (
                <article key={submission._id} className="light-card rounded-lg p-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg bg-[#f7f3ea] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#101312]/62">
                          {submission.type}
                        </span>
                        <span className={`rounded-lg border px-3 py-1 text-xs font-semibold ${statusStyles[submission.status]}`}>
                          {submission.status}
                        </span>
                      </div>
                      <h2 className="mt-3 text-xl font-semibold">{getTitle(submission)}</h2>
                      <p className="mt-1 text-sm text-[#101312]/52">
                        {new Date(submission.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <select
                      value={submission.status}
                      onChange={(event) => changeStatus(submission._id, event.target.value)}
                      className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 text-sm font-semibold outline-none"
                    >
                      <option value="new">New</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {visibleFields[submission.type].map((field) => (
                      <div key={field} className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#101312]/42">
                          {labelMap[field] || field}
                        </p>
                        <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-[#101312]/76">
                          {formatValue(submission.data[field])}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
