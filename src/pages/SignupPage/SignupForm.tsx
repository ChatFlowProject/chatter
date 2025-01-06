import {
  isEmptyString,
  isLengthBetween,
  isEmail,
  isPassword,
  isNickname,
  isName,
} from '@utils/stringValidations.ts'
import useForm from '@hooks/useForm.ts'
import Button from '@components/Button.tsx'
import Checkbox from '@components/Checkbox.tsx'
import DatePicker from './DatePicker.tsx'
import LoginLabel from '@components/LoginLabel.tsx'
import LoginTextInput from '@components/LoginTextInput.tsx'

import type { FieldInfos, FieldValue } from 'src/types/LoginTypes'

const fieldInfos: FieldInfos = {
  email: {
    initialValue: '',
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== 'string') return '비정상적인 입력입니다'
      if (isEmptyString(newValue)) return '이메일을 입력해주세요'
      if (!isEmail(newValue)) return '이메일 형식이 아닙니다'
      if (!isLengthBetween(newValue, 6, 50))
        return '이메일은 6자 이상 50자 이하여야 합니다'
      return ''
    },
  },
  nickname: {
    initialValue: '',
    isRequired: false,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== 'string') return '비정상적인 입력입니다'
      if (isEmptyString(newValue)) return '닉네임을 입력해주세요'
      if (!isNickname(newValue)) return '닉네임 형식이 아닙니다'
      if (!isLengthBetween(newValue, 4, 16))
        return '닉네임은 4자 이상 16자 이하여야 합니다'
      return ''
    },
  },
  name: {
    initialValue: '',
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== 'string') return '비정상적인 입력입니다'
      if (isEmptyString(newValue)) return '이름을 입력해주세요'
      if (!isName(newValue)) return '이름 형식이 아닙니다'
      if (!isLengthBetween(newValue, 2, 20))
        return '이름은 2자 이상 20자 이하여야 합니다'
      return ''
    },
  },
  password: {
    initialValue: '',
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== 'string') return '비정상적인 입력입니다'
      if (isEmptyString(newValue)) return '비밀번호를 입력해주세요'
      if (!isPassword(newValue)) return '비밀번호 형식이 아닙니다'
      if (!isLengthBetween(newValue, 6, 22))
        return '비밀번호는 6자 이상 22자 이하여야 합니다'
      return ''
    },
  },
}

export default function SignupForm() {
  const { values, errors, isRequired, changeFieldValue, submitForm } = useForm(
    fieldInfos,
    (formValues) => {
      console.log(formValues)
    },
  )
  return (
    <form>
      <LoginTextInput
        name='email'
        type='email'
        title='이메일'
        value={values.email as string}
        onChange={(e) => changeFieldValue(e.target.value, 'email')}
        error={errors.email}
        isRequired={isRequired.email}
      />
      <LoginTextInput
        name='nickname'
        type='text'
        title='닉네임'
        value={values.nickname as string}
        onChange={(e) => changeFieldValue(e.target.value, 'nickname')}
        error={errors.nickname}
        isRequired={isRequired.nickname}
      />
      <LoginTextInput
        name='name'
        type='text'
        title='이름'
        value={values.name as string}
        onChange={(e) => changeFieldValue(e.target.value, 'name')}
        error={errors.name}
        isRequired={isRequired.name}
      />
      <LoginTextInput
        name='password'
        type='password'
        title='비밀번호'
        value={values.password as string}
        onChange={(e) => changeFieldValue(e.target.value, 'password')}
        error={errors.password}
        isRequired={isRequired.password}
      />
      <LoginLabel title='생년월일'>
        <DatePicker />
      </LoginLabel>
      <label className='mt-3 flex items-center'>
        <Checkbox style='flex w-6 h-6 p-[3px] rounded-[6px] border-[1px] bg-transparent border-gray-400 hover:outline-none' />
        <input type='hidden' name='isAgreed' value='false' />
        <div className='w-[364px] pl-2 text-[#949BA4] text-sm text-left'>
          (선택사항) Discord 소식, 도움말, 특별 할인을 이메일로 보내주세요.
          언제든지 취소하실 수 있어요.
        </div>
      </label>
      <Button style='mt-5 p-[10px] w-full h-11 justify-center items-center rounded-[3px] bg-indigo-500'>
        계속하기
      </Button>
    </form>
  )
}
