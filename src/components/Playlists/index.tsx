import { useRef } from 'react';

import type { PlaylistOverview } from '@/utils/types';

import Playlist from './playlist';

const Playlists = () => {
  const playlists = useRef(
    JSON.parse(window.localStorage.getItem('playlists') || '')
  );
  return (
    <div className="grid grid-cols-3 gap-4">
      {playlists.current.map((p: PlaylistOverview, i: number) => {
        return (
          <Playlist
            key={i}
            coverURL={p.images[0]?.url}
            name={p.name}
            songCount={p.tracks.total}
          />
        );
      })}
    </div>
  );
};

export default Playlists;
