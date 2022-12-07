import { Box, Button, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useLogin, useRegister } from 'features/auth'
import { Formik, Field, FieldProps, getIn, FormikErrors } from 'formik'
import { useContext } from 'react'

import { AuthContext } from '../../../context'
import { FormNames, TFormValues } from '../types'

const defaultValues: TFormValues = {
  [FormNames.Username]: '',
  [FormNames.Password]: '',
}

const validateForm = (values: TFormValues) => {
  const errors: Record<string, string> = {}

  if (!values[FormNames.Username]) {
    errors[FormNames.Username] = 'Заполните поле'
  }

  if (!values[FormNames.Password]) {
    errors[FormNames.Password] = 'Заполните поле'
  }

  return errors
}

const UsernameField = ({ field, form }: FieldProps<TFormValues>) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="username"
      label="Введите имя пользователя"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}

const PasswordField = ({ field, form }: FieldProps<TFormValues>) => {
  return (
    <TextField
      {...field}
      error={Boolean(getIn(form.errors, field.name))}
      id="password"
      label="Введите пароль"
      type="password"
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}

export const AuthConnector = () => {
  const auth = useContext(AuthContext)
  const login = useLogin()
  const register = useRegister()

  const registerHandler = async (
    values: TFormValues,
    validateForm: (values: TFormValues) => Promise<FormikErrors<TFormValues>>,
  ) => {
    const errors = await validateForm(values)

    if (!Object.values(errors).length) {
      register.mutateAsync(values)
    }
  }

  const loginHandler = async (
    values: TFormValues,
    validateForm: (values: TFormValues) => Promise<FormikErrors<TFormValues>>,
  ) => {
    const errors = await validateForm(values)

    if (!Object.values(errors).length) {
      login.mutateAsync(values, {
        onSuccess: data => {
          auth.login(data.data.token, data.data.userId)
        },
      })
    }
  }

  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="subtitle1">Зайдите или зарегистрируйтесь</Typography>

      <Formik
        onSubmit={() => {}}
        initialValues={defaultValues}
        validate={validateForm}
      >
        {({ values, validateForm }) => (
          <Grid
            gap="16px"
            sx={{ padding: '24px 0', display: 'flex', flexDirection: 'column' }}
          >
            <Field name={FormNames.Username} component={UsernameField} />

            <Box sx={{ height: '4px' }} />

            <Field name={FormNames.Password} component={PasswordField} />

            <Box sx={{ height: '4px' }} />

            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Button
                variant="outlined"
                onClick={() => loginHandler(values, validateForm)}
              >
                Войти
              </Button>
              <Button
                variant="contained"
                onClick={() => registerHandler(values, validateForm)}
              >
                Регистрация
              </Button>
            </Box>
          </Grid>
        )}
      </Formik>
    </Box>
  )
}
