import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import GuestGuard from '../guards/GuestGuard';
import LoginPage from '../views/auth/Login.view';
// const LoginPage = lazy(() => import('src/views/auth/Login.view/index.jsx'));

const authPaths = {
  path: '',
  element: (
    <GuestGuard>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </GuestGuard>
  ),

  children: [
    {
      path: 'login',
      element: <LoginPage />,
    },
  ],
};

const authRoutes = [
  {
    path: 'auth',
    children: [authPaths],
  },
];

export default authRoutes;
