import { FieldInfos, FieldValue } from 'src/types/LoginTypes'
import { isEmptyString } from '@utils/stringValidations.ts'
import useForm from '@hooks/useForm'

import LoginTextInput from '@components/LoginTextInput'

const fieldInfos: FieldInfos = {
  email: {
    initialValue: '',
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== 'string') return '비정상적인 입력입니다'
      if (isEmptyString(newValue)) return '이메일을 입력해주세요'
      return ''
    },
  },
  password: {
    initialValue: '',
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== 'string') return '비정상적인 입력입니다'
      if (isEmptyString(newValue)) return '비밀번호를 입력해주세요'
      return ''
    },
  },
}

function LoginForm() {
  const { values, errors, isRequired, changeFieldValue, submitForm } = useForm(
    fieldInfos,
    (formValues) => {
      console.log(formValues)
    },
  )

  return (
    <form className='w-full max-w-lg'>
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
        name='password'
        type='password'
        title='비밀번호'
        value={values.password as string}
        onChange={(e) => changeFieldValue(e.target.value, 'password')}
        error={errors.password}
        isRequired={isRequired.password}
      />
      <p className='text-sm text-left text-[#00a9fb] mb-4 hover:underline'>
        비밀번호를 잊으셨나요?
        <Link to={'/signup'} className='hover:underline text-[#00a9fb]'>
      </p>
      <button className='w-full py-2 rounded-[8px] bg-[#5865f2] hover:bg-blue-700 text-white'>
        로그인
      </button>
    </form>
  )
}

export default LoginForm
