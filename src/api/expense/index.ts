import { addPermanentExpenses } from './add-permanent-expenses'
import { addTemporaryExpense } from './add-temporary-expense'
import { getPermanentExpenses } from './get-permanent-expenses'
import { getTemporaryExpenses } from './get-temporary-expenses'

export const expensesApi = {
  addTemporaryExpense,
  addPermanentExpenses,
  getPermanentExpenses,
  getTemporaryExpenses,
}
