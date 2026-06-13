import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001/api",
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
export const getAdminSubmissions = (type = "all") =>
  API.get("/admin/submissions", {
    params: type === "all" ? {} : { type },
  });
export const updateSubmissionStatus = (id, status) =>
  API.patch(`/admin/submissions/${id}/status`, { status });
