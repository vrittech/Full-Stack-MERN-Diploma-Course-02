import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // const URLS = []; // list of urls which use access token

    // if (URLS.include(config.url)) {
    //   config.headers = {
    //     Authorization: "Bearer ${token}",
    //   };
    // }
    console.log("REQUEST", config);
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("RESPONSE", response);

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
