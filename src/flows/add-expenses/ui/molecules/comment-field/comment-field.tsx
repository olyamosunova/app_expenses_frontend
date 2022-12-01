import { TextField } from '@mui/material'
import { FieldProps, getIn } from 'formik'

import { TFormValues } from '../../../types'

export const CommentField = ({ field, form }: FieldProps<TFormValues>) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="comment"
      label="Введите комментарий (необязательно)"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
