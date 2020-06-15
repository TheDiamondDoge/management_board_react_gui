import axios from 'axios';

var axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
});

export default axiosInstance;