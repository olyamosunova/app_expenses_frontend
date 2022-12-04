import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'

import { expensesApi } from 'api/expense'

import { AsyncReturnType } from '../types'

import { expensesKeys } from './query-keys'

export const usePermanentExpenses = (
  options?: UseQueryOptions<
    AsyncReturnType<typeof expensesApi.getPermanentExpenses>,
    AxiosError
  >,
) =>
  useQuery(
    expensesKeys.permanentExpenses(),
    expensesApi.getPermanentExpenses,
    // @ts-ignore
    {
      staleTime: Infinity,
      onError: (_: AxiosError) => undefined,
      ...options,
    },
  )
