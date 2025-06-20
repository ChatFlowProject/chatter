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
    <div className='flex w-screen h-screen overflow-hidden flex-col bg-wrapper'>
      <aside className='bg-wrapper'>
        <TopSidebar />
      </aside>
      <div className='flex w-screen h-full overflow-hidden'>
        <aside className='w-[72px] bg-sidebar text-white'>
          <TeamSidebar />
        </aside>
        <aside className='w-[240px] bg-sidebar text-white flex flex-col justify-between border border-[#42454A] rounded-[12px]'>
          {isDMView ? <DirectChannelSidebar /> : <ServerChannelSidebar />}
          <UserProfileBar />
        </aside>
        <main className='flex-1  bg-wrapper text-white overflow-y-auto border border-[#42454A] rounded-[12px]'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
