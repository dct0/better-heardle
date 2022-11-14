import type { SyntheticEvent } from 'react';
import { FaSpotify } from 'react-icons/fa';

import { objectToQuery } from '@/utils/utils';

// eslint-disable-next-line @typescript-eslint/naming-convention

const LoginButton = () => {
  const handleClick = (event: SyntheticEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();

    const state = 'test';
    window.localStorage.setItem('state', state);

    const query = {
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID || '',
      scope: process.env.NEXT_PUBLIC_SCOPE || '',
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI || '',
      state,
    };

    window.location.replace(
      `https://accounts.spotify.com/authorize?${objectToQuery(query)}`
    );
  };
  return <FaSpotify className="icon" onClick={handleClick} />;
};

export default LoginButton;
