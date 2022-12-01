import {
  Grid,
  Button,
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material'
import { Formik, Field, FieldProps, getIn, FormikHelpers } from 'formik'
import { PageConnector } from 'shared/template/page'

import { expensesApi } from 'api/expense'

import { Category } from '../../../types'
import { CATEGORY } from '../../expenses/constants'
import { DatePickerCalendar } from '../../expenses/ui/molecules'
import { FormNames, TFormValues, TOption } from '../types'

const MoneyField = ({ field, form }: FieldProps<TFormValues>) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="money"
      label="Введите потраченную сумму"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}

const CommentField = ({ field, form }: FieldProps<TFormValues>) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="comment"
      label="Введите комментарий (необязательно)"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}

const defaultCategory = {
  value: Category.Other,
  label: CATEGORY[Category.Other],
}

const categoryOptions: TOption[] = [
  defaultCategory,
  {
    value: Category.SuperMarket,
    label: CATEGORY[Category.SuperMarket],
  },
  {
    value: Category.DeliveryProducts,
    label: CATEGORY[Category.DeliveryProducts],
  },
  {
    value: Category.Clothes,
    label: CATEGORY[Category.Clothes],
  },
  {
    value: Category.Cosmetics,
    label: CATEGORY[Category.Cosmetics],
  },
  {
    value: Category.Cat,
    label: CATEGORY[Category.Cat],
  },
  {
    value: Category.HouseholdGoods,
    label: CATEGORY[Category.HouseholdGoods],
  },
  {
    value: Category.Travel,
    label: CATEGORY[Category.Travel],
  },
  {
    value: Category.Pharmacy,
    label: CATEGORY[Category.Pharmacy],
  },
  {
    value: Category.HairStyle,
    label: CATEGORY[Category.HairStyle],
  },
  {
    value: Category.Alcohol,
    label: CATEGORY[Category.Alcohol],
  },
  {
    value: Category.Snus,
    label: CATEGORY[Category.Snus],
  },
  {
    value: Category.Education,
    label: CATEGORY[Category.Education],
  },
  {
    value: Category.Water,
    label: CATEGORY[Category.Water],
  },
  {
    value: Category.Beverages,
    label: CATEGORY[Category.Beverages],
  },
  {
    value: Category.Snacks,
    label: CATEGORY[Category.Snacks],
  },
]

const CategoryField = ({ field }: FieldProps<TFormValues>) => {
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="category-select-label">
        Выберите категорию расходов
      </InputLabel>
      <NativeSelect
        {...field}
        inputProps={{
          name: field.name,
          id: 'category-select-label',
        }}
      >
        {categoryOptions.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

const DateField = ({ field, form }: FieldProps<TFormValues>) => {
  const handleChange = (value: Date) => {
    form.setFieldValue(field.name, value)
  }

  return (
    <DatePickerCalendar
      // @ts-ignore
      date={field.value}
      views={['day']}
      label="Записать расходы за"
      onChangeDate={handleChange}
    />
  )
}

const validateForm = (values: TFormValues) => {
  const errors: Record<string, string> = {}

  if (!values[FormNames.Money]) {
    errors[FormNames.Money] = 'Заполните поле'
  }

  return errors
}

const defaultValues: TFormValues = {
  date: new Date(),
  category: defaultCategory.value,
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
