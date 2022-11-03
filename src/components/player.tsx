const Player = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-4 flex w-screen border-black border-y">
        <div className="relative m-auto w-3/4 h-full">
          <div
            className="h-full absolute bg-black w-full origin-top-left"
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
      <div>Player</div>
    </div>
  );
};

export default Player;
