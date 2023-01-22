import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface LoginToken {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const axiosConfig = {
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.CLIENT_SECRET}`
      ).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const payload = new URLSearchParams({
    grant_type: 'authorization_code',
    code: req.body.code,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI || '',
  });

  axios
    .post('https://accounts.spotify.com/api/token', payload, axiosConfig)
    .then((r) => {
      if (r.status !== 200) {
        console.log('log');
        res.status(r.status).send({ message: "Spotify didn't like that" });
        return;
      }

      const token: LoginToken = r.data;

      res.status(200).json(token); // store this as a cookie instead
    });
};

export default handler;
