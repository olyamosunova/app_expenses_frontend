import { Box, styled, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { paths } from 'shared/routing'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 32px;
`

const LinkButton = styled(Link)`
  text-decoration: none;
`

export const NotFound = () => {
  const theme = useTheme()

  return (
    <Container>
      <Typography>Страница не найдена</Typography>
      <LinkButton to={paths.home}>
        <Typography variant="button" color={theme.palette.primary.dark}>
          Вернуться на главную
        </Typography>
      </LinkButton>
    </Container>
  )
}
