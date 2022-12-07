import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { authApi } from 'api/auth'

type TParameters = Parameters<typeof authApi.register>[0]

export const useRegister = () =>
  useMutation<AxiosResponse, AxiosError, TParameters>(payload =>
    authApi.register(payload),
  )
