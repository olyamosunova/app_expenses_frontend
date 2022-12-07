import TextField from '@mui/material/TextField'
import { FieldProps, getIn } from 'formik'

import { TFormValues } from '../../../types'

export const PasswordField = ({ field, form }: FieldProps<TFormValues>) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="password"
      label="Введите пароль"
      type="password"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
