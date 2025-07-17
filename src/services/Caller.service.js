import axios from 'axios';
import { API_BASE_URL } from '../config/ServerApiConfig.js';

const axiosClient = axios.create({
    baseURL: API_BASE_URL
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            if (error.response.status === 500) {
                console.log('error serveur');
            }
            if (error.response.status === 404) {
                console.log('error des données');
            }
        }
        // Always reject so calling code can handle the error
        return Promise.reject(error);
    }
);

export default axiosClient;
