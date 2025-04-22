import { Outlet } from 'react-router-dom';
import TeamSidebar from '@components/layout/sidebar/TeamSidebar.tsx';
import ChannelSidebar from '@components/layout/sidebar/ChannelSidebar.tsx';
import UserProfileBar from './sidebar/UserProfileBar';

const LayoutWithSidebar = () => {
  return (
    <div className='flex w-screen h-screen overflow-hidden'>
      <aside className='w-[72px] bg-gray-800 text-white'>
        <TeamSidebar />
      </aside>
      <aside className='w-[240px] bg-gray-700 text-white flex flex-col'>
        <ChannelSidebar />
        <UserProfileBar />
      </aside>
      <main className='flex-1 bg-gray-900 text-white overflow-y-auto'>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWithSidebar;
