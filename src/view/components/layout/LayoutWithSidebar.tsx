import { Outlet } from 'react-router-dom';
import TeamSidebar from '@/view/';
import ChannelSidebar from '@/view/ui/Channel/ChannelSidebar';
import Header from '@/view/ui/Common/Header';
import UserProfileBar from '@/view/ui/Common/UserProfileBar';

const LayoutWithSidebar = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <aside className="w-[72px] bg-gray-800 text-white">
        <TeamSidebar />
      </aside>
      <aside className="w-[240px] bg-gray-700 text-white flex flex-col">
        <Header />
        <ChannelSidebar />
        <UserProfileBar />
      </aside>
      <main className="flex-1 bg-gray-900 text-white overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWithSidebar;