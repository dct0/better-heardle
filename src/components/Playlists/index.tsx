import { useRef, useState } from 'react';

import type { PlaylistOverview } from '@/utils/types';

import Playlist from './playlist';

const Playlists = () => {
  const [currPlaylistID, setCurrPlaylistID] = useState(
    window.localStorage.getItem('currPlaylistID')
  );
  const playlists = useRef(
    JSON.parse(window.localStorage.getItem('playlists') || '')
  );
  return (
    <div className="grid grid-cols-fit-sm gap-4">
      {playlists.current.map((p: PlaylistOverview) => {
        return (
          <Playlist
            key={p.id}
            id={p.id}
            coverURL={p.images[0]?.url}
            name={p.name}
            songCount={p.tracks.total}
            selected={currPlaylistID === p.id}
            setPlaylist={setCurrPlaylistID}
          />
        );
      })}
    </div>
  );
};

export default Playlists;
