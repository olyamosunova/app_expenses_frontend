import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { CalendarPickerView } from '@mui/x-date-pickers/internals/models'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

type Props = {
  date: Date
  views: CalendarPickerView[]
  label: string
  openTo?: CalendarPickerView
  onChangeDate: (date: Date) => void
}

export const DatePickerCalendar = ({
  date,
  views,
  label,
  openTo = 'day',
  onChangeDate,
}: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={views}
        label={label}
        value={date}
        onChange={newValue => {
          //@ts-ignore
          onChangeDate(newValue)
        }}
        renderInput={params => <TextField {...params} helperText={null} />}
        openTo={openTo}
      />
    </LocalizationProvider>
  )
}
