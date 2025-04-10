// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { loginSchema, LoginFormData } from '../../../../../service/feature/auth/schema/authSchema';
// import { useLogin } from '../../../../../service/feature/auth';
// import { toast } from 'sonner';
// import LoginTextInput from '@pages/auth/components/LoginTextInput.tsx';

// const LoginForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const { mutate: login } = useLogin();

//   const onSubmit = (data: LoginFormData) => {
//     login(data, {
//       onError: (err: any) => {
//         toast.error(err?.message || '로그인 실패');
//       },
//     });
//   };

//   return (
//     <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
//       <LoginTextInput
//         error={errors.email?.message}
//         isRequired
//         title="이메일"
//         type="email"
//         {...register('email')}
//       />
//       <LoginTextInput
//         error={errors.password?.message}
//         isRequired
//         title="비밀번호"
//         type="password"
//         {...register('password')}
//       />
//       <p className="text-sm text-left text-[#00a9fb] mt-4 mb-4 hover:underline">
//         비밀번호를 잊으셨나요?
//       </p>
//       <button
//         className="w-full py-2 rounded-[8px] bg-[#5865f2] hover:bg-blue-700 text-white"
//         disabled={isSubmitting}
//         type="submit"
//       >
//         {isSubmitting ? '로그인 중...' : '로그인'}
//       </button>
//     </form>
//   );
// };

// export default LoginForm;

export type FieldName = string;
export type FieldValue = string | number | boolean;
export type InputValidation = (newValue: FieldValue) => string;

export interface FormInfo {
  initialValue: FieldValue;
  isRequired: boolean;
  validation: InputValidation;
}
export type FieldInfos = Record<FieldName, FormInfo>;

import LoginTextInput from '@pages/auth/components/LoginTextInput';
// import { isEmptyString } from '@utils/auth/stringValidations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'src/service/feature/common/axios/axiosInstance';
export const signIn = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post('/sign-in', credentials);
    const { accessToken } = response.data;

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    return response.data;
  } catch (error: any) {
    console.error('SignIn Error:', error.response?.data || error.message);
    throw error;
  }
};

function initFieldInfo(fieldInfos: FieldInfos) {
  const initialValues: Record<FieldName, FieldValue> = {};
  const isEssential: Record<FieldName, boolean> = {};
  const validations: Record<FieldName, InputValidation> = {};

  for (const fieldName in fieldInfos) {
    const { initialValue, isRequired, validation } = fieldInfos[fieldName];
    initialValues[fieldName] = initialValue;
    isEssential[fieldName] = isRequired;
    validations[fieldName] = validation;
  }

  return { initialValues, isRequired: isEssential, validations };
}

function useForm(
  fieldInfos: FieldInfos,
  submitCallback: (formValues: Record<FieldName, FieldValue>) => void,
): {
  values: Record<FieldName, FieldValue>;
  errors: Record<FieldName, string>;
  isRequired: Record<FieldName, boolean>;
  changeFieldValue: (newValue: FieldValue, fieldName: FieldName) => void;
  submitForm: () => void;
} {
  const { initialValues, isRequired, validations } = initFieldInfo(fieldInfos);
  const [values, setValues] =
    useState<Record<FieldName, FieldValue>>(initialValues);
  const [errors, setErrors] = useState<Record<FieldName, string>>({});

  function changeFieldValue(newValue: FieldValue, fieldName: FieldName): void {
    const errorMessage = validations[fieldName](newValue);
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
    setValues((oldValues) => ({
      ...oldValues,
      [fieldName]: newValue,
    }));
  }

  function submitForm(): void {
    for (const valueName in values) {
      if (isRequired[valueName] && values[valueName] === '')
        return console.error('필수 항목을 작성해주세요');
      if (errors[valueName] !== '')
        return console.error('아직 오류가 남아있습니다');
    }
    submitCallback(values);
  }

  return {
    values,
    errors,
    isRequired,
    changeFieldValue,
    submitForm,
  };
}

const fieldInfos: FieldInfos = {
  email: {
    initialValue: '',
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== 'string') return '비정상적인 입력입니다';
      // if (isEmptyString(newValue)) return '이메일을 입력해주세요';
      return '';
    },
  },
  password: {
    initialValue: '',
    isRequired: true,
    validation: (newValue: FieldValue) => {
      if (typeof newValue !== 'string') return '비정상적인 입력입니다';
      // if (isEmptyString(newValue)) return '비밀번호를 입력해주세요';
      return '';
    },
  },
};

const LoginForm = () => {
  const { values, errors, isRequired, changeFieldValue } = useForm(
    fieldInfos,
    (formValues) => {
      console.log(formValues);
    },
  );
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      console.log('로그인 요청:', values);
      const data = await signIn({
        email: values.email as string,
        password: values.password as string,
      });

      console.log('로그인 응답:', data);

      const token = localStorage.getItem('accessToken');
      console.log('저장된 토큰:', token);

      if (token) {
        alert(`로그인 성공! 환영합니다, ${data.user?.nickname || '사용자'}`);
        navigate('/channels');
      } else {
        throw new Error('토큰 저장 실패');
      }
    } catch (error: any) {
      console.error('로그인 에러:', error);
      setErrorMessage(
        error.response?.data?.message || '로그인 실패. 다시 시도해주세요.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='w-full max-w-lg' onSubmit={handleSubmit}>
      <LoginTextInput
        error={errors.email}
        isRequired={isRequired.email}
        name='email'
        onChange={(e) => changeFieldValue(e.target.value, 'email')}
        title='이메일'
        type='email'
        value={values.email as string}
      />
      <LoginTextInput
        error={errors.password}
        isRequired={isRequired.password}
        name='password'
        onChange={(e) => changeFieldValue(e.target.value, 'password')}
        title='비밀번호'
        type='password'
        value={values.password as string}
      />
      {errorMessage ? (
        <p className='text-red-500 text-sm mt-3'>{errorMessage}</p>
      ) : null}
      <p className='text-sm text-left text-[#00a9fb] mt-4 mb-4 hover:underline'>
        비밀번호를 잊으셨나요?
      </p>
      <button
        className='w-full py-2 rounded-[8px] bg-[#5865f2] hover:bg-blue-700 text-white'
        disabled={loading}
        type='submit'
      >
        {loading ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
};

export default LoginForm;
