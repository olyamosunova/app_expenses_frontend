import { Category } from '../../types'

export type TGetExpenseResponse = {
  money: string
  category: Category
  date: string
  comment?: string
  owner: string
  _id: string
}

export type TAddExpenseResponse = {
  expense: TGetExpenseResponse
}
