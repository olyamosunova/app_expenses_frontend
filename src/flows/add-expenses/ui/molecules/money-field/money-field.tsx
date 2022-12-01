import { TextField } from '@mui/material'
import { FieldProps, getIn } from 'formik'

import { TFormValues } from '../../../types'

export const MoneyField = ({ field, form }: FieldProps<TFormValues>) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="money"
      label="Введите потраченную сумму"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
