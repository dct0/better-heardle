import { FaChartBar, FaHome, FaInfoCircle } from 'react-icons/fa';

import { AppConfig } from '@/utils/AppConfig';

import LoginButton from './loginbutton';

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
          <LoginButton />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
