export enum FormNames {
  Date = 'date',
  Category = 'category',
  Money = 'money',
  Comment = 'comment',
}

export type TOption = {
  value: string
  label: string
}

export type TFormValues = {
  [FormNames.Date]: Date
  [FormNames.Category]: string
  [FormNames.Money]: string
  [FormNames.Comment]: string
}
