import { makeRequest } from '../make-request'

import { TGetCategoryTemporaryExpenseResponse } from './types'

type TInput = {
  startDate: string
  endDate: string
  category: string
}

export const getCategoryExpenses = ({ startDate, endDate, category }: TInput) =>
  makeRequest<TGetCategoryTemporaryExpenseResponse>({
    endpoint: '/temporary-expense/category',
    method: 'GET',
    params: {
      query: {
        startDate,
        endDate,
        category,
      },
    },
  })
