import type { Dispatch, SetStateAction } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

interface PlaylistProps {
  id: string;
  coverURL?: string;
  name: string;
  songCount: number;
  selected: boolean;
  setPlaylist: Dispatch<SetStateAction<string | null>>;
}

const Playlist = ({
  id,
  coverURL,
  name,
  songCount,
  selected,
  setPlaylist,
}: PlaylistProps) => {
  return (
    <>
      {/* Wrapper */}
      <span className="p-2 shadow rounded-md">
        <div className="flex flex-col">
          {/* Cover */}
          <div className="group relative aspect-square select-none">
            <div className="absolute w-full h-full opacity-0 rounded-md group-hover:opacity-50 bg-black" />

            <div
              className="icon-container-circle"
              onClick={() => setPlaylist(id)}
            >
              {selected ? (
                <FaPause className="icon-select" />
              ) : (
                <FaPlay className="icon-select" />
              )}
            </div>

            <img
              className="aspect-square w-full h-full object-cover object-center rounded-md"
              src={coverURL}
              alt={`Playlist '${name}'`}
            />
          </div>

          {/* Name TODO: make it link to the playlist */}
          <div className="text-xl font-bold text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer">
            {name}
          </div>
          {/* Song Count */}
          <div>{songCount}</div>
        </div>
      </span>
    </>
  );
};

export default Playlist;
