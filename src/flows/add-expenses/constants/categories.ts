import { TEMPORARY_CATEGORY } from 'shared/constants'

import { TemporaryCategory } from '../../../types'
import { TOption } from '../types'

export const DEFAULT_TEMPORARY_CATEGORY = {
  value: TemporaryCategory.Other,
  label: TEMPORARY_CATEGORY[TemporaryCategory.Other],
}

export const CATEGORY_TEMPORARY_OPTIONS: TOption[] = [
  DEFAULT_TEMPORARY_CATEGORY,
  {
    value: TemporaryCategory.SuperMarket,
    label: TEMPORARY_CATEGORY[TemporaryCategory.SuperMarket],
  },
  {
    value: TemporaryCategory.DeliveryProducts,
    label: TEMPORARY_CATEGORY[TemporaryCategory.DeliveryProducts],
  },
  {
    value: TemporaryCategory.Clothes,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Clothes],
  },
  {
    value: TemporaryCategory.Cosmetics,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Cosmetics],
  },
  {
    value: TemporaryCategory.Cat,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Cat],
  },
  {
    value: TemporaryCategory.HouseholdGoods,
    label: TEMPORARY_CATEGORY[TemporaryCategory.HouseholdGoods],
  },
  {
    value: TemporaryCategory.Travel,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Travel],
  },
  {
    value: TemporaryCategory.Pharmacy,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Pharmacy],
  },
  {
    value: TemporaryCategory.HairStyle,
    label: TEMPORARY_CATEGORY[TemporaryCategory.HairStyle],
  },
  {
    value: TemporaryCategory.Alcohol,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Alcohol],
  },
  {
    value: TemporaryCategory.Snus,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Snus],
  },
  {
    value: TemporaryCategory.Education,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Education],
  },
  {
    value: TemporaryCategory.Water,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Water],
  },
  {
    value: TemporaryCategory.Beverages,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Beverages],
  },
  {
    value: TemporaryCategory.Snacks,
    label: TEMPORARY_CATEGORY[TemporaryCategory.Snacks],
  },
]

export const CATEGORY_PERMANENT_OPTIONS: TOption[] = [
  {
    value: '',
    label: '',
  },
]
