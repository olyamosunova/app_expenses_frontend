import { DEFAULT_TABLE_RESPONSES } from '../constants'
import { TExpenseResponse, TTableExpenses } from '../types'

export const mapExpenses = (items: TExpenseResponse[]) =>
  items.reduce<TTableExpenses>((acc, item) => {
    return {
      ...acc,
      [item.category]: [
        ...acc[item.category],
        {
          id: item._id,
          date: item.date,
          money: Number(item.money),
          comment: item.comment,
        },
      ],
    }
  }, DEFAULT_TABLE_RESPONSES)
