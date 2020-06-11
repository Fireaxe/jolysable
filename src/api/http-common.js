import axios from "axios";

export const HTTP = axios.create({
  baseURL: process.env.VUE_APP_ENDPOINT,
  headers: {
    "Content-Type": "application/hal+json",
    Accept: "application/vnd.api+json"
  },
  auth: {
    username: process.env.VUE_APP_ENDPOINT_NAME,
    password: process.env.VUE_APP_ENDPOINT_PASSWORD
  }
});
