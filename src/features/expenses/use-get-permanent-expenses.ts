import { useQuery, UseQueryOptions } from 'react-query'

import { expensesApi } from 'api/expense'

import { AsyncReturnType, TResponseError } from '../types'

import { expensesKeys } from './query-keys'

export const usePermanentExpenses = (
  options?: UseQueryOptions<
    AsyncReturnType<typeof expensesApi.getPermanentExpenses>,
    TResponseError
  >,
) =>
  useQuery(
    expensesKeys.permanentExpenses(),
    expensesApi.getPermanentExpenses,
    // @ts-ignore
    {
      staleTime: Infinity,
      onError: (_: TResponseError) => undefined,
      ...options,
    },
  )
