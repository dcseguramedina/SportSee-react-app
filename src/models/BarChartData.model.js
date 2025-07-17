// Handles preparation of bar chart from activity sessions data
export class BarChartDataModel {
    constructor(data) {
        this.activitySession = data.sessions.map((session) => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories,
        })) ?? [];
    };
}