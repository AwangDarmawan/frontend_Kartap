import axios from "axios";
import { toast } from "react-toastify";

/* ============ */
/* === AUTH PERSONALIA=== */
/* ============ */
const baseUrl = import.meta.env.VITE_BASE_URL;
export const loginPersonalia = async (username, password) => {
    try {
        console.log("Sending request...");
        const response = await axios.post(`${baseUrl}/api/v1/login`, {
        username: username ,
        password: password,
      });
      const { token } = response.data;
      toast.success(response.data.message);
      console.log("token");
      return { token };
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
        console.log("Salah");
      }
      return {};
    }
  };