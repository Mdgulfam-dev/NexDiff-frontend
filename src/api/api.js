import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const sendContactForm = (data) => API.post("/contact", data);
