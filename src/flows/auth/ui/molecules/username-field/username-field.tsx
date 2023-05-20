import TextField from '@mui/material/TextField'
import { FieldProps, getIn } from 'formik'

import { TFormValues } from '../../../types'

type Props = FieldProps<TFormValues> & {
  isDisabled: boolean
}

export const UsernameField = ({ field, form, isDisabled }: Props) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="username"
      label="Enter your username"
      type="text"
      disabled={isDisabled}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
