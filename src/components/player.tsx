import { BsPlayCircle } from 'react-icons/bs';

const Player = () => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="h-4 flex w-screen border-black border-y justify-start">
        <div className="w-[42rem] relative mx-auto h-full">
          <div
            className="bg-gray-700 h-full absolute w-full origin-top-left"
            style={{ transform: 'scaleX(0.125)' }}
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
        <>0:00</>
        <BsPlayCircle className="w-8 h-8" />
        <>0:16</>
      </div>
    </div>
  );
};

export default Player;
