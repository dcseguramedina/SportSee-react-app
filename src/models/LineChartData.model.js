// Handles preparation of line chart from average sessions data
export class LineChartDataModel {
    constructor(data) {
        this.averageSession = data.sessions.map((session) => ({
            day: session.day,
            sessionLength: session.sessionLength,
        })) ?? [];
    };
}
