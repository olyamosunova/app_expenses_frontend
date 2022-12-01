import { Category } from '../../types'
import { makeRequest } from '../make-request'

type TResponse = {
  money: string
  category: Category
  date: string
  comment?: string
  owner: string
  _id: string
}

export const getExpenses = (startDate: string, endDate: any) =>
  makeRequest<TResponse[]>({
    endpoint: '/expense',
    method: 'GET',
    params: {
      query: {
        startDate,
        endDate,
      },
    },
  })
