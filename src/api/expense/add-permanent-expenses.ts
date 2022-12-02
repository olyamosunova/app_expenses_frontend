import { makeRequest } from '../make-request'

import { TAddPermanentExpenseResponse } from './types'

type TPayload = {
  values: { category: string; money: number }[]
}

export const addPermanentExpenses = (id: string, values: TPayload) =>
  makeRequest<TAddPermanentExpenseResponse>({
    endpoint: '/permanent-expense/create',
    method: 'PUT',
    params: {
      body: {
        id,
        values,
      },
    },
  })
