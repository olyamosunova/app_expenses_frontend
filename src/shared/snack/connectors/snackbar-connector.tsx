import { useStore } from 'effector-react'

import { $snacks, forceHide } from '../model'
import { SnackBar } from '../organisms'

export const SnackBarConnector = () => {
  const snacks = useStore($snacks)

  return <SnackBar snacks={snacks} forceHide={forceHide} />
}
