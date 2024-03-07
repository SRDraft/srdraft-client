import { Navigate, useRoutes } from 'react-router-dom';
import authRoutes from './auth.routes';
import Dashboard from '@/views/Dashboard.view';
import AuthGuard from '@/guards/AuthGuard';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={'/auth/login'} replace />,
    },

    {
      path: '/dashboard',
      element: (
        <AuthGuard>
          <Dashboard />
        </AuthGuard>
      ),
    },

    ...authRoutes,
  ]);
}
