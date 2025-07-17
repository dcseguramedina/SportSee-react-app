import axios from 'axios';
import { API_BASE_URL } from '../config/ServerApiConfig.js';

// Create an instance of Axios with a custom base URL
const axiosClient = axios.create({
    baseURL: API_BASE_URL
});

// Add a response interceptor to handle errors globally
axiosClient.interceptors.response.use(
    // If the response is successful, just return it as-is
    (response) => response,
    // If an error occurs
    (error) => {
        // Check if the error has a response from the server
        if (error.response) {
            if (error.response.status === 500) {
                console.log('Internal Server Error');
            }
            if (error.response.status === 404) {
                console.log('Not Found');
            }
        }
        // Reject the promise so the calling code can handle the error as well
        return Promise.reject(error);
    }
);

export default axiosClient;
