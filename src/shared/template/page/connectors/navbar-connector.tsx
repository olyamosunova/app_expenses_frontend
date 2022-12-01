import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material'
import { Link } from 'react-router-dom'

import { useAuth } from '../../../auth'
import { paths } from '../../../routing'

export const NavbarConnector = () => {
  const { logout } = useAuth()
  const theme = useTheme()

  return (
    <Box component="nav" sx={{ textAlign: 'center' }}>
      <List sx={{ display: 'flex', background: theme.palette.primary.dark }}>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link
              to={paths.showExpenses.home}
              style={{ textDecoration: 'none' }}
            >
              <ListItemText
                primary="Расходы"
                sx={{ color: theme.palette.common.white }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link
              to={paths.addExpenses.home}
              style={{ textDecoration: 'none' }}
            >
              <ListItemText
                primary="Добавить"
                sx={{
                  color: theme.palette.common.white,
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText
              onClick={logout}
              primary="Выйти"
              sx={{ color: theme.palette.common.white }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
