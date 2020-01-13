import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bf4ea74191aaa7f59c30727bb29530e0c8ee8aa1012c1c9223f8f9cbdf4c8d47"
  }
});
