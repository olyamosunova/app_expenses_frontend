import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { authApi } from 'api/auth'
import { TRegisterResponse } from 'api/auth/types'

import { TResponseError } from '../types'

type TParameters = Parameters<typeof authApi.register>[0]

export const useRegister = () =>
  useMutation<AxiosResponse<TRegisterResponse>, TResponseError, TParameters>(
    payload => authApi.register(payload),
  )
