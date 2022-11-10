import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // receive a token
  // here, our secret is stored server-side in an environment variable
  // token is to be stored in a cookie maybe?
  // send back
  if (req.method !== 'GET') {
    res.status(400);
  }

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${req.body.token}`,
      'Content-Type': 'application/json',
    },
  };

  axios
    .get('https://api.spotify.com/v1/me/playlists', axiosConfig)
    .then((r) => {
      if (r.status !== 200) {
        console.error('Could not get playlists');
        // also error
      }

      console.log(r.data);
    });
  res.status(200).json({ name: 'Test' });
};

export default handler;
