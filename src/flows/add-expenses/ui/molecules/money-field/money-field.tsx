import { TextField } from '@mui/material'
import { FieldProps, getIn } from 'formik'

import { TTemporaryFormValues } from '../../../types'

export const MoneyField = ({
  field,
  form,
}: FieldProps<TTemporaryFormValues>) => {
  return (
    <TextField
      {...field}
      disabled={form.isSubmitting}
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
