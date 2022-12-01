import { Box } from '@mui/material'

import { Loader } from 'ui/atoms'

export const ExpensesLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Loader />
    </Box>
  )
}
