import axios from "axios";
// import { token } from "./token";

const BASE_URL = "http://216.250.9.249:5001";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,

  headers: {
    // Authorization: "Bearer " + token(),
    "Content-Type": "application/json",
    Accept: "*/*",
    // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwibmFtZSI6IktlcmltIiwiaWF0IjoxNjE2NDUwNjU3fQ.v8iyHYmwNlKVhLUA7LzxybICB8zzbVjRyXeFZbV7IPw'
  },
});

export { BASE_URL, axiosInstance };