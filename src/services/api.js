import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yuridevradar.herokuapp.com/',
  // baseURL: 'http://192.168.0.108:3333',
});

export default api;
