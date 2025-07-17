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

    const renderCustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.customTooltip}>
                    <p className="label">{`${payload[0].value}kg`}</p>
                    <p className="label">{`${payload[1].value}Kcal`}</p>
                </div>
            )
        }
        return null
    }

    const renderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <ul className={styles.legendList}>
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} className={styles.legendItem}>
                        <span className={styles.legendCircle} style={{backgroundColor: entry.color,}}/>
                        {entry.value}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className={styles.chartContainer}>
            {/* Chart title */}
            <h2 className={styles.chartTitle}>Activité quotidienne</h2>
            {/* ResponsiveContainer makes the chart adapt to container size */}
            <ResponsiveContainer width="100%" height={280}>
                {/* BarChart component renders the bar chart using provided data */}
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    barGap={10}
                    barCategoryGap="38%"
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
                    <Tooltip content={renderCustomTooltip}/>
                    {/* Legend displays which color corresponds to which data */}
                    <Legend
                        content={renderCustomLegend}
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        height={50}
                    />
                    {/* Bar for kilograms (weight) */}
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[5, 5, 0, 0]}
                        name="Poids (kg)"
                    />
                    {/* Bar for calories burned */}
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        radius={[5, 5, 0, 0]}
                        name="Calories brûlées (Kcal)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyActivityChart;
