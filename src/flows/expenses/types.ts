import { Category } from '../../types'

export type TExpenseResponse = {
  _id: string
  money: string
  category: Category
  date: string
  owner: string
  comment?: string
}

export type TExpense = {
  id: string
  date: string
  money: number
  comment?: string
}

export type TTableExpenses = Record<Category, TExpense[]>
