import { FormNames, TFormValues } from '../../types'

export const validateForm = (values: TFormValues) => {
  const errors: Record<string, string> = {}

  if (!values[FormNames.Money]) {
    errors[FormNames.Money] = 'Заполните поле'
  }

  return errors
}
