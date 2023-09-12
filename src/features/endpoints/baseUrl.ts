import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${
      localStorage.getItem("access_token") === undefined
        ? ""
        : localStorage.getItem("access_token")
    }`,
  },
  withCredentials: true,
});

export default instance;
