import background from '@assets/Login_Background.png';
import { Outlet } from 'react-router-dom';

export default function LoginBackground() {
  console.log('배경 이미지: ', background);
  return (
    <div className='relative w-screen h-screen'>
      <img
        alt='background image'
        className='absolute size-full -z-10'
        src={background}
      />
      <div className='size-full flex justify-center items-center '>
        <Outlet />
      </div>
    </div>
  );
}
