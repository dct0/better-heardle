import { useEffect, useState } from 'react';

import Game from '@/components/Game';
import Header from '@/components/Header';
import { GameContext } from '@/context';
import type { SpotifyTrack } from '@/utils/types';

const Index = () => {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [answer, setAnswer] = useState<SpotifyTrack | null>(null);
  const value = { tracks, setTracks, answer, setAnswer };

  useEffect(() => {
    setTracks(JSON.parse(window.localStorage.getItem('tracks') || '[]'));
    setAnswer(JSON.parse(window.localStorage.getItem('answer') || '{}'));
  }, []);

  return (
    <GameContext.Provider value={value}>
      <div className="flex flex-col w-screen h-screen justify-between">
        <Header />
        <Game />
      </div>
    </GameContext.Provider>
  );
};

export default Index;
