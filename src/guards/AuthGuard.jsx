import { useEffect, useCallback, useState } from 'react';
import useAuthStore from '@/store/auth.store';

// routes
import { paths } from '@/routes/paths';
import { useRouter } from '@/hooks/useRouter';

export default function AuthGuard({ children }) {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuthStore();
  const [checked, setChecked] = useState(false);

  const startGuardCheck = useCallback(() => {
    if (isLoading) {
      return;
    }

    if (!isAuthenticated) {
      const searchParams = new URLSearchParams({
        returnTo: window.location.pathname,
      }).toString();

      const loginPath = paths.auth.login;

      const href = `${loginPath}?${searchParams}`;

      router.push(href);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, router, isLoading]);

  useEffect(() => {
    startGuardCheck();
  }, [startGuardCheck]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
