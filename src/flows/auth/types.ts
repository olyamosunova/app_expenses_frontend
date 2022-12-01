export enum FormNames {
  Username = 'username',
  Password = 'password',
}

export type TFormValues = {
  [FormNames.Username]: string
  [FormNames.Password]: string
}
