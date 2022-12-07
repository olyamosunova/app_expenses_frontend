import { AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { authApi } from 'api/auth'
import { TLoginResponse } from 'api/auth/types'

import { TResponseError } from '../types'

type TParameters = Parameters<typeof authApi.login>[0]

export const useLogin = () =>
  useMutation<AxiosResponse<TLoginResponse>, TResponseError, TParameters>(
    payload => authApi.login(payload),
  )
