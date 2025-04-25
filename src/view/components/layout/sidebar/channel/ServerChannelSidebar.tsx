import ServerChannelList from './components/ServerChannelList.tsx';
import { SidebarLayout } from './components/SidebarLayout.tsx';

const ServerChannelSidebar = () => {
  return (
    <SidebarLayout>
      <ServerChannelList />
    </SidebarLayout>
  );
};

export default ServerChannelSidebar;