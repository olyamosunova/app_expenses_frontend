import { TParams } from './make-request'

export const getStringQueryFromArray = (queryKey: string, items: string[]) =>
  items.reduce((acc, item, index) => {
    if (index !== 0) {
      return `${acc}&${queryKey}=${item}`
    }

    return item
  }, ``)

const getQueryValue = (key: string, value: string | string[]) => {
  if (Array.isArray(value)) {
    return getStringQueryFromArray(key, value)
  }

  return value
}

export const getQuery = (query?: TParams['query']) => {
  if (query) {
    return `?${Object.entries(query)
      .map(([key, value]) => `${key}=${getQueryValue(key, value)}`)
      .join('&')}`
  }

  return ''
}
