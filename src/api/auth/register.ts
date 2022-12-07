import { makeRequest } from '../make-request'

import { TLoginPayload, TRegisterResponse } from './types'

export const register = (values: TLoginPayload) =>
  makeRequest<TRegisterResponse>({
    endpoint: '/auth/register',
    method: 'POST',
    params: {
      body: values,
    },
  })
