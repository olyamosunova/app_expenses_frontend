import { FieldProps } from 'formik'

import { DatePickerCalendar } from 'ui/molecules'

import { TFormValues } from '../../../types'

export const DateField = ({ field, form }: FieldProps<TFormValues>) => {
  const handleChange = (value: Date) => {
    form.setFieldValue(field.name, value)
  }

  return (
    <DatePickerCalendar
      // @ts-ignore
      date={field.value}
      views={['day']}
      label="Записать расходы за"
      onChangeDate={handleChange}
    />
  )
}
