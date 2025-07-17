// Handles preparation of radar chart from performance data
export class RadarChartDataModel {
    constructor(data) {
        this.performanceData = data.data.map((item) => {
            return {
                kind: this.convertKind(item.kind),
                value: item.value,
            }
        })
        this.changeOrder();
    };
    // Orders the items according to a fixed display order
    changeOrder() {
        const newKindItemOrder = [{ kind: 'Intensité' }, { kind: 'Vitesse' }, { kind: 'Force' }, { kind: 'Endurance' }, { kind: 'Energie' }, { kind: 'Cardio' }];
        this.performanceData = newKindItemOrder.map((item) => ({ ...item, ...this.performanceData.filter((d) => d.kind == item.kind)[0] }));
    };
    // Converts the API kind label to a display label
    convertKind(kindLabel) {
        const label = [
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité',
        ];
        return label[kindLabel - 1];
    }
}
