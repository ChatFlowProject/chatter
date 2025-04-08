import { Outlet } from 'react-router-dom';

export default function AfterLoginLayout() {
  return (
    <div className=''>
      <Outlet />
    </div>
  );
}
