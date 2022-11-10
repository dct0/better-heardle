import { useEffect, useState } from 'react';

import { GameConfig } from '@/utils/AppConfig';
import type { GuessProps } from '@/utils/types';

import GuessManager from './guessmanager';
import Player from './player';
import SearchBar from './searchbar';

const song = {
  name: 'test',
  url: '',
};

const Game = () => {
  // useReducer()?
  const [currGuess, setCurrGuess] = useState(0);
  const [guesses, setGuesses] = useState<GuessProps[]>([]);

  const handleSubmit = (search: string) => {
    console.log('Handling submit');
    if (search.trim() === '') return;

    setCurrGuess(currGuess + 1);

    const tmp = [...guesses];

    const guess = tmp[currGuess];

    if (guess) {
      guess.enabled = true;
      guess.title = search;

      if (search === song.name) {
        console.log('Match');
        guess.correct = true;
        console.log('Game also over');
      } else {
        console.log('No match');
      }
    }

    if (currGuess >= GameConfig.num_guesses - 1) {
      console.log('Game over');
    } else {
      setGuesses(tmp);
    }
  };

  useEffect(() => {
    const tmp: GuessProps[] = new Array(GameConfig.num_guesses);
    for (let i = 0; i < GameConfig.num_guesses; i++) {
      tmp[i] = { enabled: false, correct: false, title: '' };
    }
    setGuesses(tmp);
  }, []);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <GuessManager guesses={guesses} />
      <div className="w-[42rem] mx-auto flex flex-col justify-end gap-2 pb-2">
        <Player />
        <SearchBar handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Game;
