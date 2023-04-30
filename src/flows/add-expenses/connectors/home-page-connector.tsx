import { Box } from '@mui/material'
import {
  useAddPermanentExpenses,
  useAddTemporaryExpenses,
  usePermanentExpenses,
} from 'features/expenses'
import { expensesKeys } from 'features/expenses/query-keys'
import { TResponseError } from 'features/types'
import { FormikHelpers } from 'formik'
import { useContext } from 'react'
import { useQueryClient } from 'react-query'
import { PERMANENT_CATEGORY_KEYS } from 'shared/constants'
import { snackTrigger } from 'shared/snack'
import { PageConnector } from 'shared/template/page'

import { TGetPermanentExpenseItem } from 'api/expense/types'

import { AuthContext } from '../../../context'
import { DEFAULT_TEMPORARY_CATEGORY } from '../constants'
import {
  PermanentFormNames,
  TPermanentFormValues,
  TTemporaryFormValues,
} from '../types'
import {
  AddPermanentExpenseForm,
  AddTemporaryExpenseForm,
} from '../ui/organisms'

const defaultTemporaryExpenseValues: TTemporaryFormValues = {
  date: new Date(),
  category: DEFAULT_TEMPORARY_CATEGORY.value,
  money: '',
  comment: '',
}

const getInitialPermanentValues = (
  initialValues: TGetPermanentExpenseItem[],
): TPermanentFormValues[] => {
  const values = Object.values(PERMANENT_CATEGORY_KEYS).map(category => ({
    [PermanentFormNames.Category]: category,
    [PermanentFormNames.Money]: String(
      initialValues.find(item => item.category === category)?.money ?? '',
    ),
  }))

  return values
}

const processAddExpenseError = (err: TResponseError) => {
  const message = err.response?.data?.message

  if (message) {
    snackTrigger({ message, type: 'error' })
  }
}

export const HomePageConnector = () => {
  const auth = useContext(AuthContext)
  const queryClient = useQueryClient()

  const { data } = usePermanentExpenses({
    onError: error => {
      processAddExpenseError(error)
      if (error?.response?.status === 401) {
        auth.logout()
      }
    },
  })

  const permanentExpenses = data?.data?.expenses ?? []
  const permanentId = data?.data?.id

  const addTemporaryExpense = useAddTemporaryExpenses()
  const addPermanentExpenses = useAddPermanentExpenses()

  const handleSubmitTemporaryExpense = async (
    values: TTemporaryFormValues,
    helpers: FormikHelpers<TTemporaryFormValues>,
  ) => {
    return addTemporaryExpense.mutateAsync(values, {
      onSuccess: data => {
        if (data?.data?.expense) {
          helpers.resetForm()
          snackTrigger({ message: 'Ваш расход успешно записан!' })
          queryClient.invalidateQueries(expensesKeys.allTemporaryExpenses)
        }
      },
      onError: processAddExpenseError,
    })
  }

  const handleSubmitPermanentExpense = async (values: {
    values: TPermanentFormValues[]
  }) => {
    const mappedData = values.values.map(item => ({
      ...item,
      money: Number(item.money),
    }))

    return addPermanentExpenses.mutateAsync(
      [permanentId ?? '', { values: mappedData }],
      {
        onSuccess: data => {
          if (data?.data?.expense) {
            snackTrigger({ message: 'Постоянные расходы успешно обновлены!' })
            queryClient.invalidateQueries(expensesKeys.permanentExpenses())
          }
        },
        onError: processAddExpenseError,
      },
    )
  }

  const permanentInitialValues = getInitialPermanentValues(permanentExpenses)

  return (
    <PageConnector>
      <Box>
        <AddTemporaryExpenseForm
          onSubmitForm={handleSubmitTemporaryExpense}
          defaultValues={defaultTemporaryExpenseValues}
        />

        <AddPermanentExpenseForm
          onSubmitForm={handleSubmitPermanentExpense}
          defaultValues={{ values: permanentInitialValues }}
        />
      </Box>
    </PageConnector>
  )
}
