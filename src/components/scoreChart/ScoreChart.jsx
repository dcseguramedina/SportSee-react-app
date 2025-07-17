import React from 'react';
import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer
} from 'recharts';
import styles from './ScoreChart.module.css';

// Main component to render the radial bar chart to display a user's score
const ScoreChart = ({ score }) => {
    // Prepare the data array for the chart
    // Multiply score (0–1) by 100 to convert to percentage (0–100)
    const data = [
        {
            name: 'score',
            value: score * 100
        }
    ];

    return (
        <div className={styles.chartContainer}>
            {/* Chart title */}
            <h2 className={styles.chartTitle}>Score</h2>
            {/* ResponsiveContainer makes the chart adapt to container size */}
            <ResponsiveContainer width="100%" height={250}>
                {/* RadialBarChart component for rendering circular progress */}
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="90%"
                    barSize={12}
                    data={data}
                    startAngle={90}
                    endAngle={450}
                >
                    {/* PolarAngleAxis defines the angle axis for the radial chart */}
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    {/* RadialBar component renders the progress bar */}
                    <RadialBar
                        background
                        clockWise
                        dataKey="value"
                        cornerRadius={50}
                        fill="#E60000"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            {/* Text container below the chart showing numeric score */}
            <div className={styles.chartText}>
                <span className={styles.percentage}>{score * 100}%</span>
                <p>de votre objectif</p>
            </div>
        </div>
    );
};

export default ScoreChart;
