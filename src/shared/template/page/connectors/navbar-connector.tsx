import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { paths } from 'shared/routing'

import { AuthContext } from '../../../../context'

export const NavbarConnector = () => {
  const { logout } = useContext(AuthContext)

  const theme = useTheme()

  return (
    <Box component="nav" sx={{ textAlign: 'center' }}>
      <List sx={{ display: 'flex', background: theme.palette.primary.dark }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center', justifyContent: 'center' }}
          >
            <Link
              to={paths.showExpenses.home}
              style={{ textDecoration: 'none' }}
            >
              <ListItemText
                primary="Expenses"
                sx={{ color: theme.palette.common.white }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center', justifyContent: 'center' }}
          >
            <Link
              to={paths.addExpenses.home}
              style={{ textDecoration: 'none' }}
            >
              <ListItemText
                primary="Add"
                sx={{
                  color: theme.palette.common.white,
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center', justifyContent: 'center' }}
          >
            <ListItemText
              onClick={logout}
              primary="Log out"
              sx={{ color: theme.palette.common.white }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
