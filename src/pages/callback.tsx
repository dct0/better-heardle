import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Callback = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // check is query is empty, error otherwise
    if (!router.isReady) return;
    if (router.query.error || !router.query.code) {
      setError(true);
      setErrorMsg('Authorization failed/denied');
      return;
    }
    let { code, state } = router.query;

    if (window.localStorage.getItem('state') !== state) {
      setError(true);
      setErrorMsg('State mismatch');
    }

    if (Array.isArray(code)) code = code.join('');
    if (Array.isArray(state)) state = state.join('');

    const payload = {
      code,
      state: state || '',
    };

    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.status !== 200) {
        setError(true);
        setErrorMsg('Could not retrieve access token');
      }
      res.json().then((data) => {
        // save the entire token next time
        window.localStorage.setItem('access_token', data.access_token);
      });
    });

    router.push('/');
  }, [router.isReady, router.query]);

  return (
    <>{error ? `Not authorized: ${errorMsg}` : 'Redirecting you back...'}</>
  );
};

export default Callback;
