import { useQuery, UseQueryOptions } from 'react-query'

import { expensesApi } from 'api/expense'

import { AsyncReturnType, TResponseError } from '../types'

import { expensesKeys } from './query-keys'

type TParams = Parameters<typeof expensesApi.getCategoryExpenses>[0]

export const useCategoryExpenses = (
  payload: TParams,
  options?: UseQueryOptions<
    AsyncReturnType<typeof expensesApi.getCategoryExpenses>,
    TResponseError
  >,
) =>
  useQuery(
    expensesKeys.categoryExpenses(payload),
    () => expensesApi.getCategoryExpenses(payload),
    // @ts-ignore
    {
      staleTime: Infinity,
      onError: (_: TResponseError) => undefined,
      ...options,
    },
  )
