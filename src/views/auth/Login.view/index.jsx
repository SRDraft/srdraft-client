import { useEffect } from 'react';
import { useMemo } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:5173';
const loginURL = `${baseURL}/auth/login`;
const responseType = 'token';

const discordAuthLink = `https://discord.com/api/oauth2/authorize?client_id=1203059422394318970&response_type=${responseType}&redirect_uri=${loginURL}&scope=identify
`;

function LoginPage() {
  console.log('hash: ' + window.location.hash);
  const discordToken = useMemo(
    () => new URLSearchParams(window.location.href).get('access_token'),
    []
  );

  useEffect(() => {
    const handleFetchDiscordUser = async () => {
      if (!discordToken) return;

      // const resp = await fetch('https://discord.com/api/users/@me', {
      //   headers: {
      //     authorization: `Bearer ${token}`,
      //   },
      // })

      // const data = await resp.json();
      const resp = await axios.get('https://discord.com/api/users/@me', {
        headers: {
          authorization: `Bearer ${discordToken}`,
        },
      });

      const discordUser = resp.data;
      window.discordUser = discordUser;
      console.log('discordUser:', discordUser);
    };

    handleFetchDiscordUser();
  }, [discordToken]);

  if (discordToken) {
    return <div>Discord Token {discordToken}</div>;
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
