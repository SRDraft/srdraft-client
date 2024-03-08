import { useEffect } from 'react';
import { useMemo } from 'react';
import { discordLogin } from '../../../services/auth.service';
import useAuthStore from '@/store/auth.store';
import { Navigate } from 'react-router-dom';

const baseURL = 'http://localhost:5173';
const loginURL = `${baseURL}/auth/login`;
const responseType = 'token';

const discordAuthLink = `https://discord.com/api/oauth2/authorize?client_id=1203059422394318970&response_type=${responseType}&redirect_uri=${loginURL}&scope=identify
`;

function LoginPage() {
  const setUser = useAuthStore((state) => state.setUser);
  const discordToken = useMemo(
    () => new URLSearchParams(window.location.href).get('access_token'),
    []
  );

  useEffect(() => {
    const handleFetchDiscordUser = async () => {
      if (!discordToken) return;

      const resp = await discordLogin(discordToken);

      setUser(resp.user);
    };

    handleFetchDiscordUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discordToken]);

  if (discordToken) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login</h1>

      {/* login with discord button */}
      <div className="container">
        <a href={discordAuthLink}>
          <button>Login with Discord</button>
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
