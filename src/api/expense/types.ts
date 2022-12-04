import { TemporaryCategory, PermanentCategory } from '../../types'

type TGetExpenseResponse = {
  money: string
  date: string
  comment?: string
  owner: string
  _id: string
}

export type TGetTemporaryExpenseResponse = TGetExpenseResponse & {
  category: TemporaryCategory
}

export type TGetPermanentExpenseResponse = {
  _id: string
  values: { money: number; category: PermanentCategory }[]
  owner: string
}

export type TAddTemporaryExpenseResponse = {
  expense: TGetTemporaryExpenseResponse
}

export type TAddPermanentExpenseResponse = {
  expense: TGetPermanentExpenseResponse
}
