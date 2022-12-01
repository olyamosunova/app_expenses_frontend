import { AxiosRequestConfig, AxiosResponse } from 'axios'

import { createAxiosInstance } from './create-axios-instance'
import { getQuery } from './helpers'

const instance = createAxiosInstance()

type TMethod = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'
export type TParams = {
  isAuth?: boolean
  minLatency?: number
  body?: { [key: string]: any } | FormData
  query?: { [key: string]: string | string[] }
  isBinaryResponse?: boolean
}

type TInput = {
  endpoint: string
  method?: TMethod
  params?: TParams
}

export const makeRequest = async <TOutput = any>({
  endpoint,
  method,
  params = {},
}: TInput) => {
  const { minLatency = 500, body, query } = params

  const isFormData = Boolean(body && body instanceof FormData)

  const headers: { [key: string]: string | boolean } = {
    Accept: 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    'Access-Control-Allow-Headers':
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
  }

  if (!isFormData) {
    headers['Content-Type'] = 'application/json'
  }

  const dataStorage = localStorage.getItem('expensesUserData')
  const data: {
    token: string
    userId: string
  } | null = dataStorage ? JSON.parse(dataStorage) : null

  headers['Authorization'] = `Bearer ${data?.token ?? ''}`

  const queryString = getQuery(query)

  const url = `${endpoint}${queryString}`

  const config: AxiosRequestConfig = {
    method,
    headers,
    data: body,
    url,
    responseType: 'json',
  }

  const [result]: [AxiosResponse<TOutput>, unknown] = await Promise.all([
    instance(config),
    new Promise(resolve => setTimeout(resolve, minLatency)),
  ])

  return result
}
