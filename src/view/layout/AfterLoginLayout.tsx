
import { Outlet } from 'react-router-dom';
import Topbar from '@pages/Friends/components/Topbar.tsx';

export default function AfterLoginLayout() {
  return (
    <div className=''>
      <Topbar />
      <Outlet />
    </div>
  );
}
