import { expensesApi } from 'api/expense'

type TCategoryPayload = Parameters<typeof expensesApi.getCategoryExpenses>[0]

export const expensesKeys = {
  permanentExpenses: (date: Date) =>
    ['permanent-expenses', date.getMonth() + 1, date.getFullYear()] as const,
  allTemporaryExpenses: ['temporary-expenses'] as const,
  temporaryExpenses: (from: string, to: string) =>
    [...expensesKeys.allTemporaryExpenses, from, to] as const,
  categoryExpenses: (payload: TCategoryPayload) =>
    [
      ...expensesKeys.allTemporaryExpenses,
      payload.startDate,
      payload.endDate,
      payload.category,
    ] as const,
}
