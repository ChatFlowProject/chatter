import ChannelNavigation from '@components/layout/sidebar/channel/components/ChannelNavigation.tsx';
import DirectMessages from '@components/layout/sidebar/component/right/DirectMessages.tsx';
import { SidebarLayout } from './components/SidebarLayout.tsx';

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