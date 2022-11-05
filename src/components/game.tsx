import GuessManager from './guessmanager';
import Player from './player';
import SearchBar from './searchbar';

const song = {
  name: 'test',
  url: '',
};

const handleSubmit = (search: string) => {
  console.log('Handling submit');
  if (search === song.name) {
    console.log('Match');
  } else {
    console.log('No match');
  }
};

const Game = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <GuessManager />
      <div className="w-[42rem] mx-auto flex flex-col justify-end gap-2 pb-2">
        <Player />
        <SearchBar handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Game;
