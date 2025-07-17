import axiosClient from '../services/Caller.service.js';
import {BarChartDataModel} from "../models/BarChartData.model.js";
import {LineChartDataModel} from "../models/LineChartData.model.js";
import {RadarChartDataModel} from "../models/RadarChartData.model.js";

export const getUser = async (userId) => {
    return await axiosClient.get(`user/${userId}`);
}

export const getActivity = async (userId) => {
    try {
        const response = await axiosClient.get(`user/${userId}/activity`);

        if (response.statusText.includes("OK")) {
            const data = response.data;

            if (data && data.data) {
                return new BarChartDataModel(data.data);
            }
        } else {
            throw new Error('No valid data returned from API.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getAverageSessions = async (userId) => {
    try {
        const response = await axiosClient.get(`user/${userId}/average-sessions`);

        if (response.statusText.includes("OK")) {
            const data = response.data;

            if (data && data.data) {
                return new LineChartDataModel(data.data);
            }
        } else {
            throw new Error('No valid data returned from API.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getPerformance = async (userId) => {
    try {
        const response = await axiosClient.get(`user/${userId}/performance`);
        if (response.statusText.includes("OK")) {
            const data = response.data;

            if (data && data.data) {
                return new RadarChartDataModel(data.data);
            }
        } else {
            throw new Error('No valid data returned from API.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
