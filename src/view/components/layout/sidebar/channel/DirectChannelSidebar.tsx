import ChannelNavigation from '@components/layout/sidebar/components/channel/ChannelNavigation.tsx';
import DirectMessages from '@components/layout/sidebar/components/channel/DirectMessages.tsx';
import { SidebarLayout } from '@components/layout/sidebar/components/channel/SidebarLayout.tsx';

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