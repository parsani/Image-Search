import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wtNUNabVmWGetpkA74zXnggx7DYxA6tRs3JV0A2Of1U",
  },
});
