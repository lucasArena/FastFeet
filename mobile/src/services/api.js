import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.3.2:3333',
});

api.interceptors.response.use(config => {
  const { data } = config;
  return data;
});

export default api;
