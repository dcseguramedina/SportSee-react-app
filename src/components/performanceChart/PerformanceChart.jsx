import React from 'react';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer
} from 'recharts';
import styles from './PerformanceChart.module.css';

// Map of performance metric keys to their French labels for display
const kindLabels = {
    cardio: 'Cardio',
    energy: 'Énergie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
};

// Main component to render the performance radar chart
// It accepts `data` and `kind` as props:
// `data`: array of objects [{ value, kind }] representing score values and corresponding kind IDs
// `kind`: object mapping kind IDs to string keys indicating performance metrics
const PerformanceChart = ({ data, kind }) => {
    // If no sessions data is provided, or it's empty, display a message
    if (!data || !kind) {
        return <p className={styles.noData}>Aucune donnée de performance.</p>;
    }

    // Map kind numbers to labels: [{value: 200, kind: 1} → {kind: "Cardio", value: 200}]
    // Each item replaces numeric kind with French label for readability
    const formattedData = data.map((item) => ({
        value: item.value,
        kind: kindLabels[kind[item.kind]] || kind[item.kind] || 'Inconnu',
    }));

    return (
        <div className={styles.chartContainer}>
            {/* ResponsiveContainer makes the chart adapt to container size */}
            <ResponsiveContainer width="100%" height={250}>
                {/* RadarChart displays the performance data radially */}
                <RadarChart data={formattedData}>
                    {/* PolarGrid renders the grid lines; radialLines set to false hides lines radiating outward */}
                    <PolarGrid radialLines={false} />
                    {/* PolarAngleAxis labels the axes around the chart using 'kind' from formatted data */}
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="#fff"
                        fontSize={12}
                    />
                    {/* PolarRadiusAxis defines circular grid lines; hidden here by disabling ticks and axis line */}
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    {/* Radar renders the filled area and border indicating the performance values */}
                    <Radar
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceChart;
