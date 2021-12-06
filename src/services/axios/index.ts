import axios from "axios";

const url = {
  dev: "http://localhost:3000/api",
  production: "https://www.uxarch.com.br/api",
};

let baseURL;

process.env.NODE_ENV === "development"
  ? (baseURL = url.dev)
  : (baseURL = url.production);

export const api = axios.create({
  baseURL,
});
