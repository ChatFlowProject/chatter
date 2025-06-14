import { Outlet, useLocation } from 'react-router-dom';
import TeamSidebar from './sidebar/team/TeamSidebar.tsx';
import UserProfileBar from './profile/UserProfileBar.tsx';
import DirectChannelSidebar from './sidebar/channel/DirectChannelSidebar.tsx';
import ServerChannelSidebar from './sidebar/channel/ServerChannelSidebar.tsx';
import TopSidebar from '@components/layout/sidebar/top/TopSidebar.tsx';

const LayoutWithSidebar = () => {
  const location = useLocation();
  const isDMView = location.pathname.startsWith('/channels/@me');

  return (
    <div className='flex w-screen h-screen overflow-hidden flex-col'>
      <aside className='bg-[#313338]'>
        <TopSidebar />
      </aside>
      <div className='flex w-screen h-screen overflow-hidden'>
        <aside className='w-[72px] bg-gray-800 text-white'>
          <TeamSidebar />
        </aside>
        <aside className='w-[240px] bg-gray-700 text-white flex flex-col justify-between'>
          {isDMView ? <DirectChannelSidebar /> : <ServerChannelSidebar />}
          <UserProfileBar />
        </aside>
        <main className='flex-1 bg-gray-900 text-white overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
