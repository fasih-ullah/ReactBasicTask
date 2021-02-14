import axios from 'axios';
import config from '../config';

console.log(config)
const instance = axios.create({
  baseURL: config.API_URL
});

// declare a request interceptor
instance.interceptors.request.use(config => {
    // perform a task before the request is sent
    config.headers["accept"] = "application/vnd.github.v3+json";
    return config;
  }, error => {
    // handle the error
    return Promise.reject(error);
  });
  
 // declare a response interceptor
 instance.interceptors.response.use((response) => {
   // if(response.status < 200 
        //)
  
    return response;
  }, error => {
    // handle the response error
    return Promise.reject(error);
  });

export default instance;