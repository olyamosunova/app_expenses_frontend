import { TextField } from '@mui/material'
import { FieldProps, getIn } from 'formik'

import { TTemporaryFormValues } from '../../../types'

export const CommentField = ({
  field,
  form,
}: FieldProps<TTemporaryFormValues>) => {
  return (
    <TextField
      {...field}
      disabled={form.isSubmitting}
      error={Boolean(getIn(form.errors, field.name))}
      id="comment"
      label="Enter a description (optional)"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
