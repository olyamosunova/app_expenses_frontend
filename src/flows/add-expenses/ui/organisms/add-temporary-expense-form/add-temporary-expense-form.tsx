import { Box, Button, Grid } from '@mui/material'
import { Field, Formik, FormikHelpers } from 'formik'

import { TemporaryFormNames, TTemporaryFormValues } from '../../../types'
import { validateForm } from '../../../utils'
import {
  CategoryField,
  CommentField,
  DateField,
  MoneyField,
} from '../../molecules'

type Props = {
  defaultValues: TTemporaryFormValues
  onSubmitForm: (
    values: TTemporaryFormValues,
    helpers: FormikHelpers<TTemporaryFormValues>,
  ) => Promise<unknown>
}

export const AddTemporaryExpenseForm = ({
  defaultValues,
  onSubmitForm,
}: Props) => {
  return (
    <Formik<TTemporaryFormValues, unknown>
      onSubmit={onSubmitForm}
      initialValues={defaultValues}
      validate={validateForm}
    >
      {({ values, handleSubmit, isSubmitting }) => (
        <Grid
          gap="16px"
          sx={{
            padding: '24px 0',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Field name={TemporaryFormNames.Date} component={DateField} />
          <Field name={TemporaryFormNames.Category} component={CategoryField} />

          <Box sx={{ height: '4px' }} />

          <Field name={TemporaryFormNames.Money} component={MoneyField} />

          <Field name={TemporaryFormNames.Comment} component={CommentField} />

          <Box sx={{ height: '4px' }} />

          <Button
            disabled={isSubmitting}
            variant="contained"
            onClick={() => {
              // @ts-ignore
              handleSubmit(values)
            }}
          >
            {isSubmitting ? 'Сохраняется...' : 'Сохранить'}
          </Button>
        </Grid>
      )}
    </Formik>
  )
}
