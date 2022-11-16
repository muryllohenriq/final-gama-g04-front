import axios from "axios";

const api = axios.create({
  baseURL: "https://final-gama-g04-back-production.up.railway.app/",
});

export default api;