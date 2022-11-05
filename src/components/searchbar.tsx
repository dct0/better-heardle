import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface SearchBarProps {
  handleSubmit: (arg: string) => void;
}

const SearchBar = ({ handleSubmit }: SearchBarProps) => {
  const [search, setSearch] = useState('');
  return (
    <div className="w-full mx-auto border rounded border-black">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(search);
        }}
      >
        <input
          className="p-2 w-full"
          placeholder="Search for your song..."
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
