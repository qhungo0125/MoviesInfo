import axios from 'axios';
import queryString from 'query-string';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: 
  process.env.REACT_APP_API_KEY==="false"?
  process.env.REACT_APP_API_ENDPOINT:
  process.env.REACT_APP_API_ENDPOINT_REAL
  ,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {
    serialize: params => queryString.stringify(params),
    // indexes: false
  }
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});

export default axiosClient;