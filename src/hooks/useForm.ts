import { useState } from 'react'

type valueName = string
type inputValue = string | number | boolean
type formInfos = Record<valueName, formInfo>
type validation = (newValue: inputValue) => string
interface formInfo {
  initialValue: inputValue
  //   isEssential: boolean
  validation: validation
}

// 요구사항:
// 1. 값 제어
// - 전체 값 초기화 함수 반환
// - 필수여부

function initializeInputInfos(infos: formInfos) {
  const initialValues: Record<valueName, inputValue> = {}
  const validations: Record<valueName, validation> = {}

  for (const valueName in infos) {
    const { initialValue, validation } = infos[valueName]
    initialValues[valueName] = initialValue
    validations[valueName] = validation
  }

  return { initialValues, validations }
}

export default function useForm(
  formValueInfos: formInfos,
  submitCallback: () => void,
): {
  values: Record<valueName, inputValue>
  errors: Record<valueName, string>
  onChange: (newValue: inputValue, valueName: valueName) => void
  onSubmit: () => void
} {
  const { initialValues, validations } = initializeInputInfos(formValueInfos)
  const [values, setValues] =
    useState<Record<valueName, inputValue>>(initialValues)
  const [errors, setErrors] = useState<Record<valueName, string>>({})

  function onChange(newValue: inputValue, valueName: valueName): void {
    const errorMessage = validations[valueName](newValue)
    setErrors((prevErrors) => ({ ...prevErrors, [valueName]: errorMessage }))

    if (errorMessage === '') {
      setValues((oldValues) => ({
        ...oldValues,
        [valueName]: newValue,
      }))
    }
  }

  function onSubmit(): void {
    for (const valueName in errors) {
      if (errors[valueName] !== '')
        return console.error('아직 오류가 남아있습니다')
    }
    submitCallback()
  }

  return {
    values,
    errors,
    onChange,
    onSubmit,
    // isEssential,
  }
}
