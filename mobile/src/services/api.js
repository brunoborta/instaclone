import axios from 'axios';

//10.0.3.2 no genymotion
//10.0.2.2 no android
const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api;