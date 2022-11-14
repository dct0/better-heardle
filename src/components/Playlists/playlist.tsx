interface PlaylistProps {
  coverURL?: string;
  name: string;
  songCount: number;
}

const Playlist = ({ coverURL, name, songCount }: PlaylistProps) => {
  return (
    <>
      {/* Wrapper */}
      <span className="p-2 shadow rounded-md">
        <div className="flex flex-col">
          {/* Cover */}
          <img
            className="aspect-square object-cover object-center bg-slate-400"
            src={coverURL}
            alt={`Playlist '${name}'`}
          />
          {/* Name */}
          <div className="text-xl font-bold text-ellipsis whitespace-nowrap overflow-hidden">
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
