import { getDaysInMonth } from 'date-fns'

export const getPeriodExpenses = (date: Date) => {
  const startDate = new Date(date)
  startDate.setDate(1)
  startDate.setHours(0, 0, 0, 0)

  const endDate = new Date(date)
  endDate.setDate(getDaysInMonth(endDate))
  endDate.setHours(23, 59, 59, 999)

  return { startDate, endDate }
}
