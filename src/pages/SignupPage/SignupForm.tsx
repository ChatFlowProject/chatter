import Button from '@components/Button.tsx'
import Checkbox from '@components/Checkbox.tsx'
import DatePicker from './DatePicker.tsx'
import LoginLabel from './LoginLabel.tsx'
import useForm from '@hooks/useForm.ts'

import type { FieldInfos, FieldValue } from 'src/types/LoginTypes'

const fieldInfos: FieldInfos = {
  email: {
    initialValue: '',
    isEssential: true,
    validation: (newValue: FieldValue) => {
      if (newValue === '') return '이메일을 입력해주세요'
      return ''
    },
  },
  nickname: {
    initialValue: '',
    isEssential: true,
    validation: (newValue: FieldValue) => {
      if (newValue === '') return '닉네임을 입력해주세요'
      return ''
    },
  },
  name: {
    initialValue: '',
    isEssential: true,
    validation: (newValue: FieldValue) => {
      if (newValue === '') return '이름을 입력해주세요'
      return ''
    },
  },
  password: {
    initialValue: '',
    isEssential: true,
    validation: (newValue: FieldValue) => {
      if (newValue === '') return '비밀번호를 입력해주세요'
      return ''
    },
  },
}

export default function SignupForm() {
  const { values, errors, isEssentials, changeFieldValue, submitForm } =
    useForm(fieldInfos, (formValues) => {
      console.log(formValues)
    })
  return (
    <form>
      <LoginLabel title='이메일'>
        <input
          id='email'
          type='email'
          className='h-10 rounded-[3px] bg-[#1E1F22]'
          placeholder='이메일을 입력하세요'
          value={values.email as string}
          onChange={(e) => changeFieldValue(e.target.value, 'email')}
        />
      </LoginLabel>
      <LoginLabel title='닉네임'>
        <input
          id='nickname'
          type='text'
          className='h-10 rounded-[3px] bg-[#1E1F22]'
          placeholder='닉네임을 입력하세요'
          value={values.nickname as string}
          onChange={(e) => changeFieldValue(e.target.value, 'nickname')}
        />
      </LoginLabel>
      <LoginLabel title='이름'>
        <input
          id='name'
          type='text'
          className='h-10 rounded-[3px] bg-[#1E1F22]'
          placeholder='이름을 입력하세요'
          value={values.name as string}
          onChange={(e) => changeFieldValue(e.target.value, 'name')}
        />
      </LoginLabel>
      <LoginLabel title='비밀번호'>
        <input
          id='password'
          type='password'
          className='h-10 rounded-[3px] bg-[#1E1F22]'
          placeholder='비밀번호를 입력하세요'
          value={values.password as string}
          onChange={(e) => changeFieldValue(e.target.value, 'password')}
        />
      </LoginLabel>
      <LoginLabel title='생년월일'>
        <DatePicker />
      </LoginLabel>
      <label className='mt-3 flex items-center'>
        <Checkbox style='flex w-6 h-6 p-[3px] rounded-[6px] border-[1px] bg-transparent border-gray-400 hover:outline-none' />
        <div className='w-[364px] pl-2 text-[#949BA4] text-sm text-left'>
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
