import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

type Props = {
  date: Date
  onChangeDate: (date: Date) => void
}

export const DatePickerCalendar = ({ date, onChangeDate }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['year', 'month']}
        label="Показано за:"
        value={date}
        onChange={newValue => {
          //@ts-ignore
          onChangeDate(newValue)
        }}
        renderInput={params => <TextField {...params} helperText={null} />}
        openTo="month"
      />
    </LocalizationProvider>
  )
}
