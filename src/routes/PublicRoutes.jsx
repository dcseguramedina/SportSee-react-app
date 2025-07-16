import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import Dashboard from '../pages/dashboard/Dashboard.jsx';

// PublicRoutes defines the routing structure for publicly accessible pages in the app (no auth)
const PublicRoutes = () => {
    return (
        <Routes>
            {/* Parent route with a layout wrapper for consistent structure (header/footer) */}
            <Route path="/" element={<Layout />}>
                {/* Index route represents the default child route of "/" */}
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default PublicRoutes;
