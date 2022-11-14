import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

import SearchResults from './searchresults';

interface SearchBarProps {
  handleSubmit: (arg: string) => void;
}

const SearchBar = ({ handleSubmit }: SearchBarProps) => {
  const [search, setSearch] = useState('');
  const [showable, setShowable] = useState(false); // pretty sure i don't need this
  const [showResults, setShowResults] = useState(false);

  const handleFocus = () => {
    console.log('show');
    if (showable) setShowResults(true);
  };

  const handleBlur = () => {
    console.log('hide');
    setShowResults(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    if (showable) setShowResults(true);
  };

  useEffect(() => {
    if (search.trim().length === 0) {
      setShowResults(false);
      setShowable(false);
    } else {
      setShowResults(true);
      setShowable(true);
    }
  }, [search]);

  return (
    <div className="relative w-full mx-auto border rounded border-black h-full">
      <SearchResults
        search={search}
        setSearch={setSearch}
        visible={showResults}
        setVisible={setShowResults}
      />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(search);
        }}
      >
        <input
          className="p-2 w-full outline-none"
          placeholder="Search for your song..."
          onChange={handleChange}
          value={search}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </form>
    </div>
  );
};

export default SearchBar;
