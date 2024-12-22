import { useState } from 'react'

type FieldName = string
type FieldValue = string | number | boolean
type InputValidation = (newValue: FieldValue) => string
interface FormInfo {
  initialValue: FieldValue
  isEssential: boolean
  validation: InputValidation
}

type FieldInfos = Record<FieldName, FormInfo>

function initFieldInfo(fieldInfos: FieldInfos) {
  const initialValues: Record<FieldName, FieldValue> = {}
  const validations: Record<FieldName, InputValidation> = {}
  const isEssentials: Record<FieldName, boolean> = {}

  for (const fieldName in fieldInfos) {
    const { initialValue, isEssential, validation } = fieldInfos[fieldName]
    initialValues[fieldName] = initialValue
    isEssentials[fieldName] = isEssential
    validations[fieldName] = validation
  }

  return { initialValues, isEssentials, validations }
}

export default function useForm(
  fieldInfos: FieldInfos,
  submitCallback: () => void,
): {
  values: Record<FieldName, FieldValue>
  errors: Record<FieldName, string>
  isEssentials: Record<FieldName, boolean>
  onChange: (newValue: FieldValue, fieldName: FieldName) => void
  onSubmit: () => void
} {
  const { initialValues, isEssentials, validations } = initFieldInfo(fieldInfos)
  const [values, setValues] =
    useState<Record<FieldName, FieldValue>>(initialValues)
  const [errors, setErrors] = useState<Record<FieldName, string>>({})

  function onChange(newValue: FieldValue, fieldName: FieldName): void {
    const errorMessage = validations[fieldName](newValue)
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }))

    if (errorMessage === '') {
      setValues((oldValues) => ({
        ...oldValues,
        [fieldName]: newValue,
      }))
    }
  }

  function onSubmit(): void {
    for (const valueName in values) {
      if (isEssentials[valueName] && values[valueName] === '')
        return console.error('필수 항목을 작성해주세요')
      if (errors[valueName] !== '')
        return console.error('아직 오류가 남아있습니다')
    }
    submitCallback()
  }

  return {
    values,
    errors,
    isEssentials,
    onChange,
    onSubmit,
  }
}
