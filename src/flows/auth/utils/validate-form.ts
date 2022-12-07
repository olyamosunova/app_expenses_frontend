import { FormNames, TFormValues } from '../types'

const ERRORS_TEXTS = {
  required: 'Заполните поле',
}

export const validateForm = (values: TFormValues) => {
  const errors: Record<string, string> = {}

  if (!values[FormNames.Username]) {
    errors[FormNames.Username] = ERRORS_TEXTS.required
  }

  if (!values[FormNames.Password]) {
    errors[FormNames.Password] = ERRORS_TEXTS.required
  }

  return errors
}
