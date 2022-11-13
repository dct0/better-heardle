import { useRef, useState } from 'react';

import { useOutsideListener } from './useoutsidelistener';

const useModal = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  const ref = useRef<HTMLDivElement>(null);
  useOutsideListener(ref, () => setVisible(false));

  return { visible, toggle, ref };
};

export default useModal;
