import axios from "axios";
import { toast } from "react-toastify";

export const loginUser = async (username, password) => {
    try {
      console.log("Loading");
      const response = await axios.post('/api/v1/login', {
        username: username,
        password: password,
      });
      console.log("Response received:", response.data);
      const { token } = response.data;
      return { token };
    } catch (error) {
      console.log("Error occurred:", error);
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  