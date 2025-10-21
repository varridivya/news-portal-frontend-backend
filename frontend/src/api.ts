import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/news";
const api = axios.create({ baseURL: API_URL });
export const getLatestNews = (limit = 10) => api.get(`/latest?limit=${limit}`);
export const searchNews = (query: string) => api.get(`/search?q=${encodeURIComponent(query)}`);
