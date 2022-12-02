import { FieldProps } from 'formik'

import { DatePickerCalendar } from 'ui/molecules'

import { TTemporaryFormValues } from '../../../types'

export const DateField = ({
  field,
  form,
}: FieldProps<TTemporaryFormValues>) => {
  const handleChange = (value: Date) => {
    form.setFieldValue(field.name, value)
  }

  return (
    <DatePickerCalendar
      isDisabled={form.isSubmitting}
      // @ts-ignore
      date={field.value}
      views={['day']}
      label="Записать расходы за"
      onChangeDate={handleChange}
    />
  )
}
