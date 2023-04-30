import ListIcon from '@mui/icons-material/List'
import { Box, TableCell, TableRow } from '@mui/material'
import { Link } from 'react-router-dom'
import { paths } from 'shared/routing'
import styled from 'styled-components'

import { TExpense } from '../../../types'

const DisabledIcon = styled(Box)`
  opacity: 0.12;
`

type Props<T extends string> = {
  category: T
  rows: TExpense[]
  categoryMapper: Record<T, string>
  isShowDetail?: boolean
}

export const ExpensesTableRow = <T extends string>({
  category,
  rows,
  categoryMapper,
  isShowDetail,
}: Props<T>) => {
  const categoryName = categoryMapper[category as T]

  const amount = rows.reduce((acc, item) => acc + item.money, 0)
  const isDisabledDetail = amount === 0

  return (
    <TableRow>
      <TableCell>{categoryName}</TableCell>
      <TableCell align="center">{amount.toFixed(2)} €</TableCell>
      {isShowDetail ? (
        <TableCell align="center">
          {!isDisabledDetail ? (
            <Link
              to={`${paths.showExpenses.home}/${category}`}
              style={{ textDecoration: 'none' }}
            >
              <ListIcon color="primary" />
            </Link>
          ) : (
            <DisabledIcon>
              <ListIcon />
            </DisabledIcon>
          )}
        </TableCell>
      ) : null}
    </TableRow>
  )
}
