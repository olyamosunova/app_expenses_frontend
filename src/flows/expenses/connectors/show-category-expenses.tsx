import {
  Box,
  Table,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material'
import { format } from 'date-fns'
import { useStore } from 'effector-react'
import { useCategoryExpenses } from 'features/expenses'
import { useParams } from 'react-router-dom'
import { TEMPORARY_CATEGORY } from 'shared/constants'
import { PageConnector } from 'shared/template/page'
import { TemporaryCategory } from 'types'

import { $expensesStartDate } from '../model'
import { getPeriodExpenses } from '../utils'

export const ShowCategoryExpenses = () => {
  const { id }: { id?: string } = useParams()
  const date = useStore($expensesStartDate)
  const dates = getPeriodExpenses(new Date(date))
  const theme = useTheme()

  const endDate = dates.endDate.toISOString()
  const startDate = dates.startDate.toISOString()

  const { data: expensesData } = useCategoryExpenses(
    {
      category: id ?? '',
      endDate,
      startDate,
    },
    {
      enabled: Boolean(id && endDate && startDate),
    },
  )

  const expenses = expensesData?.data?.expenses ?? []

  const category = TEMPORARY_CATEGORY[id as TemporaryCategory]

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
          <>
            <h1>
              Category{' '}
              <span style={{ color: theme.palette.info.dark }}>
                "{category}"
              </span>{' '}
              for{' '}
              <span style={{ color: theme.palette.info.dark }}>
                {format(new Date(date), 'MMMM')}
              </span>
            </h1>

            <Table>
              <TableHead>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Description</TableCell>
              </TableHead>
              {expenses.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {format(new Date(item.date), 'dd.MM.yyyy')}
                  </TableCell>
                  <TableCell>{item.money} €</TableCell>
                  <TableCell>{item.comment}</TableCell>
                </TableRow>
              ))}
            </Table>
          </>
        </Box>
      </Box>
    </PageConnector>
  )
}
