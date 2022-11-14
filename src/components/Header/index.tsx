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
          <FaHome className="icon" />
          <FaInfoCircle className="icon" />
          <FaChartBar className="icon" />
        </span>

        <div className="font-bold">{AppConfig.title}</div>
        <span className="flex">
          <MusicButton />
          <FaSync
            className="icon"
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
