import Icon from '@components/common/Icon';
import { useState } from 'react';
import Inbox from '../components/top/Inbox';

const TopSidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex justify-between items-center px-4 py-1 relative'>
      <div></div>
      <div className='text-white'>친구</div>
      <button
        className='w-8 h-8 p-1 rounded-full hover:bg-[#42454A]'
        onClick={() => setToggle((prev) => !prev)}
      >
        <Icon path='inbox' />
      </button>
      {toggle && <Inbox />}
    </div>
  );
};

export default TopSidebar;
