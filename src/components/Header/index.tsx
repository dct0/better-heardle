import { FaChartBar, FaHome, FaInfoCircle, FaSync } from 'react-icons/fa';

import { AppConfig } from '@/utils/AppConfig';
import { getPlaylists } from '@/utils/utils';

import LoginButton from './loginbutton';
import MusicButton from './musicbutton';

const Header = () => {
  return (
    <div className="border-b-2 border-black p-2">
      <div className="flex text-2xl justify-around">
        <span className="flex">
          <FaHome className="m-2" />
          <FaInfoCircle className="m-2" />
          <FaChartBar className="m-2" />
        </span>

        <div className="font-bold">{AppConfig.title}</div>
        <span className="flex">
          <MusicButton />
          <FaSync
            className="m-2 cursor-pointer"
            onClick={() => {
              getPlaylists();
            }}
          />
          <LoginButton />
        </span>
      </div>
    </div>
  );
};

export default Header;
