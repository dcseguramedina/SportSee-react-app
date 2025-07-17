import data from '../data/data.json'
import { BarChartDataModel } from "../models/BarChartData.model.js";
import { LineChartDataModel } from "../models/LineChartData.model.js";
import { RadarChartDataModel } from "../models/RadarChartData.model.js";

export const getMockUser = async (userId) => {
    return data.users.find((user) => user.id === userId) ?? null;
};

export const getMockActivity = async (userId) => {
    try {
        const response = data.activity[userId];
        if (!response) throw new Error(`No activity found for user ${userId}`);

        return new BarChartDataModel(response);

    } catch (error) {
        console.error('Error fetching activity data:', error);
        throw error;
    }
};

export const getMockAverageSessions = async (userId) => {
    try {
        const response = data.averageSessions[userId];
        if (!response) throw new Error(`No average sessions found for user ${userId}`);

        return new LineChartDataModel(response);

    } catch (error) {
        console.error('Error fetching average sessions data:', error);
        throw error;
    }
};

export const getMockPerformance = async (userId) => {
    try {
        const response = data.performance[userId];
        if (!response) throw new Error(`No performance data found for user ${userId}`);

        return new RadarChartDataModel(response);

    } catch (error) {
        console.error('Error fetching performance data:', error);
        throw error;
    }
};
