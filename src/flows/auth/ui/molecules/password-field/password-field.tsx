import TextField from '@mui/material/TextField'
import { FieldProps, getIn } from 'formik'

import { TFormValues } from '../../../types'

type Props = FieldProps<TFormValues> & {
  isDisabled: boolean
}

export const PasswordField = ({ field, form, isDisabled }: Props) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="password"
      label="Enter your password"
      type="password"
      disabled={isDisabled}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
