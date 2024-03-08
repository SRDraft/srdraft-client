import { api } from './apiConfig';

export const discordLogin = async (discordAccessToken) => {
  try {
    const resp = await api.post('/auth/discord-login', {
      discordAccessToken,
    });
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
