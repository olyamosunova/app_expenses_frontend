import { styled } from '@mui/material'
import { useTemporaryExpenses } from 'features/expenses'
import { useContext } from 'react'
import { TEMPORARY_CATEGORY } from 'shared/constants'

import { Loader } from 'ui/atoms'
import { Col } from 'ui/core'
import { AccordionBlock } from 'ui/organisms'

import { AuthContext } from '../../../context'
import { mapTemporaryExpenses } from '../mappers'
import { ExpensesTable } from '../ui/molecules'
import { getPeriodExpenses } from '../utils'

const Container = styled(Col)`
  justify-content: center;
  align-items: center;
`

type Props = {
  date: string
}

export const TemporaryExpensesConnector = ({ date }: Props) => {
  const auth = useContext(AuthContext)

  const { startDate, endDate } = getPeriodExpenses(new Date(date))

  const { data, isLoading } = useTemporaryExpenses(
    startDate.toISOString(),
    endDate.toISOString(),
    {
      enabled: Boolean(startDate && endDate),
      onError: e => {
        if (e?.response?.status === 401) {
          auth.logout()
        }
      },
    },
  )

  const temporaryExpenses = data?.data ?? []

  return (
    <AccordionBlock
      id="temporary-expenses"
      title="Переменные расходы"
      isExpendedAtFirst
    >
      {isLoading ? (
        <Container>
          <Loader />
        </Container>
      ) : (
        <ExpensesTable
          isEmptyTable={!Boolean(temporaryExpenses.length)}
          expenses={mapTemporaryExpenses(temporaryExpenses)}
          categoryMapper={TEMPORARY_CATEGORY}
        />
      )}
    </AccordionBlock>
  )
}
