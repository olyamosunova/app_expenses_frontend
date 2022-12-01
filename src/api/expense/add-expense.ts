import { makeRequest } from '../make-request'

import { TAddExpenseResponse } from './types'

type TPayload = {
  date: Date
  category: string
  money: string
  comment: string
}

export const addExpense = (values: TPayload) =>
  makeRequest<TAddExpenseResponse>({
    endpoint: '/expense/create',
    method: 'POST',
    params: {
      body: values,
    },
  })
