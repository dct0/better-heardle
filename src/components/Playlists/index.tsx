import type { Dispatch, MutableRefObject, SetStateAction } from 'react';

import type { PlaylistOverview } from '@/utils/types';

import Playlist from './playlist';

interface PlaylistsProps {
  playlists: MutableRefObject<any>;
  currPlaylistID: string;
  setCurrPlaylistID: Dispatch<SetStateAction<string>>;
}

const Playlists = ({
  playlists,
  currPlaylistID,
  setCurrPlaylistID,
}: PlaylistsProps) => {
  return (
    <div className="grid grid-cols-fit-sm gap-4">
      {playlists.current.map((p: PlaylistOverview) => {
        return (
          <Playlist
            key={p.id}
            id={p.id}
            coverURL={p.images[0]?.url}
            playlistURL={p.external_urls.spotify}
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
