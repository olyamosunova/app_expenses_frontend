import { makeRequest } from '../make-request'

import { TGetExpenseResponse } from './types'

export const getExpenses = (startDate: string, endDate: any) =>
  makeRequest<TGetExpenseResponse[]>({
    endpoint: '/expense',
    method: 'GET',
    params: {
      query: {
        startDate,
        endDate,
      },
    },
  })
