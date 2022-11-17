import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { SpotifyTrack } from '@/utils/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' });
  }

  const axiosConfig = {
    headers: {
      Authorization: req.headers.authorization,
    },
    params: {
      fields: 'items,next', // TODO: only get required info
      limit: 50,
    },
  };

  try {
    let nextURL:
      | string
      | null = `https://api.spotify.com/v1/playlists/${req.query.playlistID}/tracks`;
    const items = [];
    while (nextURL) {
      // eslint-disable-next-line no-await-in-loop
      const r: AxiosResponse = await axios.get(nextURL, axiosConfig);

      if (r.status !== 200) {
        res.status(r.status);
        break;
      }
      // need to check for ratelimiting

      nextURL = r.data.next;
      let t: SpotifyTrack[] = r.data.items;
      if (t) {
        t = t.filter((e) => {
          return e.track.preview_url && !e.is_local;
        });
        items.push(...t);
      }
    }

    res.status(200).json(items);
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
