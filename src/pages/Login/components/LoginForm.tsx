import { FieldInfos, FieldValue } from 'src/types/LoginTypes'
import { isEmptyString } from '@utils/stringValidations.ts'
import useForm from '@hooks/useForm'
import Button from '@components/Button'
import { Link } from 'react-router-dom'
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
      <div className='text-center mb-6'>
        <h1 className='text-[22.5px] font-semibold text-[#f2f2f4] mb-2'>
          돌아오신 것을 환영해요!
        </h1>
        <p className='text-[15px] text-[#b5b9c0]'>
          다시 만나다니 너무 반가워요!
        </p>
      </div>
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
      <a
        href='#'
        className='block text-sm text-left text-[#00a9fb] mb-4 hover:underline'
      >
        비밀번호를 잊으셨나요?
      </a>

      <Button
        style='w-full bg-[#5865f2] hover:bg-blue-700 rounded text-white py-2'
        children='로그인'
      />

      <p className='text-[13.6px] text-left text-[#949aa3] mt-2'>
        계정이 필요하신가요?{' '}
        <Link to='/signup' className='text-[#00a9fb] hover:underline'>
          가입하기
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
