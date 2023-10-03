// import api from "../../index";
import http from "../../http-common";

const API_URL = process.env.VUE_APP_API_URL || 'localhost:3000';

export default {
  post(data) {
    return http.post(`${API_URL}/${data.route}`, data.params);
  },

  get(data) {
    return http.get(`${API_URL}/${data.route}`);
  },
};