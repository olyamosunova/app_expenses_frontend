import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'

import { Category } from '../../../../../types'
import { CATEGORY } from '../../../constants'
import { TTableExpenses } from '../../../types'

type Props = {
  isEmptyTable: boolean
  expenses: TTableExpenses
}

export const ExpensesTable = ({ isEmptyTable, expenses }: Props) => {
  if (isEmptyTable) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>Нет данных за выбранный период</Typography>
      </Box>
    )
  }

  const cellsCount = Math.max(
    ...Object.values(expenses).map(item => item.length),
  )

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Категория</TableCell>
            <TableCell sx={{ width: '45%' }}>Общая сумма</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(expenses).map(([category, rows], index) => (
            <TableRow key={index}>
              <TableCell>{CATEGORY[category as Category]}</TableCell>
              <TableCell align="center">
                {rows.reduce((acc, item) => acc + item.money, 0).toFixed(2)} €
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={cellsCount}>
              <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
                Общая сумма по всем категориям:{' '}
                {Object.values(expenses)
                  .reduce((acc, item) => {
                    const cost = item.reduce(
                      (accItem, itemIndex) => accItem + itemIndex.money,
                      0,
                    )

                    return acc + cost
                  }, 0)
                  .toFixed(2)}{' '}
                €
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}
