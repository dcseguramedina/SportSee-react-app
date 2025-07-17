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

// Main component to render the performance radar chart
const PerformanceChart = ({ data }) => {
    // If no sessions data is provided, or it's empty, display a message
    if (!data || data.length === 0 ) {
        return <p className={styles.noData}>Aucune donnée de performance.</p>;
    }

    return (
        <div className={styles.chartContainer}>
            {/* ResponsiveContainer makes the chart adapt to container size */}
            <ResponsiveContainer width="100%" height={250}>
                {/* RadarChart displays the performance data radially */}
                <RadarChart data={data}>
                    {/* PolarGrid renders the grid lines; radialLines set to false hides lines radiating outward */}
                    <PolarGrid radialLines={false} />
                    {/* PolarAngleAxis labels the axes around the chart using 'kind' from formatted data */}
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="#fff"
                        fontSize={14}
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
