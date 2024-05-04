import axios from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { User } from "../../../../Domain/entities/User";

const ApiRiceRoll = axios.create({
  baseURL: "http://192.168.100.14:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiRiceRollForImage = axios.create({
  baseURL: "http://192.168.100.14:3000/api",
  headers: {
    "Content-Type": "multipart/form-data",
    accept: "application/json",
  },
});

//Interceptor funciona como el middleware
ApiRiceRoll.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("user");
  if (data) {
    const user: User = JSON.parse(data as any);
    config.headers!["Authorization"] = user?.session_token!;
  }
  return config;
});

ApiRiceRollForImage.interceptors.request.use(async (config) => {
    const data = await LocalStorage().getItem("user");
    if (data) {
      const user: User = JSON.parse(data as any);
      config.headers!["Authorization"] = user?.session_token!;
    }
    return config;
  });

export { ApiRiceRoll, ApiRiceRollForImage };
