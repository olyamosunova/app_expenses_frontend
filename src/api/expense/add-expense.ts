import { TFormValues } from 'flows/add-expenses/types'

import { Category } from '../../types'
import { makeRequest } from '../make-request'

type TResponse = {
  expense: {
    money: string
    category: Category
    date: string
    comment?: string
    owner: string
    _id: string
  }
}

export const addExpense = (values: TFormValues) =>
  makeRequest<TResponse>({
    endpoint: '/expense/create',
    method: 'POST',
    params: {
      body: values,
    },
  })
