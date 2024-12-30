import background from '@assets/Login_Background.png'
import SignupForm from './SignupForm.tsx'

export default function SignupPage() {
  return (
    <div className='relative w-screen h-screen'>
      <img
        src={background}
        className='absolute size-full -z-10'
        alt='background image'
      />
      <div className='size-full flex justify-center items-center '>
        <div className='m-0 p-8 w-[480px] flex flex-col items-stretch justify-center rounded-[5px] bg-[#313338] [box-shadow:0px] text-#B5BAC1'>
          <h1 className='text-[#F2F3F5] text-[24px]'>계정 만들기</h1>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}
