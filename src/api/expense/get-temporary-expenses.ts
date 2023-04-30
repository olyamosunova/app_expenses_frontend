import { makeRequest } from '../make-request'

import { TGetTemporaryExpenseResponse } from './types'

export const getTemporaryExpenses = (startDate: string, endDate: string) =>
  makeRequest<TGetTemporaryExpenseResponse>({
    endpoint: '/temporary-expense',
    method: 'GET',
    params: {
      query: {
        startDate,
        endDate,
      },
    },
  })
