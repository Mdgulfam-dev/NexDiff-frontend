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
export const getAdminSubmissions = (type = "all") =>
  API.get("/admin/submissions", {
    params: type === "all" ? {} : { type },
  });
export const updateSubmissionStatus = (id, status) =>
  API.patch(`/admin/submissions/${id}/status`, { status });

export const getBlogPosts = () => API.get("/blogs");
export const getBlogPost = (slug) => API.get(`/blogs/${slug}`);
export const getJobPosts = () => API.get("/jobs");
export const getTestimonials = () => API.get("/testimonials");
export const submitTestimonial = (data) => API.post("/testimonials", data);

export const getAdminBlogPosts = () => API.get("/admin/blogs");
export const createAdminBlogPost = (data) => API.post("/admin/blogs", data);
export const deleteAdminBlogPost = (id) => API.delete(`/admin/blogs/${id}`);

export const getAdminJobPosts = () => API.get("/admin/jobs");
export const createAdminJobPost = (data) => API.post("/admin/jobs", data);
export const deleteAdminJobPost = (id) => API.delete(`/admin/jobs/${id}`);

export const getAdminTestimonials = () => API.get("/admin/testimonials");
export const updateAdminTestimonialStatus = (id, status) =>
  API.patch(`/admin/testimonials/${id}/status`, { status });
export const deleteAdminTestimonial = (id) => API.delete(`/admin/testimonials/${id}`);
