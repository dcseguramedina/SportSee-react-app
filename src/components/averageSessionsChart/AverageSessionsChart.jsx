import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import styles from './AverageSessionsChart.module.css';

// Array mapping day numbers (1-7) to French day initials (L = Lundi, M = Mardi, etc.)
const dayMap = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                {/* Show session length followed by "min" */}
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

// Main component to render the average sessions line chart
const AverageSessionsChart = ({ sessions }) => {
    // If no sessions data is provided, or it's empty, display a message
    if (!sessions || sessions.length === 0) {
        return <p className={styles.noData}>Aucune donnée de session.</p>;
    }
    // Map numeric days (1–7) to short labels: L, M, M, J, V, S, D
    // This converts numeric days (1-7) to their respective initials for display on X axis
    const formattedData = sessions.map((session) => ({
        ...session,
        dayLabel: dayMap[session.day - 1],
    }));

    return (
        <div className={styles.chartContainer}>
            {/* Chart title */}
            <h2 className={styles.chartTitle}>Durée moyenne des sessions</h2>
            {/* ResponsiveContainer makes the chart adapt to container size */}
            <ResponsiveContainer width="100%" height={250}>
                { /* The LineChart component renders the line chart using provided data*/ }
                <LineChart
                    data={formattedData}
                    margin={{ top: 50, right: 10, left: 10, bottom: 0 }}
                >
                    <XAxis
                        dataKey="dayLabel"
                        axisLine={false}
                        tickLine={false}
                        stroke="rgba(255, 255, 255, 0.4)"
                    />
                    <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                    { /* Tooltip uses custom component to show session length on hover */ }
                    <Tooltip content={<CustomTooltip />} />
                    { /* Line representing the sessionLength values
                         - smooth "bump" curve
                         - semi-transparent white stroke
                         - no dots by default, but active dot highlighted in white */ }
                    <Line
                        type="bump"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 5, strokeWidth: 0, fill: 'white' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AverageSessionsChart;
