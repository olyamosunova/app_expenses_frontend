export type TLoginResponse = { token: string; userId: string }

export type TRegisterResponse = {
  data: {
    token: string
    userId: string
  }
}

export type TLoginPayload = {
  username: string
  password: string
}
