import axios from "axios";

export const api = axios.create({
  baseURL: process.env.PUBLIC_API_URL,

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },

  params: {
    api_key: process.env.PUBLIC_API_KEY,
    language: "pt-BR",
  },
});
