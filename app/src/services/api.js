import axios from 'axios';

const api = axios.create({
  // baseURL: "https://app-heroku-portal.herokuapp.com/portal-empreendedor/"
  baseURL: "http://localhost:3333"
  
});

export default api;