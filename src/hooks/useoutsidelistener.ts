import type { RefObject } from 'react';
import { useEffect } from 'react';

// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
export const useOutsideListener = (
  ref: RefObject<HTMLDivElement>,
  func: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(<Node>event.target)) {
        console.log('hi');
        func();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
