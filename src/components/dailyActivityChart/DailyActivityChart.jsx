import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import styles from './DailyActivityChart.module.css';

// Main component to render the daily activity bar chart
const DailyActivityChart = ({ data }) => {
    // If no activity data is provided, or it's empty, display a message
    if (!data || data.length === 0) {
        return <p className={styles.noData}>Aucune donnée pour l'activité quotidienne.</p>;
    }

    return (
        <div className={styles.chartContainer}>
            {/* Chart title */}
            <h2 className={styles.chartTitle}>Activité quotidienne</h2>
            {/* ResponsiveContainer makes the chart adapt to container size */}
            <ResponsiveContainer width="100%" height={250}>
                {/* BarChart component renders the bar chart using provided data */}
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barGap={8}
                >
                    {/* CartesianGrid adds a grid to the chart, vertical lines disabled */}
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickFormatter={(value) => new Date(value).getDate()}
                        tickLine={false}
                        dy={10}
                    />
                    <YAxis
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tickCount={4}
                    />
                    {/* Tooltip displays data on hover with custom styling */}
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#e60000',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                        }}
                        // Custom formatter for tooltip text: adds units
                        formatter={(value, name) =>
                            name === 'kilogram'
                                ? [`${value}kg`, 'Poids']
                                : [`${value}Kcal`, 'Calories brûlées']
                        }
                    />
                    {/* Legend displays which color corresponds to which data */}
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        height={36}
                    />
                    {/* Bar for kilograms (weight), dark gray fill */}
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[0, 0, 0, 0]}
                        name="Poids (kg)"
                    />
                    {/* Bar for calories burned, red fill */}
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        radius={[0, 0, 0, 0]}
                        name="Calories brûlées (Kcal)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyActivityChart;
