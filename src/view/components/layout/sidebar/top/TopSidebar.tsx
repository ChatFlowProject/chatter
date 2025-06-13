import { useState } from 'react';
import Inbox from '../components/top/Inbox';
import { Archive } from 'lucide-react';

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
        <Archive />
      </button>
      {toggle && <Inbox />}
    </div>
  );
};

export default TopSidebar;
