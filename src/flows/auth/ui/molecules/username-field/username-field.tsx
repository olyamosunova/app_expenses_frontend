import TextField from '@mui/material/TextField'
import { FieldProps, getIn } from 'formik'

import { TFormValues } from '../../../types'

export const UsernameField = ({ field, form }: FieldProps<TFormValues>) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="username"
      label="Введите имя пользователя"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
