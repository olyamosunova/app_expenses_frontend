import { TFormValues } from '../../flows/auth/types'
import { makeRequest } from '../make-request'

export const login = (values: TFormValues) =>
  makeRequest<{ token: string; userId: string }>({
    endpoint: '/auth/login',
    method: 'POST',
    params: {
      body: values,
    },
  })
