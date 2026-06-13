import { useEffect, useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FileText,
  Inbox,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Plus,
  RefreshCw,
  Search,
  Trash2,
  UserRoundCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {
  createAdminBlogPost,
  createAdminJobPost,
  deleteAdminBlogPost,
  deleteAdminJobPost,
  deleteAdminTestimonial,
  getAdminBlogPosts,
  getAdminJobPosts,
  getAdminSubmissions,
  getAdminTestimonials,
  updateAdminTestimonialStatus,
  updateSubmissionStatus,
} from "../api/api";

const leadTabs = [
  { id: "all", label: "All", icon: Inbox },
  { id: "contact", label: "Contacts", icon: MessageSquare },
  { id: "career", label: "Applications", icon: BriefcaseBusiness },
  { id: "pricing", label: "Plan Requests", icon: UserRoundCheck },
];

const statusStyles = {
  new: "bg-[#e05f2f]/10 text-[#9b3e1f] border-[#e05f2f]/20",
  reviewed: "bg-[#16837a]/10 text-[#0f5f58] border-[#16837a]/20",
  discussion: "bg-[#2563eb]/10 text-[#1d4ed8] border-[#2563eb]/20",
  followup: "bg-[#f59e0b]/10 text-[#92400e] border-[#f59e0b]/25",
  proposal_sent: "bg-[#7c3aed]/10 text-[#6d28d9] border-[#7c3aed]/20",
  payment_pending: "bg-[#dc2626]/10 text-[#991b1b] border-[#dc2626]/20",
  payment_received: "bg-[#059669]/10 text-[#047857] border-[#059669]/20",
  in_progress: "bg-[#0891b2]/10 text-[#0e7490] border-[#0891b2]/20",
  completed: "bg-[#16a34a]/10 text-[#15803d] border-[#16a34a]/20",
  closed: "bg-[#101312]/10 text-[#101312]/65 border-[#101312]/15",
  rejected: "bg-[#6b7280]/10 text-[#4b5563] border-[#6b7280]/20",
};

const leadStatuses = [
  { value: "new", label: "New" },
  { value: "reviewed", label: "Reviewed" },
  { value: "discussion", label: "Discussion" },
  { value: "followup", label: "Follow Up" },
  { value: "proposal_sent", label: "Proposal Sent" },
  { value: "payment_pending", label: "Payment Pending" },
  { value: "payment_received", label: "Payment Received" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "closed", label: "Closed" },
  { value: "rejected", label: "Rejected" },
];

const getStatusLabel = (status) =>
  leadStatuses.find((item) => item.value === status)?.label || status;

const labelMap = {
  name: "Name",
  jobId: "Job ID",
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

const visibleFields = {
  contact: ["name", "email", "service", "budget", "urgency", "message"],
  career: ["jobId", "name", "phone", "email", "role", "experience", "portfolio", "resume", "message"],
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

const emptyBlogForm = {
  title: "",
  category: "",
  image: "",
  desc: "",
  content: "",
};

const emptyJobForm = {
  title: "",
  type: "",
  location: "",
  focus: "",
};

const pageSize = 8;

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (value && typeof value === "object") {
    return value.name || JSON.stringify(value);
  }

  return value || "Not specified";
};

const renderFieldValue = (field, value) => {
  if (field === "resume" && value?.dataUrl) {
    return (
      <a
        href={value.dataUrl}
        download={value.name || "resume"}
        className="inline-flex min-h-10 items-center justify-center rounded-lg border border-[#101312] bg-[#101312] px-4 py-2 text-sm font-semibold text-white"
      >
        Download Resume
      </a>
    );
  }

  return formatValue(value);
};

const getTitle = (submission) => {
  if (submission.type === "pricing") {
    return submission.data.businessName || submission.data.name;
  }

  if (submission.type === "career") {
    return submission.data.jobId
      ? `${submission.data.jobId} · ${submission.data.role}`
      : submission.data.role || submission.data.name;
  }

  return submission.data.service || submission.data.name;
};

const getLeadMeta = (submission) => {
  if (submission.type === "pricing") {
    return `${submission.data.name || "No name"} · ${submission.data.phone || "No phone"}`;
  }

  if (submission.type === "career") {
    return `${submission.data.name || "No name"} · ${submission.data.phone || "No phone"}`;
  }

  return `${submission.data.name || "No name"} · ${submission.data.email || "No email"}`;
};

const getSearchableText = (value) =>
  JSON.stringify(value || {}).toLowerCase();

const getJobDetailLines = (focus = "") =>
  focus
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const paginate = (items, page) => {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
};

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("nexdiff_admin_user") || "null");
  } catch {
    return null;
  }
};

