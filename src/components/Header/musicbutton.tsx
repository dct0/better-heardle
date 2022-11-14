import { FaMusic } from 'react-icons/fa';

import useModal from '@/hooks/usemodal';

import Modal from '../modal';
import Playlists from '../Playlists';

const MusicButton = () => {
  const { visible, toggle, ref } = useModal();

  return (
    <>
      <FaMusic className="icon" onClick={toggle} />
      <Modal
        visible={visible}
        toggle={toggle}
        divRef={ref}
        title="Choose a Playlist..."
      >
        <Playlists />
      </Modal>
    </>
  );
};

export default MusicButton;
