import { useQuery, UseQueryOptions } from 'react-query'

import { expensesApi } from 'api/expense'

import { AsyncReturnType, TResponseError } from '../types'

import { expensesKeys } from './query-keys'

export const useTemporaryExpenses = (
  startDate: string,
  endDate: string,
  options?: UseQueryOptions<
    AsyncReturnType<typeof expensesApi.getTemporaryExpenses>,
    TResponseError
  >,
) =>
  useQuery(
    expensesKeys.temporaryExpenses(startDate, endDate),
    () => expensesApi.getTemporaryExpenses(startDate, endDate),
    // @ts-ignore
    {
      staleTime: Infinity,
      onError: (_: TResponseError) => undefined,
      ...options,
    },
  )
