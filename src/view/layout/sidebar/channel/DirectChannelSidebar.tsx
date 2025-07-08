import { SidebarLayout } from '../components/channel/SidebarLayout.tsx';
import ChannelNavigation from '../components/channel/ChannelNavigation.tsx';
import DirectMessages from '../components/channel/DirectMessages.tsx';
import CreateDMModal from '../components/channel/CreateDMModal.tsx';

const DirectChannelSidebar = () => {
  return (
    <SidebarLayout>
      <ChannelNavigation />
      <div className='border w-full h-[1px] border-[#42454A]' />
      <div className='flex flex-col justify-center items-center gap-[9px]'>
        <div className='flex justify-center items-center gap-[76px]'>
          <p className='text-[13px] text-neutral-400 font-bold'>
            DIRECT MESSAGES
          </p>
          <CreateDMModal />
        </div>
        <DirectMessages />
      </div>
    </SidebarLayout>
  );
};

export default DirectChannelSidebar;
