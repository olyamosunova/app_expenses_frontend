import { Button, Grid, styled, TextField } from '@mui/material'
import {
  FieldArray,
  FieldProps,
  Formik,
  FormikHelpers,
  getIn,
  Field,
} from 'formik'
import { PERMANENT_CATEGORY } from 'shared/constants'

import { Col } from 'ui/core'
import { AccordionBlock } from 'ui/organisms'

import { PermanentCategory } from '../../../../../types'
import { TPermanentFormValues } from '../../../types'

type Props = {
  defaultValues: {
    values: TPermanentFormValues[]
  }
  onSubmitForm: (
    values: {
      values: TPermanentFormValues[]
    },
    helpers: FormikHelpers<{
      values: TPermanentFormValues[]
    }>,
  ) => Promise<unknown>
}

const Container = styled(Col)`
  gap: 24px;
`

const MoneyField = ({
  field,
  form,
  category,
}: FieldProps<TPermanentFormValues> & {
  category: string
}) => {
  return (
    <TextField
      {...field}
      disabled={form.isSubmitting}
      error={Boolean(getIn(form.errors, field.name))}
      id="money"
      label={PERMANENT_CATEGORY[category as PermanentCategory]}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}

export const AddPermanentExpenseForm = ({
  defaultValues,
  onSubmitForm,
}: Props) => {
  return (
    <AccordionBlock id="permanent-expenses-add" title="Постоянные расходы">
      <Formik<{ values: TPermanentFormValues[] }, unknown>
        onSubmit={onSubmitForm}
        initialValues={defaultValues}
        enableReinitialize
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
            <FieldArray
              name="friends"
              render={() => (
                <Container>
                  {values.values && values.values.length > 0
                    ? values.values.map((value, index) => (
                        <Field
                          key={index}
                          name={`values.${index}.money`}
                          component={MoneyField}
                          category={values.values[index].category}
                        />
                      ))
                    : null}
                </Container>
              )}
            />

            <Button
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
    </AccordionBlock>
  )
}
