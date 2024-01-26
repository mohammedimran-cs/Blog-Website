import axios from "axios";

// Create an instance of Axios with a base URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // Replace with your actual API base URL
});

export default axiosInstance;
