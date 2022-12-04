import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { expensesApi } from 'api/expense'
import { TAddTemporaryExpenseResponse } from 'api/expense/types'

type TParameters = Parameters<typeof expensesApi.addTemporaryExpense>[0]

export const useAddTemporaryExpenses = () =>
  useMutation<
    AxiosResponse<TAddTemporaryExpenseResponse>,
    AxiosError,
    TParameters
  >(data => expensesApi.addTemporaryExpense(data))
