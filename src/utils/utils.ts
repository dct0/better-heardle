import type { PlaylistOverview } from './types';

export const objectToQuery = (object: Record<string, string>) => {
  return new URLSearchParams(object).toString();
};

export const queryToObject = (query: string) => {
  const parameters = new URLSearchParams(query);
  return Object.fromEntries(parameters.entries());
};

export const formatTime = (time: number) => {
  return `00:${String(Math.ceil(time)).padStart(2, '0')}`;
};

export const getPlaylists = () => {
  fetch('/api/playlists', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
    },
  }).then((res) =>
    res
      .json()
      .then((r) => {
        console.log(r);
        window.localStorage.setItem(
          'playlists',
          JSON.stringify(
            r.items.sort((a: PlaylistOverview, b: PlaylistOverview) => {
              return b.tracks.total - a.tracks.total;
            })
          )
        );
      })
      .catch((error) => {
        console.error(error);
      })
  );
};
