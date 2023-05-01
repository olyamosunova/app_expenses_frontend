import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { expensesApi } from 'api/expense'
import { TAddPermanentExpenseResponse } from 'api/expense/types'

import { TResponseError } from '../types'

type TParameters = Parameters<typeof expensesApi.addPermanentExpenses>[0]

export const useAddPermanentExpenses = () =>
  useMutation<
    AxiosResponse<TAddPermanentExpenseResponse>,
    TResponseError,
    TParameters
  >(payload => expensesApi.addPermanentExpenses(payload))
