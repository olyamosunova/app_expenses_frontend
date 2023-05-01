import { makeRequest } from '../make-request'

import { TGetPermanentExpenseResponse } from './types'

export const getPermanentExpenses = (date: string) =>
  makeRequest<TGetPermanentExpenseResponse>({
    endpoint: '/permanent-expense',
    method: 'GET',
    params: {
      query: {
        date,
      },
    },
  })
