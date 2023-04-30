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

const MONTHS_NAMES = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

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

  const month = MONTHS_NAMES[new Date(date).getMonth()]
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
              Категория{' '}
              <span style={{ color: theme.palette.info.dark }}>
                "{category}"
              </span>{' '}
              за <span style={{ color: theme.palette.info.dark }}>{month}</span>
            </h1>

            <Table>
              <TableHead>
                <TableCell>Дата</TableCell>
                <TableCell>Сумма</TableCell>
                <TableCell>Комментарий</TableCell>
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
