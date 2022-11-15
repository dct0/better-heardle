import type { Dispatch, SetStateAction } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

interface PlaylistProps {
  id: string;
  coverURL?: string;
  playlistURL: string;
  name: string;
  songCount: number;
  selected: boolean;
  setPlaylist: Dispatch<SetStateAction<string | null>>;
}

const Playlist = ({
  id,
  coverURL,
  playlistURL,
  name,
  songCount,
  selected,
  setPlaylist,
}: PlaylistProps) => {
  return (
    <>
      {/* Wrapper */}
      <span className="p-2 shadow rounded-md hover:scale-105 transition-transform ease-linear [-webkit-backface-visibility:hidden]">
        <div className="flex flex-col">
          {/* Cover */}
          <div className="group relative aspect-square select-none">
            <div className="absolute w-full h-full opacity-0 rounded-md group-hover:opacity-50 bg-black transition-opacity ease-linear" />

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
          <div className="text-ellipsis whitespace-nowrap overflow-hidden">
            <a
              className="text-xl font-bold cursor-pointer"
              href={playlistURL}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          </div>

          {/* Song Count */}
          <div>{`${songCount} song${songCount === 1 ? '' : 's'}`}</div>
        </div>
      </span>
    </>
  );
};

export default Playlist;
