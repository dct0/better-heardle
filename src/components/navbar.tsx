import { FaChartBar, FaHome, FaInfoCircle, FaSpotify } from 'react-icons/fa';

import { AppConfig } from '@/utils/AppConfig';

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
          <FaChartBar className="m-2" />
          <FaSpotify className="m-2" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
