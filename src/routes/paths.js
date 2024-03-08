const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  ADMIN: '/admin',
};

export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
    verify: `${ROOTS.AUTH}/verify`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
  },

  dashboard: {
    root: ROOTS.DASHBOARD,
  },

  admin: {
    root: ROOTS.ADMIN,
  },
};
