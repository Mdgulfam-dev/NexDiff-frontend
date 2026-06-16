import axios from "axios";

const defaultBaseURL =
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? "http://localhost:5001/api"
    : "https://nexdiff-backend.onrender.com/api";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || defaultBaseURL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("nexdiff_admin_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const sendContactForm = (data) => API.post("/contact", data);
export const sendCareerApplication = (data) => API.post("/careers", data);
export const sendPricingRequest = (data) => API.post("/pricing-requests", data);

export const adminLogin = (data) => API.post("/admin/login", data);
export const getAdminUsers = () => API.get("/admin/users");
export const createAdminUser = (data) => API.post("/admin/users", data);
export const updateAdminUser = (id, data) => API.patch(`/admin/users/${id}`, data);
export const deleteAdminUser = (id) => API.delete(`/admin/users/${id}`);
export const getAdminSubmissions = (type = "all", params = {}) =>
  API.get("/admin/submissions", {
    params: type === "all" ? params : { ...params, type },
  });
export const updateSubmissionStatus = (id, status) =>
  API.patch(`/admin/submissions/${id}/status`, { status });

export const getBlogPosts = (params = {}) => API.get("/blogs", { params });
export const getBlogPost = (slug) => API.get(`/blogs/${slug}`);
export const getJobPosts = (params = {}) => API.get("/jobs", { params });
export const getJobPost = (jobId) => API.get(`/jobs/${encodeURIComponent(jobId)}`);
export const getTestimonials = (params = {}) => API.get("/testimonials", { params });
export const submitTestimonial = (data) => API.post("/testimonials", data);

export const getAdminBlogPosts = (params = {}) => API.get("/admin/blogs", { params });
export const createAdminBlogPost = (data) => API.post("/admin/blogs", data);
export const updateAdminBlogPost = (id, data) => API.patch(`/admin/blogs/${id}`, data);
export const deleteAdminBlogPost = (id) => API.delete(`/admin/blogs/${id}`);

export const getAdminJobPosts = (params = {}) => API.get("/admin/jobs", { params });
export const createAdminJobPost = (data) => API.post("/admin/jobs", data);
export const updateAdminJobPost = (id, data) => API.patch(`/admin/jobs/${id}`, data);
export const deleteAdminJobPost = (id) => API.delete(`/admin/jobs/${id}`);

export const getAdminTestimonials = (params = {}) => API.get("/admin/testimonials", { params });
export const updateAdminTestimonialStatus = (id, status) =>
  API.patch(`/admin/testimonials/${id}/status`, { status });
export const deleteAdminTestimonial = (id) => API.delete(`/admin/testimonials/${id}`);
