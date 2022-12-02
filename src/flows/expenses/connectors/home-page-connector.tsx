import { Box } from '@mui/material'
import { useState } from 'react'
import { PageConnector } from 'shared/template/page'

import { DatePickerCalendar } from 'ui/molecules'

import { Col } from '../../../ui/core'

import { PermanentExpensesConnector } from './permanent-expenses-connector'
import { TemporaryExpensesConnector } from './temporary-expenses-connector'

export const HomePageConnector = () => {
  const [date, setDate] = useState(new Date().toISOString())

  const handleChangeDates = (value: Date) => {
    setDate(value.toISOString())
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
