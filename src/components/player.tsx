/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import {
  BsPauseCircle,
  BsPauseCircleFill,
  BsPlayCircle,
  BsPlayCircleFill,
} from 'react-icons/bs';

import useAudio from '@/hooks/useaudio';
import { formatTime } from '@/utils/utils';

// const track_id = '0gfiKZjfraqJ1mbcOycxS5';
const track_url =
  'https://p.scdn.co/mp3-preview/9d09fe05225ba82e3b385153e45206b00c0b1467?cid=774b29d4f13844c495f206cafdad9c86';

const Player = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [audio, isPlaying, toggle, currTime, length] = useAudio(track_url);

  const handleClick = () => {
    toggle();
  };

  if (!audio) return <>Audio blunder</>;

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
