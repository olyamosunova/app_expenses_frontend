import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { authApi } from 'api/auth'
import { TRegisterResponse } from 'api/auth/types'

type TParameters = Parameters<typeof authApi.register>[0]

export const useRegister = () =>
  useMutation<AxiosResponse<TRegisterResponse>, AxiosError, TParameters>(
    payload => authApi.register(payload),
  )
