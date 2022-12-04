import { makeRequest } from '../make-request'

import { TGetPermanentExpenseResponse } from './types'

export const getPermanentExpenses = () =>
  makeRequest<TGetPermanentExpenseResponse[]>({
    endpoint: '/permanent-expense',
    method: 'GET',
  })
