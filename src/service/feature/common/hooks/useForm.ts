import { useState } from 'react';

type ValidationFn<T> = (value: T[keyof T]) => string;

type FieldInfo<T> = {
  initialValue: T[keyof T];
  isRequired: boolean;
  validation: ValidationFn<T>;
};

type FieldInfos<T> = {
  [K in keyof T]: FieldInfo<T>;
};

export default function useForm<T extends Record<string, any>>(fieldInfos: FieldInfos<T>) {
  const initialValues = Object.keys(fieldInfos).reduce((acc, key) => {
    acc[key as keyof T] = fieldInfos[key as keyof T].initialValue;
    return acc;
  }, {} as T);

  const initialErrors = {} as Record<keyof T, string>;
  const isRequired = {} as Record<keyof T, boolean>;
  const validations = {} as Record<keyof T, ValidationFn<T>>;

  for (const key in fieldInfos) {
    isRequired[key] = fieldInfos[key].isRequired;
    validations[key] = fieldInfos[key].validation;
    initialErrors[key] = '';
  }

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>(initialErrors);

  const changeFieldValue = (key: keyof T, value: T[keyof T]) => {
    const error = validations[key](value);
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const validate = (): boolean => {
    let isValid = true;
    const newErrors = { ...errors };

    for (const key in values) {
      const value = values[key];
      const error = validations[key](value);
      if (isRequired[key] && value === '') {
        isValid = false;
        newErrors[key] = '필수 항목입니다';
      } else if (error) {
        isValid = false;
        newErrors[key] = error;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  return {
    values,
    errors,
    isRequired,
    changeFieldValue,
    validate,
  };
}