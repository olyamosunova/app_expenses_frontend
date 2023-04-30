import { createEvent, restore } from 'effector'

export const setExpensesStartDate = createEvent<string>()
export const $expensesStartDate = restore(
  setExpensesStartDate,
  new Date().toISOString(),
)
