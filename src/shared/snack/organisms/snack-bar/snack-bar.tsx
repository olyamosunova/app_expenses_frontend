import { Alert, Snackbar } from '@mui/material'
import { createPortal } from 'react-dom'

import { Col } from 'ui/core'

import { TSnackItem } from '../../types'

type Props = {
  snacks: TSnackItem[]
  forceHide: ({ id }: { id: string }) => void
}

export const SnackBar = ({ snacks, forceHide }: Props) => {
  const snackRoot = document.getElementById('snack')

  if (!snackRoot) {
    return null
  }

  return createPortal(
    <Col>
      {snacks.map((snack, key) => (
        <Snackbar
          key={key}
          open={snack.visible}
          onClick={() => forceHide({ id: snack.id })}
        >
          <Alert severity={snack.type} sx={{ width: '100%' }}>
            {snack.message}
          </Alert>
        </Snackbar>
      ))}
    </Col>,
    snackRoot,
  )
}
