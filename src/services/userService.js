import axiosClient from '../services/Caller.service.js';
import {BarChartDataModel} from '../models/BarChartData.model.js';
import {LineChartDataModel} from '../models/LineChartData.model.js';
import {RadarChartDataModel} from '../models/RadarChartData.model.js';
import {PieChartDataModel} from '../models/PieChartData.model.js';

// Fetch user data by their ID using the configured axios client
export const getUser = async (userId) => {
    return await axiosClient.get(`user/${userId}`);
};
// Fetch the activity data for a user and return it as a BarChartDataModel
export const getActivity = async (userId) => {
    try {
        // Send a GET request to `/user/{userId}/activity`
        const response = await axiosClient.get(`user/${userId}/activity`);
        // Check if the response was successful
        if (response.statusText.includes("OK")) {
            const data = response.data;
            // Check if the data object exists and has a 'data' property
            if (data && data.data) {
                // Return a new BarChartDataModel with the received data
                return new BarChartDataModel(data.data);
            }
        } else {
            // Throw an error if the API response is not valid
            throw new Error('No valid data returned from API.');
        }
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Rethrow the error so it can be handled further up the call stack
        throw error;
    }
};
// Fetch the average sessions data for a user and return it as a LineChartDataModel
export const getAverageSessions = async (userId) => {
    try {
        // Send a GET request to `/user/{userId}/average-sessions`
        const response = await axiosClient.get(`user/${userId}/average-sessions`);
        // Check if the response was successful
        if (response.statusText.includes("OK")) {
            const data = response.data;
            // Check if the data object exists and has a 'data' property
            if (data && data.data) {
                // Return a new LineChartDataModel with the received data
                return new LineChartDataModel(data.data);
            }
        } else {
            // Throw an error if the API response is not valid
            throw new Error('No valid data returned from API.');
        }
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Rethrow the error so it can be handled further up the call stack
        throw error;
    }
};
// Fetch the performance data for a user and return it as a RadarChartDataModel
export const getPerformance = async (userId) => {
    try {
        // Send a GET request to `/user/{userId}/performance`
        const response = await axiosClient.get(`user/${userId}/performance`);
        // Check if the response was successful
        if (response.statusText.includes("OK")) {
            const data = response.data;
            // Check if the data object exists and has a 'data' property
            if (data && data.data) {
                // Return a new RadarChartDataModel with the received data
                return new RadarChartDataModel(data.data);
            }
        } else {
            // Throw an error if the API response is not valid
            throw new Error('No valid data returned from API.');
        }
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Rethrow the error so it can be handled further up the call stack
        throw error;
    }
};
// Fetch the performance data for a user and return it as a RadarChartDataModel
export const getScore = async (userId) => {
    try {
        // Send a GET request to `/user/{userId}`
        const response = await axiosClient.get(`user/${userId}`);
        // Check if the response was successful
        if (response.statusText.includes("OK")) {
            const data = response.data;
            // Check if the data object exists and has a 'data' property
            if (data && data.data) {
                // Return a new PieChartDataModel with the received data
                return new PieChartDataModel(data.data);
            }
        } else {
            // Throw an error if the API response is not valid
            throw new Error('No valid data returned from API.');
        }
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Rethrow the error so it can be handled further up the call stack
        throw error;
    }
};
