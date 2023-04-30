import { TemporaryCategory, PermanentCategory } from '../../types'

export type TGetExpenseItem = {
  money: string
  date: string
  comment?: string
  id: string
  category: TemporaryCategory
}

export type TGetTemporaryExpenseResponse = {
  expenses: TGetExpenseItem[]
}

export type TGetPermanentExpenseItem = {
  money: number
  category: PermanentCategory
}

export type TGetPermanentExpenseResponse = {
  id: string
  expenses: TGetPermanentExpenseItem[]
}

export type TAddTemporaryExpenseResponse = {
  expense: TGetTemporaryExpenseResponse
}

export type TAddPermanentExpenseResponse = {
  expense: TGetPermanentExpenseResponse
}

export type TGetCategoryTemporaryExpenseResponse = {
  expenses: { date: string; comment: string; money: string }[]
}
