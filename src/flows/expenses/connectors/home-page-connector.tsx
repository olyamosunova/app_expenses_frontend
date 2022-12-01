import { Box } from '@mui/material'
import { useCallback, useContext, useEffect, useState } from 'react'
import { PageConnector } from 'shared/template/page'

import { expensesApi } from 'api/expense'

import { AuthContext } from '../../../context'
import { mapExpenses } from '../mappers'
import { TExpenseResponse } from '../types'
import { DatePickerCalendar } from '../ui/molecules'
import { ExpensesLoader, ExpensesTable } from '../ui/molecules'

export const HomePageConnector = () => {
  const auth = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState(new Date().toISOString())
  const [expenses, setExpenses] = useState<TExpenseResponse[]>([])

  const getExpenses = useCallback(
    async (currentDate: Date) => {
      setLoading(true)

      expensesApi
        .getExpenses(currentDate.toISOString())
        .then(data => {
          if (data) {
            const newExpenses = data.data ?? []
            setExpenses(newExpenses)
          }
        })
        .catch(e => {
          if (e.response.status === 401) {
            auth.logout()
          }
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [auth],
  )

  useEffect(() => {
    getExpenses(new Date(date))
  }, [getExpenses, date])

  const handleChangeDates = (value: Date) => {
    setDate(value.toISOString())
  }

  const content = loading ? (
    <ExpensesLoader />
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginTop: '6px',
      }}
    >
      <DatePickerCalendar
        date={new Date(date)}
        onChangeDate={handleChangeDates}
      />
      <ExpensesTable
        isEmptyTable={!Boolean(expenses.length)}
        expenses={mapExpenses(expenses)}
      />
    </Box>
  )

  return (
    <PageConnector>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>{content}</Box>
    </PageConnector>
  )
}
