import { Dispatch, SetStateAction, useState } from 'react'

type valueName = string
type inputValue = string | number | boolean
type formInfos = Record<valueName, formInfo>
interface formInfo {
  initialValue: inputValue
  //   isEssential: boolean
  //   validation(newValue: formValue): string
}

interface useFormProps {
  formValueInfos: formInfos
  //   onSubmit(): void
}

// 요구사항:
// 1. 값 제어
// - onChange 함수 반환
// - validation & 에러 반환
// - 전체 값 초기화 함수 반환
// - 필수여부
// 2. 제출 클릭시 콜백 실행

function initializeInputInfos(infos: formInfos) {
  const initialValues: Record<valueName, inputValue> = {}

  for (const valueName in infos) {
    initialValues[valueName] = infos[valueName].initialValue
  }

  return { initialValues }
}

export default function useForm({ formValueInfos }: useFormProps) {
  const [values, setValues] = useState<Record<valueName, inputValue>>({})
  const { initialValues } = initializeInputInfos(formValueInfos)
  setValues(initialValues)

  function onChange(newValue: inputValue, valueName: valueName) {
    // if validation true
    setValues((oldValues) => ({
      ...oldValues,
      [valueName]: newValue,
    }))
  }

  return {
    values,
    onChange,
    // isEssential,
    // errorMessage,
  }
}
