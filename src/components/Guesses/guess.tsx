import { FaCheck, FaTimes } from 'react-icons/fa';

import type { GuessProps } from '@/utils/types';

const Guess = ({ enabled, correct, title }: GuessProps) => {
  return (
    <div className="self-center items-center border border-black p-2 flex w-full h-10">
      {enabled ? (
        <>
          {correct ? <FaCheck className="m-2" /> : <FaTimes className="m-2" />}
          <div className="text-center">{enabled ? title : ''}</div>
          <></>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Guess;
