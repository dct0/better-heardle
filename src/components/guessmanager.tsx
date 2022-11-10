import type { GuessProps } from '@/utils/types';

import Guess from './guess';

interface GuessManagerProps {
  guesses: GuessProps[];
}

const GuessManager = ({ guesses }: GuessManagerProps) => {
  return (
    <div className="flex w-[42rem] flex-col mx-auto gap-2 my-2">
      {guesses?.map((guess, index) => {
        return (
          <Guess
            key={index}
            enabled={guess.enabled}
            correct={guess.correct}
            title={guess.title}
          />
        );
      })}
    </div>
  );
};

export default GuessManager;
