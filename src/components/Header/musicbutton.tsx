import { useContext, useEffect, useRef, useState } from 'react';
import { FaMusic } from 'react-icons/fa';

import { GameContext } from '@/context';
import useModal from '@/hooks/usemodal';
import { pickTrack } from '@/utils/utils';

import Modal from '../modal';
import Playlists from '../Playlists';

// TODO: create loading screen for fetching
const MusicButton = () => {
  const { visible, toggle, ref } = useModal();
  const { tracks, setTracks, setAnswer } = useContext(GameContext);
  const [wasVisible, setWasVisible] = useState(false);

  const [currPlaylistID, setCurrPlaylistID] = useState('');
  const playlists = useRef();

  const getTracks = (playlistID: string | null) => {
    if (!playlistID) {
      console.error('No playlist selected');
      return;
    }
    fetch(`/api/tracks?playlistID=${playlistID}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
      },
    })
      .then((res) =>
        res
          .json()
          .then((r) => {
            console.log(`Tracks for ${playlistID}: ${r}`);
            window.localStorage.setItem('tracks', JSON.stringify(r));
            setTracks(r);
          })
          .catch((error) => console.error(error))
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setCurrPlaylistID(window.localStorage.getItem('currPlaylistID') || '');
    playlists.current = JSON.parse(
      window.localStorage.getItem('playlists') || ''
    );
  }, []);

  useEffect(() => {
    const a = pickTrack(tracks);

    setAnswer(a);
    window.localStorage.setItem('answer', JSON.stringify(a) || '');
  }, [tracks]);

  useEffect(() => {
    // update selected playlist on modal close
    if (
      wasVisible &&
      !visible &&
      currPlaylistID !== window.localStorage.getItem('currPlaylistID')
    ) {
      window.localStorage.setItem('currPlaylistID', currPlaylistID || '');
      getTracks(currPlaylistID);
    }
    setWasVisible(visible);
  }, [visible]);

  return (
    <>
      <FaMusic className="icon" onClick={toggle} />
      <Modal
        visible={visible}
        toggle={toggle}
        divRef={ref}
        title="Choose a Playlist..."
      >
        <Playlists
          playlists={playlists}
          currPlaylistID={currPlaylistID}
          setCurrPlaylistID={setCurrPlaylistID}
        />
      </Modal>
    </>
  );
};

export default MusicButton;
