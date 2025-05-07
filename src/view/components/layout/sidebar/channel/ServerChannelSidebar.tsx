import ServerChannelList from '@components/layout/sidebar/components/channel/ServerChannelList.tsx';
import { SidebarLayout } from '@components/layout/sidebar/components/channel/SidebarLayout.tsx';

const ServerChannelSidebar = () => {
  return (
    <SidebarLayout>
      <ServerChannelList />
    </SidebarLayout>
  );
};

export default ServerChannelSidebar;
