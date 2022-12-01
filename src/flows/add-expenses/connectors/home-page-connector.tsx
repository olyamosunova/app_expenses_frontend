import { Grid, Button, Box } from '@mui/material'
import { Formik, Field, FormikHelpers } from 'formik'
import { PageConnector } from 'shared/template/page'

import { expensesApi } from 'api/expense'

import { DEFAULT_CATEGORY } from '../constants'
import { FormNames, TFormValues } from '../types'
import {
  CommentField,
  DateField,
  MoneyField,
  CategoryField,
} from '../ui/molecules'
import { validateForm } from '../utils'

const defaultValues: TFormValues = {
  date: new Date(),
  category: DEFAULT_CATEGORY.value,
  money: '',
  comment: '',
}

export const HomePageConnector = () => {
  const onSubmitForm = async (
    values: TFormValues,
    helpers: FormikHelpers<TFormValues>,
  ) => {
    expensesApi.addExpense(values).then(data => {
      if (data?.data?.expense) {
        helpers.resetForm()
      }
    })
  }

  return (
    <PageConnector>
      <Box>
        <Formik<TFormValues, unknown>
          onSubmit={onSubmitForm}
          initialValues={defaultValues}
          validate={validateForm}
        >
          {({ values, handleSubmit }) => (
            <Grid
              gap="16px"
              sx={{
                padding: '24px 0',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Field name={FormNames.Date} component={DateField} />
              <Field name={FormNames.Category} component={CategoryField} />

              <Box sx={{ height: '4px' }} />

              <Field name={FormNames.Money} component={MoneyField} />

              <Field name={FormNames.Comment} component={CommentField} />

              <Box sx={{ height: '4px' }} />

              <Button
                variant="contained"
                onClick={() => {
                  // @ts-ignore
                  handleSubmit(values)
                }}
              >
                Сохранить
              </Button>
            </Grid>
          )}
        </Formik>
      </Box>
    </PageConnector>
  )
}
