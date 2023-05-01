export enum TemporaryFormNames {
  Category = 'category',
  Money = 'money',
  Comment = 'comment',
}

export enum PermanentFormNames {
  Category = 'category',
  Money = 'money',
}

export type TOption = {
  value: string
  label: string
}

export type TTemporaryFormValues = {
  [TemporaryFormNames.Category]: string
  [TemporaryFormNames.Money]: string
  [TemporaryFormNames.Comment]: string
}

export type TPermanentFormValues = {
  [PermanentFormNames.Category]: string
  [PermanentFormNames.Money]: string
}
