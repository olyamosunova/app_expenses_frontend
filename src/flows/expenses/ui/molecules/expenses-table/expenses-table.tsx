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
import { ExpensesTableRow } from '../../atoms'

type Props<T extends string> = {
  isEmptyTable: boolean
  expenses: TTableExpenses<T>
  categoryMapper: Record<T, string>
  isShowDetail?: boolean
}

export const ExpensesTable = <T extends string>({
  isEmptyTable,
  expenses,
  categoryMapper,
  isShowDetail = true,
}: Props<T>) => {
  if (isEmptyTable) {
    return <Typography>No data for the selected period</Typography>
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
            <TableCell>Category</TableCell>
            <TableCell sx={{ width: '45%' }}>Total amount</TableCell>
            {isShowDetail ? <TableCell /> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesEntries.map(([category, rows], index) => (
            <ExpensesTableRow
              key={index}
              rows={rows}
              categoryMapper={categoryMapper}
              category={category}
              isShowDetail={isShowDetail}
            />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={cellsCount}>
              <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
                Total amount for all categories:{' '}
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
