import { PermanentCategory, TemporaryCategory } from '../../types'

export const TEMPORARY_CATEGORY: Record<TemporaryCategory, string> = {
  [TemporaryCategory.Travel]: 'Trips / Taxi',
  [TemporaryCategory.Snus]: 'Snus',
  [TemporaryCategory.SuperMarket]: 'Supermarket',
  [TemporaryCategory.Snacks]: 'Snacks',
  [TemporaryCategory.Pharmacy]: 'Pharmacy',
  [TemporaryCategory.HouseholdGoods]: 'Household goods',
  [TemporaryCategory.HairStyle]: 'Hairdressing',
  [TemporaryCategory.Education]: 'Education',
  [TemporaryCategory.DeliveryProducts]: 'Delivery groceries',
  [TemporaryCategory.Cosmetics]: 'Cosmetics',
  [TemporaryCategory.Clothes]: 'Clothes',
  [TemporaryCategory.Beverages]: 'Beverages (cola, juice)',
  [TemporaryCategory.Alcohol]: 'Alcohol',
  [TemporaryCategory.Other]: 'Other',
  [TemporaryCategory.Cat]: 'Cat',
  [TemporaryCategory.Water]: 'Water',
}

export const PERMANENT_CATEGORY: Record<PermanentCategory, string> = {
  [PermanentCategory.Rent]: 'Flat rent',
  [PermanentCategory.CommunalPayments]: 'Utility payments + internet',
  [PermanentCategory.MobileConnection]: 'Mobile connection',
  [PermanentCategory.HealthyFood]: 'Delivery healthy food',
  [PermanentCategory.Lenses]: 'Contact lenses',
  [PermanentCategory.Sport]: 'Sport',
  [PermanentCategory.WorkTax]: 'Work tax',
}

export const PERMANENT_CATEGORY_KEYS = {
  [PermanentCategory.Rent]: 'rent',
  [PermanentCategory.MobileConnection]: 'mobile-connection',
  [PermanentCategory.CommunalPayments]: 'communal-payments',
  [PermanentCategory.WorkTax]: 'work-tax',
  [PermanentCategory.Sport]: 'sport',
  [PermanentCategory.Lenses]: 'lenses',
  [PermanentCategory.HealthyFood]: 'healthy-food',
}
