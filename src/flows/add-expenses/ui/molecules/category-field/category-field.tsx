import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import { FieldProps } from 'formik'

import { CATEGORY_OPTIONS } from '../../../constants'
import { TFormValues } from '../../../types'

export const CategoryField = ({ field }: FieldProps<TFormValues>) => {
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="category-select-label">
        Выберите категорию расходов
      </InputLabel>
      <NativeSelect
        {...field}
        inputProps={{
          name: field.name,
          id: 'category-select-label',
        }}
      >
        {CATEGORY_OPTIONS.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}
