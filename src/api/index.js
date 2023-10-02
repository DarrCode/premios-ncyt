import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

let instance = axios.create({
  withCredentials: true,
});

instance.interceptors.request.use(request => {
  console.log(request.headers);
  request.headers.accept = 'application/json';
  request.headers.ContentType = 'application/json';
  // request.headers.common = { 'Authorization': `bearer ${sessionStorage.token}` }
  // console.log(sessionStorage.token);
  return request;
});

// instance.interceptors.response.use(
//     response => {
//         if (response.data.status) {
//             if (response.data.status == 121 || response.data.status == 122) {
//                 sessionStorage.removeItem('user');
//                 window.location = 'login';
//             }
//         }
//         return response;
//     },
//     error => {
//         if (error.response.status === 401) {
//             sessionStorage.removeItem('user');
//             window.location = 'login';
//         }

//         return Promise.reject(error);
//     }
// );


export default instance;