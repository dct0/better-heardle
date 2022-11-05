import { GameConfig } from '@/utils/AppConfig';

import Guess from './guess';

const GuessManager = () => {
  return (
    <div className="flex w-[42rem] flex-col mx-auto gap-2 my-2">
      {Array.from(Array(GameConfig.num_guesses)).map((_, index) => (
        <Guess key={index} />
      ))}
    </div>
  );
};

export default GuessManager;
