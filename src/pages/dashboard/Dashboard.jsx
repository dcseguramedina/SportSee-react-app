import React, {useEffect, useState} from 'react';
import {getUser, getActivity, getAverageSessions, getPerformance, getScore} from '../../services/userService.js';
import {
    getMockUser,
    getMockActivity,
    getMockAverageSessions,
    getMockPerformance,
    getMockScore
} from '../../services/mockService.js';
import DailyActivityChart from '../../components/dailyActivityChart/DailyActivityChart.jsx';
import AverageSessionsChart from '../../components/averageSessionsChart/AverageSessionsChart.jsx';
import PerformanceChart from '../../components/performanceChart/PerformanceChart.jsx';
import ScoreChart from '../../components/scoreChart/ScoreChart.jsx';
import KpisBadge from '../../components/kpisBadge/KpisBadge.jsx';
import energyImage from '../../assets/images/energy.svg';
import chickenImage from '../../assets/images/chicken.svg';
import appleImage from '../../assets/images/apple.svg';
import burgerImage from '../../assets/images/burger.svg';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    // State hooks for the selected user ID and service
    const [selectedUserId, setSelectedUserId] = useState(18); // Default value
    const [selectedService, setSelectedService] = useState('api'); // Default value

    // State hooks for the selected user data
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState(null);
    const [averageSessions, setAverageSessions] = useState(null);
    const [performance, setPerformance] = useState(null);
    const [score, setScore] = useState(null);

    // Handler for user selection change
    const handleUserChange = (e) => {
        const userId = Number(e.target.value);
        setSelectedUserId(userId);
    };

    // Handler for service selection change
    const handleServiceChange = (e) => {
        const service = e.target.value;
        setSelectedService(service);
    };

    // Api service
    const callUserService = async (userId) => {
        try {
            // Fetch user data from Api
            const userRes = await getUser(userId);
            // Check if user data is valid
            if (!userRes || !userRes.data || !userRes.data.data) {
                // Reject if there's no valid user data
                throw new Error('API returned invalid user data');
            }
            // Set user state with actual user data (userRes.data.data)
            setUser(userRes.data.data);
            // Fetch other data in parallel
            const [activityRes, sessionsRes, perfRes, scoreRes] = await Promise.all([
                getActivity(userId),
                getAverageSessions(userId),
                getPerformance(userId),
                getScore(userId),
            ]);
            // Set respective states with the nested data
            setActivity(activityRes.activitySession);
            setAverageSessions(sessionsRes.averageSession);
            setPerformance(perfRes.performanceData);
            setScore(scoreRes.scoreData)
        } catch (error) {
            console.error("Error from API service:", error);
            // Throw error to trigger fallback in fetchUserData
            throw error;
        }
    };

    // MockService
    const callMockService = async (userId) => {
        try {
            // Fetch user data from mock
            const mockRes = await getMockUser(userId);
            // Set user state with actual user data (mockRes)
            setUser(mockRes);
            // Fetch other data in parallel
            const [activityMockRes, sessionsMockRes, perfMockRes, scoreMockRes] = await Promise.all([
                getMockActivity(userId),
                getMockAverageSessions(userId),
                getMockPerformance(userId),
                getMockScore(userId),
            ]);
            // Set respective states with the nested data
            setActivity(activityMockRes.activitySession);
            setAverageSessions(sessionsMockRes.averageSession);
            setPerformance(perfMockRes.performanceData);
            setScore(scoreMockRes.scoreData);
        } catch (error) {
            console.error("Erreur lors de la récupération des données mock:", error);
        }
    }

    // Fetch data when user/service changes
    const fetchUserData = async (userId) => {
        // If selected service different from api
        if (selectedService !== 'api') {
            await callMockService(userId);
            return;
        }
        // Default: Try API version first
        // Fallback to mock version
        try {
            await callUserService(userId);
        } catch (error) {
            console.error("API request failed, falling back to mock data...", error);
            setSelectedService('mock');
            await callMockService(userId);
        }
    };

    useEffect(() => {
        fetchUserData(selectedUserId);
    }, [selectedUserId, selectedService]);

    return (
        <div className={styles.dashboardWrapper}>
            <div className={styles.dashboardHeader}>
                <div className={styles.dashboardTitle}>
                    <h1 className={styles.title}>
                        Bonjour <span>{user?.userInfos.firstName || ''}</span>
                    </h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>

                <div className={styles.dashboardSelect}>
                    <label htmlFor="userSelect">Utilisateur</label>
                    <select
                        id="userSelect"
                        value={selectedUserId}
                        onChange={handleUserChange}
                    >
                        <option value="">Sélectionner un utilisateur</option>
                        <option value="12">Utilisateur 12</option>
                        <option value="18">Utilisateur 18</option>
                    </select>

                    <label htmlFor="serviceSelect">Service</label>
                    <select
                        id="serviceSelect"
                        value={selectedService}
                        onChange={handleServiceChange}
                    >
                        <option value="">Sélectionner un service</option>
                        <option value="api">API Service</option>
                        <option value="mock">Mock Service</option>
                    </select>
                </div>
            </div>

            <div className={styles.dashboardContent}>
                <section className={styles.mainSection}>
                    <div id="chart-daily" className={styles.mainChart}>
                        <DailyActivityChart data={activity}/>
                    </div>

                    <div className={styles.chartsRow}>
                        <div id="chart-average-sessions" className={styles.chart}>
                            <AverageSessionsChart sessions={averageSessions}/>
                        </div>
                        <div id="chart-performance" className={styles.chart}>
                            <PerformanceChart data={performance}/>
                        </div>
                        <div id="chart-score" className={styles.chart}>
                            <ScoreChart score={score}/>
                        </div>
                    </div>
                </section>

                <section className={styles.mainAside}>
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
