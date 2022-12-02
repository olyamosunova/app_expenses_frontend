import { TemporaryCategory, PermanentCategory } from '../../../types'

export const DEFAULT_TABLE_TEMPORARY_RESPONSES = {
  [TemporaryCategory.SuperMarket]: [],
  [TemporaryCategory.DeliveryProducts]: [],
  [TemporaryCategory.Water]: [],
  [TemporaryCategory.HouseholdGoods]: [],
  [TemporaryCategory.Beverages]: [],
  [TemporaryCategory.Alcohol]: [],
  [TemporaryCategory.Snacks]: [],
  [TemporaryCategory.Pharmacy]: [],
  [TemporaryCategory.Snus]: [],
  [TemporaryCategory.Travel]: [],
  [TemporaryCategory.Cosmetics]: [],
  [TemporaryCategory.Education]: [],
  [TemporaryCategory.HairStyle]: [],
  [TemporaryCategory.Clothes]: [],
  [TemporaryCategory.Cat]: [],
  [TemporaryCategory.Other]: [],
}

export const DEFAULT_TABLE_PERMANENT_RESPONSES = {
  [PermanentCategory.Rent]: [],
  [PermanentCategory.CommunalPayments]: [],
  [PermanentCategory.HealthyFood]: [],
  [PermanentCategory.Lenses]: [],
  [PermanentCategory.Sport]: [],
  [PermanentCategory.MobileConnection]: [],
  [PermanentCategory.WorkTax]: [],
}
