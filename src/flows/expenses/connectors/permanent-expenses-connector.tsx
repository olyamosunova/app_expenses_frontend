import { styled } from '@mui/material'
import { usePermanentExpenses } from 'features/expenses'
import { useContext } from 'react'
import { PERMANENT_CATEGORY } from 'shared/constants'

import { Loader } from 'ui/atoms'
import { Col } from 'ui/core'
import { AccordionBlock } from 'ui/organisms'

import { AuthContext } from '../../../context'
import { mapPermanentExpenses } from '../mappers'
import { ExpensesTable } from '../ui/molecules'

const Container = styled(Col)`
  justify-content: center;
  align-items: center;
`

export const PermanentExpensesConnector = () => {
  const auth = useContext(AuthContext)

  const { data, isLoading } = usePermanentExpenses({
    onError: error => {
      if (error?.response?.status === 401) {
        auth.logout()
      }
    },
  })

  const permanentExpenses = data?.data?.[0]?.values ?? []

  return (
    <AccordionBlock id="permanent-expenses" title="Постоянные расходы">
      {isLoading ? (
        <Container>
          <Loader />
        </Container>
      ) : (
        <ExpensesTable
          categoryMapper={PERMANENT_CATEGORY}
          isEmptyTable={!Boolean(permanentExpenses.length)}
          expenses={mapPermanentExpenses(permanentExpenses)}
        />
      )}
    </AccordionBlock>
  )
}