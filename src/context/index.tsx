import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

import type { SpotifyTrack } from '@/utils/types';

interface GameContextProps {
  tracks: SpotifyTrack[];
  setTracks: Dispatch<SetStateAction<SpotifyTrack[]>>;
  answer: SpotifyTrack | null;
  setAnswer: Dispatch<SetStateAction<SpotifyTrack | null>>;
}

export const GameContext = createContext<GameContextProps>({
  tracks: [],
  setTracks: () => {},
  answer: null,
  setAnswer: () => {},
});
