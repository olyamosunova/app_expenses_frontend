import { Box } from '@mui/material'
import { useStore } from 'effector-react'
import { PageConnector } from 'shared/template/page'

import { Col } from 'ui/core'
import { DatePickerCalendar } from 'ui/molecules'

import { $expensesStartDate, setExpensesStartDate } from '../model'

import { PermanentExpensesConnector } from './permanent-expenses-connector'
import { TemporaryExpensesConnector } from './temporary-expenses-connector'

export const HomePageConnector = () => {
  const date = useStore($expensesStartDate)

  const handleChangeDates = (value: Date) => {
    setExpensesStartDate(value.toISOString())
  }

  return (
    <PageConnector>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            views={['year', 'month']}
            label="Показано за:"
            openTo="month"
            onChangeDate={handleChangeDates}
          />

          <Col>
            <PermanentExpensesConnector />
            <TemporaryExpensesConnector date={date} />
          </Col>
        </Box>
      </Box>
    </PageConnector>
  )
}
