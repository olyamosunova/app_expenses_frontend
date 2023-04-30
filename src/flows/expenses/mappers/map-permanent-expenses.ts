import { TGetPermanentExpenseItem } from 'api/expense/types'

import { PermanentCategory } from '../../../types'
import { DEFAULT_TABLE_PERMANENT_RESPONSES } from '../constants'
import { TTableExpenses } from '../types'

export const mapPermanentExpenses = (items: TGetPermanentExpenseItem[]) =>
  items.reduce<TTableExpenses<PermanentCategory>>((acc, item) => {
    return {
      ...acc,
      [item.category]: [
        ...acc[item.category],
        {
          money: item.money,
        },
      ],
    }
  }, DEFAULT_TABLE_PERMANENT_RESPONSES)
