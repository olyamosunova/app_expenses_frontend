import { DatePickerCalendar } from 'ui/molecules'

type Props = {
  isDisabled?: boolean
  value: string
  onChange: (date: Date) => void
}

export const DatePicker = ({ isDisabled, value, onChange }: Props) => {
  return (
    <DatePickerCalendar
      isDisabled={isDisabled}
      date={new Date(value)}
      views={['day']}
      label="Записать расходы за"
      onChangeDate={onChange}
    />
  )
}
