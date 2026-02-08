import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL,

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },

  params: {
    api_key: import.meta.env.PUBLIC_API_KEY,
    language: "pt-BR",
  },
});
