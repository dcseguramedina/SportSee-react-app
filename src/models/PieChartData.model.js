// Handles preparation of pie chart from score data
export class PieChartDataModel {
    constructor(data) {
        this.scoreData =
            data.score ??
            data.todayScore ??
            0;
    };
}
