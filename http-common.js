import axios from 'axios'

const config = {
  baseURL: `${process.env.VUE_APP_API_URL}/`,
  headers: {
    'Content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `bearer ${sessionStorage.token}` 
  }
}
const instance = axios.create(config);

instance.interceptors.request.use(function (config) {
  const token = sessionStorage.token;
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});


export default instance;