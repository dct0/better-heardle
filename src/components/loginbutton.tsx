import type { SyntheticEvent } from 'react';
import { FaSpotify } from 'react-icons/fa';

import { client_id, redirect_uri, scope } from '@/utils/config';
import { objectToQuery } from '@/utils/utils';

// eslint-disable-next-line @typescript-eslint/naming-convention

const LoginButton = () => {
  const handleClick = (event: SyntheticEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();

    const state = 'test';

    const query = {
      response_type: 'code',
      client_id,
      scope,
      redirect_uri,
      state,
    };

    window.location.replace(
      `https://accounts.spotify.com/authorize?${objectToQuery(query)}`
    );
  };
  return <FaSpotify className="m-2 cursor-pointer" onClick={handleClick} />;
};

export default LoginButton;
