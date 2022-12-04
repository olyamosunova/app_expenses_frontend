import {
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

import { TExpense, TTableExpenses } from '../../../types'

type Props<T extends string> = {
  isEmptyTable: boolean
  expenses: TTableExpenses<T>
  categoryMapper: Record<T, string>
}

export const ExpensesTable = <T extends string>({
  isEmptyTable,
  expenses,
  categoryMapper,
}: Props<T>) => {
  if (isEmptyTable) {
    return <Typography>Нет данных за выбранный период</Typography>
  }

  const cellsCount = Math.max(
    ...Object.values(expenses).map(item => (item as TExpense[]).length),
  )

  const expensesEntries = Object.entries(expenses) as [T, TExpense[]][]
  const expensesValues = Object.values(expenses) as TExpense[][]

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
          {expensesEntries.map(([category, rows], index) => (
            <TableRow key={index}>
              <TableCell>{categoryMapper[category as T]}</TableCell>
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
                {expensesValues
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
