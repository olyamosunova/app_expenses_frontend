import { makeRequest } from '../make-request'

import { TAddTemporaryExpenseResponse } from './types'

type TPayload = {
  date: Date
  category: string
  money: string
  comment: string
}

export const addTemporaryExpense = (values: TPayload) =>
  makeRequest<TAddTemporaryExpenseResponse>({
    endpoint: '/temporary-expense/create',
    method: 'POST',
    params: {
      body: values,
    },
  })
