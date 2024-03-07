import { Navigate, useRoutes } from 'react-router-dom';
import authRoutes from './auth.routes';

export default function Router() {
  // const pathAfterLogin = user.isAdmin ? '/admin' : '/home';

  return useRoutes([
    {
      path: '/',
      element: <Navigate to={'/auth/login'} replace />,
    },

    ...authRoutes,
  ]);
}
