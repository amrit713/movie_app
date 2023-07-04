import axios from "axios";

export const key = process.env.BASE_URL;
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    accept: "application/json",
    Authorization: `${process.env.API_AUTH_KEY}`,
  },
});

export default instance;
