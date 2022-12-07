import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { paths } from 'shared/routing'
import { PageConnector } from 'shared/template/page'

export const HomePageConnector = () => {
  return (
    <PageConnector>
      <Box>
        <Link to={paths.showExpenses.home} style={{ textDecoration: 'none' }}>
          <Button>Посмотреть расходы</Button>
        </Link>

        <Link to={paths.addExpenses.home} style={{ textDecoration: 'none' }}>
          <Button>Добавить новые расходы</Button>
        </Link>
      </Box>
    </PageConnector>
  )
}
