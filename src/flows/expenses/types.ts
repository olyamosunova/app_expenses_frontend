import { Category } from '../../types'

export type TExpense = {
  id: string
  date: string
  money: number
  comment?: string
}

export type TTableExpenses = Record<Category, TExpense[]>
