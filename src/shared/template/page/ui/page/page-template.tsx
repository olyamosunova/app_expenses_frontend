import { Box, Container } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  navbar: JSX.Element
  children: ReactNode
}

export const PageTemplate = ({ navbar, children }: Props) => {
  return (
    <Box>
      {navbar}
      <Container
        maxWidth="sm"
        sx={{
          padding: '16px',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}