const Pagination = ({ page, totalItems, onChange }) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  if (totalItems <= pageSize) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-[#101312]/10 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-medium text-[#101312]/58">
        Page {page} of {totalPages} · {totalItems} records
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#101312]/10 bg-[#f7f3ea] disabled:opacity-40"
          aria-label="Previous page"
        >
          <ChevronLeft size={17} />
        </button>
        <button
          type="button"
          onClick={() => onChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#101312]/10 bg-[#f7f3ea] disabled:opacity-40"
          aria-label="Next page"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const storedUser = getStoredUser();
  const userRole = storedUser?.role || "admin";
  const canManageLeads = ["admin", "manager"].includes(userRole);
  const canManageContent = ["admin", "executive"].includes(userRole);
  const [activeSection, setActiveSection] = useState(canManageLeads ? "leads" : "content");
  const [activeLeadTab, setActiveLeadTab] = useState("all");
  const [leadStatusFilter, setLeadStatusFilter] = useState("all");
  const [leadSearch, setLeadSearch] = useState("");
  const [leadPage, setLeadPage] = useState(1);
  const [expandedLeadId, setExpandedLeadId] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [counts, setCounts] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const [contentMode, setContentMode] = useState("blogs");
  const [contentSearch, setContentSearch] = useState("");
  const [contentPage, setContentPage] = useState(1);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogForm, setBlogForm] = useState(emptyBlogForm);
  const [jobForm, setJobForm] = useState(emptyJobForm);
  const [contentStatus, setContentStatus] = useState("");
  const [contentLoading, setContentLoading] = useState(false);

  const totalLeads = useMemo(
    () => Object.values(counts).reduce((sum, count) => sum + count, 0),
    [counts],
  );

  const filteredLeads = useMemo(() => {
    const searchText = leadSearch.trim().toLowerCase();

    return submissions.filter((submission) => {
      const matchesStatus =
        leadStatusFilter === "all" || submission.status === leadStatusFilter;
      const matchesSearch =
        !searchText ||
        getTitle(submission).toLowerCase().includes(searchText) ||
        getLeadMeta(submission).toLowerCase().includes(searchText) ||
        getSearchableText(submission.data).includes(searchText);

      return matchesStatus && matchesSearch;
    });
  }, [submissions, leadStatusFilter, leadSearch]);

  const pagedLeads = useMemo(
    () => paginate(filteredLeads, leadPage),
    [filteredLeads, leadPage],
  );

  const activeContentItems =
    contentMode === "blogs"
      ? blogPosts
      : contentMode === "jobs"
        ? jobPosts
        : testimonials;
  const filteredContent = useMemo(() => {
    const searchText = contentSearch.trim().toLowerCase();

    if (!searchText) {
      return activeContentItems;
    }

    return activeContentItems.filter((item) => getSearchableText(item).includes(searchText));
  }, [activeContentItems, contentSearch]);
  const pagedContent = useMemo(
    () => paginate(filteredContent, contentPage),
    [filteredContent, contentPage],
  );

  const loadSubmissions = async (type = activeLeadTab) => {
    if (!canManageLeads) {
      return;
    }

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

  const loadContent = async () => {
    if (!canManageContent) {
      return;
    }

    try {
      setContentStatus("");
      const [blogsResponse, jobsResponse, testimonialsResponse] = await Promise.all([
        getAdminBlogPosts(),
        getAdminJobPosts(),
        getAdminTestimonials(),
      ]);

      setBlogPosts(blogsResponse.data.posts);
      setJobPosts(jobsResponse.data.jobs);
      setTestimonials(testimonialsResponse.data.testimonials);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("nexdiff_admin_token");
        navigate("/admin/login");
        return;
      }

      setContentStatus(error.response?.data?.message || "Unable to load admin content.");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("nexdiff_admin_token")) {
      navigate("/admin/login");
      return;
    }

    if (!canManageLeads) {
      setActiveSection("content");
      return;
    }

    loadSubmissions(activeLeadTab);
    setLeadPage(1);
    setExpandedLeadId("");
  }, [activeLeadTab]);

  useEffect(() => {
    if (!localStorage.getItem("nexdiff_admin_token")) {
      return;
    }

    if (!canManageContent) {
      return;
    }

    loadContent();
  }, []);

  useEffect(() => {
    if (activeSection === "leads" && !canManageLeads) {
      setActiveSection("content");
    }

    if (activeSection === "content" && !canManageContent) {
      setActiveSection("leads");
    }
  }, [activeSection, canManageContent, canManageLeads]);

  useEffect(() => {
    setLeadPage(1);
  }, [leadStatusFilter, leadSearch]);

  useEffect(() => {
    setContentPage(1);
  }, [contentMode, contentSearch]);

  const createBlogPost = async (event) => {
    event.preventDefault();

    if (!canManageContent) {
      setContentStatus("You do not have access to manage content.");
      return;
    }

    try {
      setContentLoading(true);
      setContentStatus("");
      const response = await createAdminBlogPost(blogForm);
      setBlogPosts((current) => [response.data.post, ...current]);
      setBlogForm(emptyBlogForm);
      setShowBlogForm(false);
      setContentMode("blogs");
      setContentStatus("Blog post published.");
    } catch (error) {
      setContentStatus(error.response?.data?.message || "Unable to publish blog post.");
    } finally {
      setContentLoading(false);
    }
  };

  const createJobPost = async (event) => {
    event.preventDefault();

    if (!canManageContent) {
      setContentStatus("You do not have access to manage content.");
      return;
    }

    try {
      setContentLoading(true);
      setContentStatus("");
      const response = await createAdminJobPost(jobForm);
      setJobPosts((current) => [response.data.job, ...current]);
      setJobForm(emptyJobForm);
      setShowJobForm(false);
      setContentMode("jobs");
      setContentStatus("Job post published.");
    } catch (error) {
      setContentStatus(error.response?.data?.message || "Unable to publish job post.");
    } finally {
      setContentLoading(false);
    }
  };

  const removeBlogPost = async (id) => {
    if (!canManageContent) {
      setContentStatus("You do not have access to manage content.");
      return;
    }

    if (!window.confirm("Delete this blog post?")) {
      return;
    }

    try {
      await deleteAdminBlogPost(id);
      setBlogPosts((current) => current.filter((post) => post._id !== id));
      setContentStatus("Blog post deleted.");
    } catch (error) {
      setContentStatus(error.response?.data?.message || "Unable to delete blog post.");
    }
  };

  const removeJobPost = async (id) => {
    if (!canManageContent) {
      setContentStatus("You do not have access to manage content.");
      return;
    }

    if (!window.confirm("Delete this job post?")) {
      return;
    }

    try {
      await deleteAdminJobPost(id);
      setJobPosts((current) => current.filter((job) => job._id !== id));
      setContentStatus("Job post deleted.");
    } catch (error) {
      setContentStatus(error.response?.data?.message || "Unable to delete job post.");
    }
  };

  const changeTestimonialStatus = async (id, nextStatus) => {
    if (!canManageContent) {
      setContentStatus("You do not have access to manage reviews.");
      return;
    }

    try {
      const response = await updateAdminTestimonialStatus(id, nextStatus);
      setTestimonials((current) =>
        current.map((item) => (item._id === id ? response.data.testimonial : item)),
      );
      setContentStatus("Review status updated.");
    } catch (error) {
      setContentStatus(error.response?.data?.message || "Unable to update review.");
    }
  };

  const removeTestimonial = async (id) => {
    if (!canManageContent) {
      setContentStatus("You do not have access to manage reviews.");
      return;
    }

    if (!window.confirm("Delete this review?")) {
      return;
    }

    try {
      await deleteAdminTestimonial(id);
      setTestimonials((current) => current.filter((item) => item._id !== id));
      setContentStatus("Review deleted.");
    } catch (error) {
      setContentStatus(error.response?.data?.message || "Unable to delete review.");
    }
  };

  const changeStatus = async (id, nextStatus) => {
    if (!canManageLeads) {
      setStatus("You do not have access to manage leads.");
      return;
    }

    try {
      const response = await updateSubmissionStatus(id, nextStatus);
      setSubmissions((current) =>
        current.map((item) => (item._id === id ? response.data.submission : item)),
      );
    } catch (error) {
      setStatus(error.response?.data?.message || "Unable to update status.");
    }
  };

  const refreshActiveSection = () => {
    if (activeSection === "leads") {
      loadSubmissions(activeLeadTab);
      return;
    }

    loadContent();
  };

  const logout = () => {
    localStorage.removeItem("nexdiff_admin_token");
    localStorage.removeItem("nexdiff_admin_user");
    navigate("/admin/login");
  };

  return (
    <main className="page-shell">
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="container-wide">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">{userRole} dashboard</p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                Manage NexDiff.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#101312]/60">
                Handle leads, applications, pricing requests, blog posts, and
                career openings.
              </p>
              {/* <p className="mt-2 text-sm font-semibold capitalize text-[#16837a]">
                Role: {userRole}
              </p> */}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={refreshActiveSection}>
                <RefreshCw size={17} />
                Refresh
              </Button>
              <Button onClick={logout}>
                <LogOut size={17} />
                Logout
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-3 rounded-lg border border-[#101312]/10 bg-white p-2 sm:grid-cols-2">
            {[
              {
                id: "leads",
                label: "Leads",
                detail: `${totalLeads} total records`,
                icon: LayoutDashboard,
              },
              {
                id: "content",
                label: "Content",
                detail: `${blogPosts.length} blogs · ${jobPosts.length} jobs · ${testimonials.length} reviews`,
                icon: FileText,
              },
            ]
              .filter(
                (section) =>
                  (section.id === "leads" && canManageLeads) ||
                  (section.id === "content" && canManageContent),
              )
              .map((section) => {
                const Icon = section.icon;

                return (
                  <button
                    type="button"
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition ${
                      activeSection === section.id
                        ? "border-[#101312] bg-[#101312] text-white"
                        : "border-transparent bg-[#f7f3ea] text-[#101312]"
                    }`}
                  >
                    <Icon size={19} />
                    <span>
                      <span className="block text-sm font-semibold">
                        {section.label}
                      </span>
                      <span className="mt-0.5 block text-xs opacity-65">
                        {section.detail}
                      </span>
                    </span>
                  </button>
                );
              })}
          </div>

          {activeSection === "leads" ? (
            <section className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {leadTabs.map((tab) => {
                  const Icon = tab.icon;
                  const count =
                    tab.id === "all" ? totalLeads : counts[tab.id] || 0;

                  return (
                    <button
                      type="button"
                      key={tab.id}
                      onClick={() => setActiveLeadTab(tab.id)}
                      className={`rounded-lg border p-4 text-left transition ${
                        activeLeadTab === tab.id
                          ? "border-[#101312] bg-[#101312] text-white"
                          : "border-[#101312]/10 bg-white text-[#101312]"
                      }`}
                    >
                      <Icon size={19} />
                      <span className="mt-4 block text-2xl font-semibold">
                        {count}
                      </span>
                      <span className="mt-1 block text-sm opacity-70">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 rounded-lg border border-[#101312]/10 bg-white p-4 lg:grid-cols-[1fr_180px]">
                <label className="relative block">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#101312]/36"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search name, email, phone, business, message"
                    value={leadSearch}
                    onChange={(event) => setLeadSearch(event.target.value)}
                    className="w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] py-3 pl-11 pr-4 outline-none focus:border-[#101312]"
                  />
                </label>
                <select
                  value={leadStatusFilter}
                  onChange={(event) => setLeadStatusFilter(event.target.value)}
                  className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 text-sm font-semibold outline-none focus:border-[#101312]"
                >
                  <option value="all">All status</option>
                  {leadStatuses.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              {status && (
                <div className="mt-6 rounded-lg border border-[#e05f2f]/20 bg-[#e05f2f]/10 px-4 py-3 text-sm font-medium text-[#9b3e1f]">
                  {status}
                </div>
              )}

              <div className="mt-5 grid gap-3">
                {loading ? (
                  <div className="light-card rounded-lg p-6 text-sm font-medium text-[#101312]/60">
                    Loading submissions...
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="light-card rounded-lg p-6 text-sm font-medium text-[#101312]/60">
                    No matching records found.
                  </div>
                ) : (
                  pagedLeads.map((submission) => {
                    const isExpanded = expandedLeadId === submission._id;

                    return (
                      <article
                        key={submission._id}
                        className="light-card rounded-lg p-4"
                      >
                        <div className="grid gap-4 lg:grid-cols-[1fr_170px_150px] lg:items-center">
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedLeadId(
                                isExpanded ? "" : submission._id,
                              )
                            }
                            className="min-w-0 text-left"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-lg bg-[#f7f3ea] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#101312]/62">
                                {submission.type}
                              </span>
                              <span
                                className={`rounded-lg border px-3 py-1 text-xs font-semibold ${statusStyles[submission.status] || statusStyles.closed}`}
                              >
                                {getStatusLabel(submission.status)}
                              </span>
                            </div>
                            <h2 className="mt-3 truncate text-lg font-semibold">
                              {getTitle(submission)}
                            </h2>
                            <p className="mt-1 truncate text-sm text-[#101312]/58">
                              {getLeadMeta(submission)}
                            </p>
                          </button>
                          <p className="text-sm font-medium text-[#101312]/52">
                            {new Date(submission.createdAt).toLocaleString()}
                          </p>
                          <select
                            value={submission.status}
                            onChange={(event) =>
                              changeStatus(submission._id, event.target.value)
                            }
                            className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 text-sm font-semibold outline-none"
                          >
                            {leadStatuses.map((item) => (
                              <option key={item.value} value={item.value}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {isExpanded && (
                          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                            {visibleFields[submission.type].map((field) => (
                              <div
                                key={field}
                                className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-4"
                              >
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#101312]/42">
                                  {labelMap[field] || field}
                                </p>
                                <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-[#101312]/76">
                                  {renderFieldValue(field, submission.data[field])}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </article>
                    );
                  })
                )}
              </div>

              <div className="mt-5">
                <Pagination
                  page={leadPage}
                  totalItems={filteredLeads.length}
                  onChange={setLeadPage}
                />
              </div>
            </section>
          ) : (
            <section className="mt-8">
              <div className="grid gap-3 rounded-lg border border-[#101312]/10 bg-white p-2 sm:grid-cols-2">
                {[
                  {
                    id: "blogs",
                    label: "Blog posts",
                    count: blogPosts.length,
                    icon: FileText,
                  },
                  {
                    id: "jobs",
                    label: "Career jobs",
                    count: jobPosts.length,
                    icon: BriefcaseBusiness,
                  },
                  {
                    id: "reviews",
                    label: "Reviews",
                    count: testimonials.length,
                    icon: MessageSquare,
                  },
                ].map((tab) => {
                  const Icon = tab.icon;

                  return (
                    <button
                      type="button"
                      key={tab.id}
                      onClick={() => setContentMode(tab.id)}
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 text-left transition ${
                        contentMode === tab.id
                          ? "border-[#101312] bg-[#101312] text-white"
                          : "border-transparent bg-[#f7f3ea] text-[#101312]"
                      }`}
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon size={18} />
                        <span className="text-sm font-semibold">
                          {tab.label}
                        </span>
                      </span>
                      <span className="text-sm font-semibold opacity-70">
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 rounded-lg border border-[#101312]/10 bg-white p-4 lg:grid-cols-[1fr_auto_auto]">
                <label className="relative block">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#101312]/36"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search title, category, location, description"
                    value={contentSearch}
                    onChange={(event) => setContentSearch(event.target.value)}
                    className="w-full rounded-lg border border-[#101312]/10 bg-[#f7f3ea] py-3 pl-11 pr-4 outline-none focus:border-[#101312]"
                  />
                </label>
                <Button variant="outline" onClick={loadContent}>
                  <RefreshCw size={17} />
                  Reload
                </Button>
                {contentMode !== "reviews" && (
                  <Button
                    onClick={() => {
                      if (contentMode === "blogs") {
                        setShowBlogForm((value) => !value);
                        return;
                      }

                      setShowJobForm((value) => !value);
                    }}
                  >
                    <Plus size={17} />
                    {contentMode === "blogs" ? "New Blog" : "New Job"}
                  </Button>
                )}
              </div>

              {contentStatus && (
                <div className="mt-6 rounded-lg border border-[#16837a]/20 bg-[#16837a]/10 px-4 py-3 text-sm font-medium text-[#0f5f58]">
                  {contentStatus}
                </div>
              )}

              {contentMode === "blogs" && showBlogForm && (
                <form
                  onSubmit={createBlogPost}
                  className="light-card mt-5 rounded-lg p-5"
                >
                  <div className="flex items-center gap-3">
                    <FileText size={21} className="text-[#16837a]" />
                    <h3 className="text-xl font-semibold">Add blog post</h3>
                  </div>
                  <div className="mt-5 grid gap-3">
                    <input
                      type="text"
                      placeholder="Blog title"
                      value={blogForm.title}
                      onChange={(event) =>
                        setBlogForm({ ...blogForm, title: event.target.value })
                      }
                      className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                    />
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Category"
                        value={blogForm.category}
                        onChange={(event) =>
                          setBlogForm({
                            ...blogForm,
                            category: event.target.value,
                          })
                        }
                        className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                      />
                      <input
                        type="url"
                        placeholder="Image URL"
                        value={blogForm.image}
                        onChange={(event) =>
                          setBlogForm({
                            ...blogForm,
                            image: event.target.value,
                          })
                        }
                        className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                      />
                    </div>
                    <textarea
                      rows="3"
                      placeholder="Short description"
                      value={blogForm.desc}
                      onChange={(event) =>
                        setBlogForm({ ...blogForm, desc: event.target.value })
                      }
                      className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                    />
                    <textarea
                      rows="8"
                      placeholder="Full blog content in Markdown"
                      value={blogForm.content}
                      onChange={(event) =>
                        setBlogForm({
                          ...blogForm,
                          content: event.target.value,
                        })
                      }
                      className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="mt-5 w-full"
                    disabled={contentLoading}
                  >
                    <Plus size={17} />
                    Publish Blog
                  </Button>
                </form>
              )}

              {contentMode === "jobs" && showJobForm && (
                <form
                  onSubmit={createJobPost}
                  className="light-card mt-5 rounded-lg p-5"
                >
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness size={21} className="text-[#16837a]" />
                    <h3 className="text-xl font-semibold">Add career job</h3>
                  </div>
                  <div className="mt-5 grid gap-3">
                    <input
                      type="text"
                      placeholder="Job title"
                      value={jobForm.title}
                      onChange={(event) =>
                        setJobForm({ ...jobForm, title: event.target.value })
                      }
                      className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                    />
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Job type"
                        value={jobForm.type}
                        onChange={(event) =>
                          setJobForm({ ...jobForm, type: event.target.value })
                        }
                        className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={jobForm.location}
                        onChange={(event) =>
                          setJobForm({
                            ...jobForm,
                            location: event.target.value,
                          })
                        }
                        className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                      />
                    </div>
                    <textarea
                      rows="7"
                      placeholder={"Role details, one point per line\nExample:\n- Build React dashboards\n- Skills: React, Tailwind, API integration\n- 1+ year experience preferred"}
                      value={jobForm.focus}
                      onChange={(event) =>
                        setJobForm({ ...jobForm, focus: event.target.value })
                      }
                      className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 outline-none focus:border-[#101312]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="mt-5 w-full"
                    disabled={contentLoading}
                  >
                    <Plus size={17} />
                    Publish Job
                  </Button>
                </form>
              )}

              <div className="mt-5 grid gap-3">
                {filteredContent.length === 0 ? (
                  <div className="light-card rounded-lg p-6 text-sm font-medium text-[#101312]/60">
                    No matching content found.
                  </div>
                ) : (
                  pagedContent.map((item) => (
                    <article key={item._id} className="light-card rounded-lg p-4">
                      {contentMode === "reviews" ? (
                        <div className="grid gap-4 lg:grid-cols-[1fr_170px_120px] lg:items-start">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-lg font-semibold leading-snug">{item.name}</p>
                              <span className={`rounded-lg border px-3 py-1 text-xs font-semibold ${
                                item.status === "approved"
                                  ? "border-[#16837a]/20 bg-[#16837a]/10 text-[#0f5f58]"
                                  : item.status === "rejected"
                                    ? "border-[#e05f2f]/20 bg-[#e05f2f]/10 text-[#9b3e1f]"
                                    : "border-[#f59e0b]/25 bg-[#f59e0b]/10 text-[#92400e]"
                              }`}>
                                {item.status}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-[#101312]/58">
                              {item.role} · {item.service} · {item.rating} stars
                            </p>
                            <p className="mt-3 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-3 text-sm leading-7 text-[#101312]/68">
                              {item.feedback}
                            </p>
                          </div>
                          <select
                            value={item.status}
                            onChange={(event) => changeTestimonialStatus(item._id, event.target.value)}
                            className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] px-4 py-3 text-sm font-semibold outline-none"
                          >
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </select>
                          <button
                            type="button"
                            onClick={() => removeTestimonial(item._id)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#e05f2f]/20 bg-white text-[#e05f2f]"
                            aria-label="Delete review"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      ) : (
                        <div className="grid gap-4 lg:grid-cols-[1fr_180px_52px] lg:items-start">
                          <div className="min-w-0">
                            <p className="text-lg font-semibold leading-snug">
                              {item.title}
                            </p>
                            <p className="mt-1 truncate text-sm text-[#101312]/58">
                              {contentMode === "blogs"
                                ? `${item.category} · /blog/${item.slug}`
                                : `${item.jobId || "No Job ID"} · ${item.type} · ${item.location}`}
                            </p>
                            {contentMode === "jobs" && (
                              <div className="mt-3 rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-3">
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#101312]/42">
                                  Role details
                                </p>
                                <ul className="mt-2 space-y-1.5">
                                  {getJobDetailLines(item.focus).slice(0, 4).map((line) => (
                                    <li key={line} className="flex gap-2 text-sm leading-6 text-[#101312]/68">
                                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16837a]" />
                                      <span>{line.replace(/^[-•]\s*/, "")}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          <p className="text-sm font-medium text-[#101312]/52">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </p>
                          <button
                            type="button"
                            onClick={() =>
                              contentMode === "blogs"
                                ? removeBlogPost(item._id)
                                : removeJobPost(item._id)
                            }
                            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#e05f2f]/20 bg-white text-[#e05f2f]"
                            aria-label={
                              contentMode === "blogs"
                                ? "Delete blog post"
                                : "Delete job post"
                            }
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      )}
                    </article>
                  ))
                )}
              </div>

              <div className="mt-5">
                <Pagination
                  page={contentPage}
                  totalItems={filteredContent.length}
                  onChange={setContentPage}
                />
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
