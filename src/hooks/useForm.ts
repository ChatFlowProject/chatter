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
  submitCallback: (formValues: Record<FieldName, FieldValue>) => void,
): {
  values: Record<FieldName, FieldValue>
  errors: Record<FieldName, string>
  isEssentials: Record<FieldName, boolean>
  changeFieldValue: (newValue: FieldValue, fieldName: FieldName) => void
  submitForm: () => void
} {
  const { initialValues, isEssentials, validations } = initFieldInfo(fieldInfos)
  const [values, setValues] =
    useState<Record<FieldName, FieldValue>>(initialValues)
  const [errors, setErrors] = useState<Record<FieldName, string>>({})

  function changeFieldValue(newValue: FieldValue, fieldName: FieldName): void {
    const errorMessage = validations[fieldName](newValue)
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }))

    if (errorMessage === '') {
      setValues((oldValues) => ({
        ...oldValues,
        [fieldName]: newValue,
      }))
    }
  }

  function submitForm(): void {
    for (const valueName in values) {
      if (isEssentials[valueName] && values[valueName] === '')
        return console.error('필수 항목을 작성해주세요')
      if (errors[valueName] !== '')
        return console.error('아직 오류가 남아있습니다')
    }
    submitCallback(values)
  }

  return {
    values,
    errors,
    isEssentials,
    changeFieldValue,
    submitForm,
  }
}
