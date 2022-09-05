import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import AuthGuard from '../_guards/AuthGuard';
import GuestGuard from '../_guards/GuestGuard';
import DashboardLayout from '../_layouts/dashboard';

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: (
                <AuthGuard>
                    <DashboardLayout />
                </AuthGuard>
            ),
            children: [
                {
                    path: '',
                    element: (
                        <Suspense fallback={"Loading page"}>
                            <Dashboard />
                        </Suspense>
                    ),
                }
            ],
        },
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: (
                        <GuestGuard>
                            <Suspense fallback={"Loading page"}>
                                <Login />
                            </Suspense>
                        </GuestGuard>
                    ),
                }
            ],
        }
    ])
}

// AUTHENTICATION
const Login = lazy(() => import('../pages/auth/Login'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
