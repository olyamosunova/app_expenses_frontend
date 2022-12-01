import { TFormValues } from '../../flows/auth/types'
import { makeRequest } from '../make-request'

export const register = (values: TFormValues) =>
  makeRequest({
    endpoint: '/auth/register',
    method: 'POST',
    params: {
      body: values,
    },
  })
