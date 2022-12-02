import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'

import { expensesApi } from 'api/expense'

import { AsyncReturnType } from '../types'

import { expensesKeys } from './query-keys'

export const useTemporaryExpenses = (
  startDate: string,
  endDate: string,
  options?: UseQueryOptions<
    AsyncReturnType<typeof expensesApi.getTemporaryExpenses>,
    AxiosError
  >,
) =>
  useQuery(
    expensesKeys.temporaryExpenses(startDate, endDate),
    () => expensesApi.getTemporaryExpenses(startDate, endDate),
    // @ts-ignore
    {
      staleTime: Infinity,
      onError: (_: AxiosError) => undefined,
      ...options,
    },
  )
