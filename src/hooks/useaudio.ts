import { useEffect, useState } from 'react';

const useAudio = (url?: string) => {
  const [loaded, setLoaded] = useState(false);
  const [currURL, setCurrURL] = useState(url);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currTime, setCurrTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [length, setLength] = useState(0);

  const toggle = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    setAudio(new Audio(url)); // for some reason i can't guarantee this is run unless i have a loaded event
  }, []);

  useEffect(() => {
    setAudio(new Audio(currURL));
  }, [currURL]);

  useEffect(() => {
    if (!audio) {
      return () => {};
    }

    const setAudioData = () => {
      setLength(audio.duration);
      setCurrTime(audio.currentTime);
    };

    const setAudioTime = () => {
      setCurrTime(audio.currentTime);
    };

    const setAudioEnd = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('canplaythrough', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', setAudioEnd);

    return () => {
      audio.removeEventListener('canplaythrough', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', setAudioEnd);
    };
  }, [loaded]);

  useEffect(() => {
    if (audio) setLoaded(!loaded); // trigger loaded event
    if (audio && isPlaying) {
      audio.play();
    }
    if (audio && !isPlaying) {
      audio.pause();
    }
  }, [audio, isPlaying]);

  return { audio, setCurrURL, isPlaying, toggle, currTime, length } as const;
};

export default useAudio;
