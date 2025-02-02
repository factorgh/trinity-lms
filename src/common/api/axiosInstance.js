import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://lms-final-repo.onrender.com",
  baseURL: "http://localhost:5000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("auth")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken?.token}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
