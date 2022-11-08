import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { client_id, client_secret, redirect_uri } from '@/utils/config';

interface LoginToken {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  useEffect(() => {
    // check is query is empty, error otherwise
    if (!router.isReady) return;
    if (router.query.error || !router.query.code) {
      setError(true);
      return;
    }
    let { code, state } = router.query;
    // TODO need to check if state matches

    if (Array.isArray(code)) code = code.join('');
    if (Array.isArray(state)) state = state.join('');

    const axiosConfig = {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${client_id}:${client_secret}`
        ).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const payload = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri,
    });

    axios
      .post('https://accounts.spotify.com/api/token', payload, axiosConfig)
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
          return;
        }
        const token: LoginToken = res.data;

        window.localStorage.setItem('access_token', token.access_token || '');
      });

    router.push('/');
  }, [router.isReady, router.query]);

  return <>{error ? 'Not authorized' : 'Redirecting you back...'}</>;
};
export default Login;
