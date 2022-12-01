import { CATEGORY } from 'shared/constants'

import { Category } from '../../../types'
import { TOption } from '../types'

export const DEFAULT_CATEGORY = {
  value: Category.Other,
  label: CATEGORY[Category.Other],
}

export const CATEGORY_OPTIONS: TOption[] = [
  DEFAULT_CATEGORY,
  {
    value: Category.SuperMarket,
    label: CATEGORY[Category.SuperMarket],
  },
  {
    value: Category.DeliveryProducts,
    label: CATEGORY[Category.DeliveryProducts],
  },
  {
    value: Category.Clothes,
    label: CATEGORY[Category.Clothes],
  },
  {
    value: Category.Cosmetics,
    label: CATEGORY[Category.Cosmetics],
  },
  {
    value: Category.Cat,
    label: CATEGORY[Category.Cat],
  },
  {
    value: Category.HouseholdGoods,
    label: CATEGORY[Category.HouseholdGoods],
  },
  {
    value: Category.Travel,
    label: CATEGORY[Category.Travel],
  },
  {
    value: Category.Pharmacy,
    label: CATEGORY[Category.Pharmacy],
  },
  {
    value: Category.HairStyle,
    label: CATEGORY[Category.HairStyle],
  },
  {
    value: Category.Alcohol,
    label: CATEGORY[Category.Alcohol],
  },
  {
    value: Category.Snus,
    label: CATEGORY[Category.Snus],
  },
  {
    value: Category.Education,
    label: CATEGORY[Category.Education],
  },
  {
    value: Category.Water,
    label: CATEGORY[Category.Water],
  },
  {
    value: Category.Beverages,
    label: CATEGORY[Category.Beverages],
  },
  {
    value: Category.Snacks,
    label: CATEGORY[Category.Snacks],
  },
]
