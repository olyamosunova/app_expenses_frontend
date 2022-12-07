import { makeRequest } from '../make-request'

import { TLoginPayload } from './types'

export const register = (values: TLoginPayload) =>
  makeRequest({
    endpoint: '/auth/register',
    method: 'POST',
    params: {
      body: values,
    },
  })
