import { useCallback, useEffect } from 'react';
import { paths } from '@/routes/paths';
import { useRouter } from '@/hooks/useRouter';
import { useSearchParams } from '../hooks/useSearchParams';
import useAuthStore from '@/store/auth.store';

export default function GuestGuard({ children }) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo') || paths.dashboard.root;

  const { isAuthenticated } = useAuthStore();

  const startGuardCheck = useCallback(() => {
    if (isAuthenticated()) {
      router.replace(returnTo);
    }
  }, [isAuthenticated, returnTo, router]);

  useEffect(() => {
    startGuardCheck();
  }, [startGuardCheck]);

  return <>{children}</>;
}
