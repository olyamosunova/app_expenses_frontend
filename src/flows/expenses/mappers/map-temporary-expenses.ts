import { TGetTemporaryExpenseResponse } from 'api/expense/types'

import { TemporaryCategory } from '../../../types'
import { DEFAULT_TABLE_TEMPORARY_RESPONSES } from '../constants'
import { TTableExpenses } from '../types'

export const mapTemporaryExpenses = (items: TGetTemporaryExpenseResponse[]) =>
  items.reduce<TTableExpenses<TemporaryCategory>>((acc, item) => {
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
  }, DEFAULT_TABLE_TEMPORARY_RESPONSES)
