import { PermanentCategory, TemporaryCategory } from '../../types'

export const TEMPORARY_CATEGORY: Record<TemporaryCategory, string> = {
  [TemporaryCategory.Travel]: 'Поездки / Такси',
  [TemporaryCategory.Snus]: 'Снюс',
  [TemporaryCategory.SuperMarket]: 'Супермаркет',
  [TemporaryCategory.Snacks]: 'Снеки',
  [TemporaryCategory.Pharmacy]: 'Аптека',
  [TemporaryCategory.HouseholdGoods]: 'Бытовые товары',
  [TemporaryCategory.HairStyle]: 'Парикмахерская',
  [TemporaryCategory.Education]: 'Обучение',
  [TemporaryCategory.DeliveryProducts]: 'Доставка еды',
  [TemporaryCategory.Cosmetics]: 'Косметика',
  [TemporaryCategory.Clothes]: 'Одежда',
  [TemporaryCategory.Beverages]: 'Напитки (кола, соки)',
  [TemporaryCategory.Alcohol]: 'Алкоголь',
  [TemporaryCategory.Other]: 'Другое',
  [TemporaryCategory.Cat]: 'Кот',
  [TemporaryCategory.Water]: 'Вода',
}

export const PERMANENT_CATEGORY: Record<PermanentCategory, string> = {
  [PermanentCategory.Rent]: 'Аренда квартиры',
  [PermanentCategory.CommunalPayments]: 'Коммунальные платежи + интернет',
  [PermanentCategory.MobileConnection]: 'Мобильная связь',
  [PermanentCategory.HealthyFood]: 'Доставка здорового питания',
  [PermanentCategory.Lenses]: 'Линзы',
  [PermanentCategory.Sport]: 'Спорт',
  [PermanentCategory.WorkTax]: 'Налог по работе',
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
