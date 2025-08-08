import data from '../data/data.json'
import { BarChartDataModel } from '../models/BarChartData.model.js';
import { LineChartDataModel } from '../models/LineChartData.model.js';
import { RadarChartDataModel } from '../models/RadarChartData.model.js';
import {PieChartDataModel} from '../models/PieChartData.model.js';

// Retrieve a mock user by their ID from the local `data.users` array
export const getMockUser = async (userId) => {
    // Find and return the user object with matching ID, or return null if not found
    return data.users.find((user) => user.id === userId) ?? null;
};
// Retrieve mock activity data for a user by their ID and convert it to a BarChartDataModel
export const getMockActivity = async (userId) => {
    try {
        // Get activity data from the local `data.activity` object using userId as key
        const response = data.activity[userId];
        // Throw an error if there is no data for the given userId
        if (!response) throw new Error('No data found');
        // Return a new BarChartDataModel with the received data
        return new BarChartDataModel(response);
    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Rethrow the error so it can be handled further up the call stack
        throw error;
    }
};
// Retrieve mock average sessions data for a user by their ID and convert it to a LineChartDataModel
export const getMockAverageSessions = async (userId) => {
    try {
        // Get average sessions data from the local `data.averageSessions` object using userId as key
        const response = data.averageSessions[userId];
        // Throw an error if there is no data for the given userId
        if (!response) throw new Error('No data found');
        // Return a new LineChartDataModel with the received data
        return new LineChartDataModel(response);

    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Rethrow the error so it can be handled further up the call stack
        throw error;
    }
};
// Retrieve mock performance data for a user by their ID and convert it to a RadarChartDataModel
export const getMockPerformance = async (userId) => {
    try {
        // Get performance data from the local `data.performance` object using userId as key
        const response = data.performance[userId];
        // Throw an error if there is no data for the given userId
        if (!response) throw new Error('No data found');
        // Return a new RadarChartDataModel with the received data
        return new RadarChartDataModel(response);

    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Rethrow the error so it can be handled further up the call stack
        throw error;
    }
};
// Retrieve mock score data for a user by their ID and convert it to a PieChartDataModel
export const getMockScore = async (userId) => {
    try {
        // Find the user object with matching ID
        const response = data.users.find((user) => user.id === userId) ?? null;
        // Throw an error if there is no data for the given userId
        if (!response) throw new Error('No data found');
        // Return a new RadarChartDataModel with the received data
        return new PieChartDataModel(response);

    } catch (error) {
        // Log any errors to the console
        console.error('Error fetching data:', error);
        // Rethrow the error so it can be handled further up the call stack
        throw error;
    }
};
