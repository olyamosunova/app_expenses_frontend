export type TExpense = {
  id: string
  date: string
  money: number
  comment?: string
}

export type TTableExpenses<T extends string> = Record<T, TExpense[]>
