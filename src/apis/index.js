import axios from "axios";

export const apis = axios.create({});

apis.interceptors.request.use((config) => {
  config.headers["Token"] = localStorage.getItem("Token");
  return config;
});
