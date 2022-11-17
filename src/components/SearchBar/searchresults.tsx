import type { Dispatch, SetStateAction } from 'react';
import { useContext } from 'react';

import { GameContext } from '@/context';

import SearchResult from './searchresult';

interface SearchResultsProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const SearchResults = ({
  visible,
  setVisible,
  search,
  setSearch,
}: SearchResultsProps) => {
  const { tracks } = useContext(GameContext);
  const handleClick = (title: string) => {
    setSearch(title);
    console.log(title);
    setVisible(false);
  };

  return (
    <ul
      className="z-10 absolute border border-black w-full bottom-10 bg-white rounded overflow-y-auto max-h-64"
      hidden={!visible}
    >
      {tracks &&
        tracks
          .filter((value) => {
            return (
              value.track?.name.toLowerCase().includes(search) &&
              value.track?.preview_url
            );
          })
          .map((r, i) => {
            return (
              <SearchResult
                key={i}
                title={r.track.name}
                handleClick={handleClick}
              />
            );
          })}
    </ul>
  );
};

export default SearchResults;
