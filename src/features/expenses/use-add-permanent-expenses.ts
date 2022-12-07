import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { expensesApi } from 'api/expense'
import { TAddPermanentExpenseResponse } from 'api/expense/types'

import { TResponseError } from '../types'

type TParameters = Parameters<typeof expensesApi.addPermanentExpenses>

export const useAddPermanentExpenses = () =>
  useMutation<
    AxiosResponse<TAddPermanentExpenseResponse>,
    TResponseError,
    TParameters
  >(([id, values]) => expensesApi.addPermanentExpenses(id, values))
