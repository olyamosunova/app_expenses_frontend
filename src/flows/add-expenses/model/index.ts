import { createEvent, restore } from 'effector'
import { createGate } from 'effector-react'

export const AddPageGate = createGate()

export const setAddedExpenseDate = createEvent<string>()
export const $addedExpenseDate = restore(
  setAddedExpenseDate,
  new Date().toISOString(),
)
$addedExpenseDate.reset(AddPageGate.close)
