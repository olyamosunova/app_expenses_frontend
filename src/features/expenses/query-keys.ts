export const expensesKeys = {
  permanentExpenses: () => ['permanent-expenses'] as const,
  allTemporaryExpenses: ['temporary-expenses'] as const,
  temporaryExpenses: (from: string, to: string) =>
    [...expensesKeys.allTemporaryExpenses, from, to] as const,
}
