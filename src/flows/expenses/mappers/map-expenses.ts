import { TGetExpenseResponse } from 'api/expense/types'

import { DEFAULT_TABLE_RESPONSES } from '../constants'
import { TTableExpenses } from '../types'

export const mapExpenses = (items: TGetExpenseResponse[]) =>
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
