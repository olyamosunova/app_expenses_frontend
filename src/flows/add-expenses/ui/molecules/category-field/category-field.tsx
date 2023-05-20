import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import { FieldProps } from 'formik'

import { CATEGORY_TEMPORARY_OPTIONS } from '../../../constants'
import { TTemporaryFormValues } from '../../../types'

export const CategoryField = ({
  field,
  form,
}: FieldProps<TTemporaryFormValues>) => {
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="category-select-label">
        Choose an expense category
      </InputLabel>
      <NativeSelect
        {...field}
        inputProps={{
          name: field.name,
          id: 'category-select-label',
          disabled: form.isSubmitting,
        }}
      >
        {CATEGORY_TEMPORARY_OPTIONS.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}
