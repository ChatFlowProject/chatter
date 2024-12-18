import Button from '@components/Button.tsx'
import Checkbox from '@components/Checkbox.tsx'
import DatePicker from './DatePicker.tsx'
import LoginLabel from './LoginLabel.tsx'

export default function SignUpForm() {
  return (
    <form>
      <LoginLabel title='이메일'>
        <input className='h-10 rounded-[3px] bg-[#1E1F22]' />
      </LoginLabel>
      <LoginLabel title='닉네임'>
        <input className='h-10 rounded-[3px] bg-[#1E1F22]' />
      </LoginLabel>
      <LoginLabel title='이름'>
        <input className='h-10 rounded-[3px] bg-[#1E1F22]' />
      </LoginLabel>
      <LoginLabel title='비밀번호'>
        <input className='h-10 rounded-[3px] bg-[#1E1F22]' />
      </LoginLabel>
      <LoginLabel title='생년월일'>
        <DatePicker />
      </LoginLabel>
      <label className='mt-3 flex items-center gap-2'>
        <Checkbox style='flex w-6 h-6 p-[3px] rounded-[6px] border-[1px] bg-transparent border-gray-400 hover:outline-none' />
        <div className='w-[364px] text-[#949BA4] text-xs text-left'>
          (선택사항) Discord 소식, 도움말, 특별 할인을 이메일로 보내주세요.
          언제든지 취소하실 수 있어요.
        </div>
      </label>
      <Button style='mt-5 p-[10px] w-full h-11 justify-center items-center rounded-[3px] bg-indigo-500'>
        계속하기
      </Button>
      <div className='mt-2 text-[#949BA4] text-xs text-left'>
        등록하는 순간 Discord의{' '}
        <span className='text-[#00AAFC]'>서비스 이용 약관</span>과
        <span className='text-[#00AAFC]'> 개인정보 보호 정책</span>에 동의하게
        됩니다.
      </div>
      <div className='mt-[18px] text-[#00AAFC] text-[14px] text-left'>
        이미 계정이 있으신가요?
      </div>
    </form>
  )
}
