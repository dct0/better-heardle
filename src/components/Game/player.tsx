/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-nested-ternary */
import { useContext, useEffect, useState } from 'react';
import {
  BsPauseCircle,
  BsPauseCircleFill,
  BsPlayCircle,
  BsPlayCircleFill,
} from 'react-icons/bs';

import { GameContext } from '@/context';
import useAudio from '@/hooks/useaudio';
import { formatTime } from '@/utils/utils';

const Player = () => {
  const { tracks, answer } = useContext(GameContext);
  const [isHovering, setIsHovering] = useState(false);
  const { setCurrURL, isPlaying, toggle, currTime, length } = useAudio();

  const handleClick = () => {
    toggle();
  };

  useEffect(() => {
    setCurrURL(answer?.track?.preview_url || '');
  }, [tracks, answer]);

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="h-4 flex w-screen border-black border-y justify-start">
        <div className="w-[42rem] relative mx-auto h-full">
          <div
            className="bg-gray-700 h-full absolute w-full origin-top-left"
            style={{
              transform: `scaleX(${currTime / length})`,
            }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-black z-10"
            style={{ left: '0%' }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-black z-10"
            style={{ left: '6.25%' }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-black z-10"
            style={{ left: '12.5%' }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-black z-10"
            style={{ left: '25%' }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-black z-10"
            style={{ left: '43.75%' }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-black z-10"
            style={{ left: '68.75%' }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-black z-10"
            style={{ left: '99.9%' }}
          ></div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <>{formatTime(currTime)}</>
        <div
          className="cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleClick}
        >
          {isPlaying ? (
            isHovering ? (
              <BsPauseCircleFill className="w-8 h-8" />
            ) : (
              <BsPauseCircle className="w-8 h-8" />
            )
          ) : isHovering ? (
            <BsPlayCircleFill className="w-8 h-8" />
          ) : (
            <BsPlayCircle className="w-8 h-8" />
          )}
        </div>
        <>{formatTime(length || 0)}</>
      </div>
    </div>
  );
};

export default Player;
