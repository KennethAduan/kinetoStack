import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem("token");
          window.location.href = "/login";
          break;
        case 403:
          console.error(
            "Forbidden: You don't have permission to access this resource"
          );
          break;
        case 404:
          console.error("Not Found: The requested resource was not found");
          break;
        case 500:
          console.error("Server Error: Something went wrong on the server");
          break;
        default:
          console.error("An error occurred:", error.message);
      }
    } else if (error.request) {
      console.error("Network Error: Please check your internet connection");
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
