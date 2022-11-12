import { FaChartBar, FaHome, FaInfoCircle } from 'react-icons/fa';

import { AppConfig } from '@/utils/AppConfig';

import LoginButton from './loginbutton';

const getPlaylists = () => {
  fetch('/api/playlists', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
    },
  }).then((res) =>
    res
      .json()
      .then((r) => {
        console.log(r);
        window.localStorage.setItem('playlists', JSON.stringify(r.items));
      })
      .catch((error) => {
        console.error(error);
      })
  );
};

const Navbar = () => {
  return (
    <nav className="border-b-2 border-black p-2">
      <div className="flex text-2xl justify-around">
        <span className="flex">
          <FaHome className="m-2" />
          <FaInfoCircle className="m-2" />
        </span>

        <div className="font-bold">{AppConfig.title}</div>
        <span className="flex">
          <FaChartBar
            className="m-2"
            onClick={() => {
              getPlaylists();
            }}
          />
          <LoginButton />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
