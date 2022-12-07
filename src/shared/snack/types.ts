export type TSnackInit = {
  message: string
  type?: 'success' | 'info' | 'error'
  timeout?: number
}

export type TSnackItem = {
  id: string
  message?: string
  visible: boolean
  type?: 'success' | 'info' | 'error'
}
