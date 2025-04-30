import { SidebarLayout } from '../components/channel/SidebarLayout.tsx';
import ChannelNavigation from '../components/channel/ChannelNavigation.tsx';
import DirectMessages from '../components/channel/DirectMessages.tsx';

const DirectChannelSidebar = () => {
  return (
    <SidebarLayout>
      <ChannelNavigation />
      <div className="border w-full h-[1px] border-[#42454A]" />
      <DirectMessages />
    </SidebarLayout>
  );
};

export default DirectChannelSidebar;