import axios from "axios";
import type { AxiosInstance } from "axios";
import { API_URL } from "./client_config";
import cors from "cors";

const HTTPClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    // exposedHeaders: "access_token"
  },
});


HTTPClient.interceptors.request.use(
  (config: any) => {
    // config.headers["Authorization"] = "tokentokentokentokentokentokenhhh";
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

export default HTTPClient;
