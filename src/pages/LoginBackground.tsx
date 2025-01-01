import background from '@assets/Login_Background.png'
import { Outlet } from 'react-router-dom'

export default function LoginBackground() {
  return (
    <div className='relative w-screen h-screen'>
      <img
        src={background}
        className='absolute size-full -z-10'
        alt='background image'
      />
      <div className='size-full flex justify-center items-center '>
        <Outlet />
      </div>
    </div>
  )
}
