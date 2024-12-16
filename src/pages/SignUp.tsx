import background from '@assets/Login_Background.png'

function Checkbox() {
  return (
    <button className='flex w-6 h-6 p-[3px] rounded-[6px] border-[1px] bg-transparent border-gray-400 hover:outline-none' />
  )
}

function DatePicker() {
  return (
    <div className='flex justify-between gap-3'>
      <DropDown />
      <DropDown />
      <DropDown />
    </div>
  )
}

function DropDown() {
  return <input className='w-32 h-10 rounded-[3px] bg-[#1E1F22]' />
}

export default function SignUp() {
  return (
    <div className='relative w-screen h-screen'>
      <img src={background} className='absolute size-full -z-10' />
      <div className='size-full flex items-center justify-center'>
        <div className='m-0 w-[480px] p-8 flex flex-col items-stretch justify-center shrink-0 rounded-[5px] bg-[#313338] [box-shadow:0px]'>
          <h1 className='text-2xl text-[#F2F3F5] font-bold'>계정 만들기</h1>
          <form>
            <label className='flex flex-col mt-5 items-stretch gap-2'>
              <div id='email' className='text-[#B5BAC1] text-xs text-left'>
                이메일
              </div>
              <input className='h-10 rounded-[3px] bg-[#1E1F22]' />
            </label>
            <label className='flex flex-col mt-5 items-stretch gap-2'>
              <div id='nickname' className='text-[#B5BAC1] text-xs text-left'>
                닉네임
              </div>
              <input className='h-10 rounded-[3px] bg-[#1E1F22]' />
            </label>
            <label className='flex flex-col mt-5 items-stretch gap-2'>
              <div id='사용자명' className='text-[#B5BAC1] text-xs text-left'>
                사용자명
              </div>
              <input className='h-10 rounded-[3px] bg-[#1E1F22]' />
            </label>
            <label className='flex flex-col mt-5 items-stretch gap-2'>
              <div id='password' className='text-[#B5BAC1] text-xs text-left'>
                비밀번호
              </div>
              <input className='h-10 rounded-[3px] bg-[#1E1F22]' />
            </label>
            <label className='flex flex-col mt-5 items-stretch gap-2'>
              <div id='birthday' className='text-[#B5BAC1] text-xs text-left'>
                생년월일
              </div>
              <DatePicker />
            </label>
            <label className='flex mt-3 items-center gap-2'>
              <Checkbox />
              <div className='w-[364px] text-[#949BA4] text-xs text-left'>
                (선택사항) Discord 소식, 도움말, 특별 할인을 이메일로
                보내주세요. 언제든지 취소하실 수 있어요.
              </div>
            </label>
            <button className='mt-5 w-full h-11 p-[10px] rounded-[3px] justify-center items-center bg-indigo-500 text-base'>
              계속하기
            </button>
            <div className='mt-2 text-[#949BA4] text-xs text-left'>
              등록하는 순간 Discord의{' '}
              <span className='text-[#00AAFC]'>서비스 이용 약관</span>과
              <span className='text-[#00AAFC]'> 개인정보 보호 정책</span>에
              동의하게 됩니다.
            </div>
            <div className='mt-[18px] text-[14px] text-left text-[#00AAFC]'>
              이미 계정이 있으신가요?
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
