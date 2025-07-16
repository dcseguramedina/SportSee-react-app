import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/userSlice.js";
import DailyActivityChart from "../../components/dailyActivityChart/DailyActivityChart.jsx";
import AverageSessionsChart from "../../components/averageSessionsChart/AverageSessionsChart.jsx";
import ScoreChart from "../../components/scoreChart/ScoreChart.jsx";
import PerformanceChart from "../../components/performanceChart/PerformanceChart.jsx";
import KpisBadge from "../../components/kpisBadge/KpisBadge.jsx";
import energyImage from "../../assets/images/energy.svg";
import chickenImage from "../../assets/images/chicken.svg";
import appleImage from "../../assets/images/apple.svg";
import burgerImage from "../../assets/images/burger.svg";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    // Access the user slice from Redux (app dev)

    const dispatch = useDispatch();

    // Get currently selected user by ID
    const selectedUserId = useSelector((state) => state.user.selectedUserId);

    // Get user infos
    const user = useSelector((state) =>
        state.user.userList.find((u) => u.id === selectedUserId)
    );

    // Get activity sessions
    const activity = useSelector((state) =>
        state.user.activity[selectedUserId]?.sessions
    );

    // Get average sessions
    const averageSessions = useSelector((state) =>
        state.user.averageSessions[selectedUserId]?.sessions
    );

    // Get performance data
    const performanceData = useSelector((state) =>
        state.user.performance[selectedUserId]
    );

    return (
        <div className={styles.dashboardWrapper}>
            <div className={styles.dashboardHeader}>
                <div className={styles.dashboardTitle}>
                    <h1 className={styles.title}>
                        Bonjour <span>{user?.userInfos.firstName || 'Utilisateur'}</span>
                    </h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>

                {/* Static dropdowns for now */}
                <div className={styles.dashboardSelect}>
                    <label htmlFor="userSelect">Utilisateur</label>
                    <select
                        id="userSelect"
                        value={selectedUserId}
                        onChange={(e) => dispatch(selectUser(Number(e.target.value)))}>
                        <option value="">Sélectionner un utilisateur</option>
                        <option value="12">Utilisateur 12</option>
                        <option value="18">Utilisateur 18</option>
                    </select>

                    <label htmlFor="serviceSelect">Service</label>
                    <select id="serviceSelect">
                        <option value="">Sélectionner un service</option>
                        <option value="api">API Service</option>
                        <option value="mock">Mock Service</option>
                    </select>
                </div>
            </div>

            <div className={styles.dashboardContent}>
                <section className={styles.mainSection}>
                    {/* Charts Section */}
                    <div id="chart-daily" className={styles.mainChart}>
                        <DailyActivityChart data={activity} />
                    </div>

                    <div className={styles.chartsRow}>
                        <div id="chart-average-sessions" className={styles.chart}>
                            <AverageSessionsChart sessions={averageSessions} />
                        </div>
                        <div id="chart-performance" className={styles.chart}>
                            <PerformanceChart
                                data={performanceData?.data}
                                kind={performanceData?.kind}
                            />
                        </div>
                        <div id="chart-score" className={styles.chart}>
                            <ScoreChart score={user?.score ?? 0} />
                        </div>
                    </div>
                </section>

                <section className={styles.mainAside}>
                    {/* KPIs */}
                    <KpisBadge
                        id="badge-calories"
                        icon={energyImage}
                        alt="Icône de l'énergie"
                        bgClass={styles.badgeBgColoreRed}
                        value={user?.keyData.calorieCount ?? 0}
                        unit="kCal"
                        label="Calories"
                    />
                    <KpisBadge
                        id="badge-proteines"
                        icon={chickenImage}
                        alt="Icône de protéines"
                        bgClass={styles.badgeBgColoreBlue}
                        value={user?.keyData.proteinCount ?? 0}
                        unit="g"
                        label="Protéines"
                    />
                    <KpisBadge
                        id="badge-glucides"
                        icon={appleImage}
                        alt="Icône de glucides"
                        bgClass={styles.badgeBgColoreYellow}
                        value={user?.keyData.carbohydrateCount ?? 0}
                        unit="g"
                        label="Glucides"
                    />
                    <KpisBadge
                        id="badge-lipides"
                        icon={burgerImage}
                        alt="Icône de lipides"
                        bgClass={styles.badgeBgColorePink}
                        value={user?.keyData.lipidCount ?? 0}
                        unit="g"
                        label="Lipides"
                    />
                </section>
            </div>
        </div>
    );
};

export default Dashboard;

