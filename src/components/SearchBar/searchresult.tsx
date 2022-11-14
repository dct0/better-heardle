interface SearchResultProps {
  title: string;
  handleClick: (arg0: string) => void;
}

// wish i could use onClick instead
const SearchResult = ({ title, handleClick }: SearchResultProps) => {
  return (
    <li
      className="self-center items-center p-2 flex w-full h-10 hover:bg-slate-300 hover:cursor-pointer"
      onMouseDown={() => handleClick(title)}
    >
      {title}
    </li>
  );
};

export default SearchResult;
