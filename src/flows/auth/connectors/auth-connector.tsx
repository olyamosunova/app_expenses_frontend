import { Box, Button, Grid, Typography } from '@mui/material'
import { useLogin, useRegister } from 'features/auth'
import { TResponseError } from 'features/types'
import { Formik, Field, FormikErrors } from 'formik'
import { useContext } from 'react'
import { snackTrigger } from 'shared/snack'

import { AuthContext } from '../../../context'
import { FormNames, TFormValues } from '../types'
import { PasswordField, UsernameField } from '../ui/molecules'
import { validateForm } from '../utils'

const defaultValues: TFormValues = {
  [FormNames.Username]: '',
  [FormNames.Password]: '',
}

const processAuthError = (err: TResponseError) => {
  const message = err.response?.data?.message

  if (message) {
    snackTrigger({ message, type: 'error' })
  }
}

export const AuthConnector = () => {
  const auth = useContext(AuthContext)
  const login = useLogin()
  const register = useRegister()

  const isDisabled = login.isLoading || register.isLoading

  const registerHandler = async (
    values: TFormValues,
    validateForm: (values: TFormValues) => Promise<FormikErrors<TFormValues>>,
  ) => {
    const errors = await validateForm(values)

    if (!Object.values(errors).length) {
      register.mutateAsync(values, {
        onSuccess: data => {
          auth.login(data.data.data.token, data.data.data.userId)
        },
        onError: processAuthError,
      })
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
        onError: processAuthError,
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
            sx={{
              padding: '24px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <Field
              name={FormNames.Username}
              component={UsernameField}
              isDisabled={isDisabled}
            />
            <Field
              name={FormNames.Password}
              component={PasswordField}
              isDisabled={isDisabled}
            />
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Button
                variant="outlined"
                disabled={isDisabled}
                onClick={() => loginHandler(values, validateForm)}
              >
                {login.isLoading ? 'Вход ...' : 'Войти'}
              </Button>
              <Button
                variant="contained"
                disabled={isDisabled}
                onClick={() => registerHandler(values, validateForm)}
              >
                {register.isLoading ? 'Регистрация ...' : 'Регистрация'}
              </Button>
            </Box>
          </Grid>
        )}
      </Formik>
    </Box>
  )
}
