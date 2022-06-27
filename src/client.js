import axios from "axios";
import { useHistory } from "react-router-dom";

const instance = axios.create();

instance.interceptors.response.use(
  (successRes) => successRes,
  ({ response }) => {
    if (response?.status === 401) {
      console.log("removing item");
      localStorage.removeItem("token");
      // window.location.href = "/login";
    }
    return Promise.reject(response);
  }
);

export const client = instance;
