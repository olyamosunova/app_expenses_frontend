import { makeRequest } from '../make-request'

import { TLoginPayload, TLoginResponse } from './types'

export const login = (values: TLoginPayload) =>
  makeRequest<TLoginResponse>({
    endpoint: '/auth/login',
    method: 'POST',
    params: {
      body: values,
    },
  })
