import axios from "axios";
import type { AxiosInstance } from "axios";
import { API_URL } from "./client_config";
import jwt_service from "@/http-common/jwt_service";
import {store} from "@/store";

const HTTPClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json"
  },
});


HTTPClient.interceptors.request.use(
  (config: any) => {
    if (store.getters.isAuthenticated) {
      config.headers["Authorization"] = "Bearer " + jwt_service.getToken();
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

export default HTTPClient;
