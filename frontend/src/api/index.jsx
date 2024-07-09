import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-task-manager-34p5.onrender.com/api",
});
export default api;
