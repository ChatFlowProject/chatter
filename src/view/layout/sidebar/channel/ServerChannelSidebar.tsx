import { SidebarLayout } from '../components/channel/SidebarLayout.tsx';
import ServerChannelList from '../components/channel/ServerChannelList.tsx';

const ServerChannelSidebar = () => {
  return (
    <SidebarLayout>
      <ServerChannelList />
    </SidebarLayout>
  );
};

export default ServerChannelSidebar;