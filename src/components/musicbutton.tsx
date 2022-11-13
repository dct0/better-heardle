import { FaMusic } from 'react-icons/fa';

import useModal from '@/hooks/usemodal';

import Modal from './modal';

const MusicButton = () => {
  const { visible, toggle, ref } = useModal();

  return (
    <>
      <FaMusic className="m-2 cursor-pointer" onClick={toggle} />
      <Modal
        visible={visible}
        toggle={toggle}
        divRef={ref}
        title="Choose a Playlist..."
      >
        Some scrollable grid displaying playlist icons and names and number of
        songs
      </Modal>
    </>
  );
};

export default MusicButton;
