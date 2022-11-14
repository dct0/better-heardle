import type { Dispatch, SetStateAction } from 'react';

import SearchResult from './searchresult';

const results = [
  { title: 'test1' },
  { title: 'test2' },
  { title: 'test3' },
  { title: 'test4' },
  { title: 'test5' },
  { title: 'test6' },
  { title: 'test7' },
  { title: 'test8' },
];

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
      {results
        .filter((value) => {
          return value.title.toLowerCase().includes(search);
        })
        .map((r, i) => {
          return (
            <SearchResult key={i} title={r.title} handleClick={handleClick} />
          );
        })}
    </ul>
  );
};

export default SearchResults;
