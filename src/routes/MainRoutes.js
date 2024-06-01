import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

// Dashboard Routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardAnalytics = Loadable(lazy(() => import('views/dashboard/Analytics')));

// Maintenance Rounting
const ComingSoon = Loadable(lazy(() => import('views/pages/maintenance/ComingSoon')));
const UnderConstruction = Loadable(lazy(() => import('views/pages/maintenance/UnderConstruction')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/analytics',
            element: <DashboardAnalytics />
        },
        {
            path: '/on-progress/coming-soon',
            element: <ComingSoon />
        },
        {
            path: '/on-progress/under-construction',
            element: <UnderConstruction />
        }
    ]
};

export default MainRoutes;
