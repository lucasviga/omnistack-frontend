import axios from 'axios';

const api = axios.create({
    baseURL: 'https://boxdrive-backend.herokuapp.com'
});

export default api;