import Topbar from '@pages/home/components/Topbar';
import { Outlet } from 'react-router-dom';

export default function AfterLoginLayout() {
  return (
    <div className=''>
      <Topbar />
      <Outlet />
    </div>
  );
}
