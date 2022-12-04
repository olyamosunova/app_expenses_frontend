import { TemporaryFormNames, TTemporaryFormValues } from '../../types'

export const validateForm = (values: TTemporaryFormValues) => {
  const errors: Record<string, string> = {}

  if (!values[TemporaryFormNames.Money]) {
    errors[TemporaryFormNames.Money] = 'Заполните поле'
  }

  return errors
}
