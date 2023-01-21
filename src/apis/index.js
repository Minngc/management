import axios from "axios";
import { useToken } from "../hooks/useUserProfile";

export const apis = axios.create({});

apis.interceptors.request.use((config) => {
  const [token] = useToken();
  config.headers["Token"] = token;
  return config;
});
