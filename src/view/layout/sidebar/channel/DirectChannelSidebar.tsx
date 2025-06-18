import { SidebarLayout } from '../components/channel/SidebarLayout.tsx';
import ChannelNavigation from '../components/channel/ChannelNavigation.tsx';
import DirectMessages from '../components/channel/DirectMessages.tsx';
import { Plus } from 'lucide-react';

const DirectChannelSidebar = () => {
  const handlePlus = () => {
    console.log('plus 버튼 클릭');
  };
  return (
    <SidebarLayout>
      <ChannelNavigation />
      <div className='border w-full h-[1px] border-[#42454A]' />
      <div className='flex flex-col justify-center items-center gap-[9px]'>
        <div className='flex justify-center items-center gap-[76px]'>
          <p className='text-[13px] text-neutral-400 font-bold'>
            DIRECT MESSAGES
          </p>
          <button
            className='w-[18px] h-[18px]'
            onClick={handlePlus}
            type='button'
          >
            <Plus size={18} color='#a3a3a3' />
          </button>
        </div>
        <DirectMessages />
      </div>
    </SidebarLayout>
  );
};

export default DirectChannelSidebar;
