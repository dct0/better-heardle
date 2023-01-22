import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // receive a token
  // here, our secret is stored server-side in an environment variable
  // token is to be stored in a cookie maybe?
  // send back
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' });
  }

  const axiosConfig = {
    headers: {
      Authorization: req.headers.authorization,
    },
  };

  try {
    const r = await axios.get(
      'https://api.spotify.com/v1/me/playlists',
      axiosConfig
    );

    if (r.status !== 200) {
      console.log('Could not get playlists');
      res.status(r.status).send({ message: "Spotify didn't like that" });
      return;
    }

    res.status(200).json(r.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status && error.response)
        res.status(error.status).json(error.response.data);
    } else {
      console.error(error);
      res.status(500).json(error);
    }
  }
};

export default handler;
