import { makeRequest } from '../make-request'

import { TAddPermanentExpenseResponse } from './types'

type TPayload = {
  id: string
  data: { category: string; money: number }[]
  date: Date
}

export const addPermanentExpenses = (body: TPayload) =>
  makeRequest<TAddPermanentExpenseResponse>({
    endpoint: '/permanent-expense/create',
    method: 'PUT',
    params: {
      body,
    },
  })
