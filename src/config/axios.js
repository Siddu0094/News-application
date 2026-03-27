import axios from "axios";

const api = axios.create({
    baseURL:'/api',
//timeout: 5000, //ms
})

export default api;