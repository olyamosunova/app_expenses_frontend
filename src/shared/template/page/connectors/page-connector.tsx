import { ReactNode } from 'react'

import { PageTemplate } from '../ui/page'

import { NavbarConnector } from './navbar-connector'

type Props = {
  children: ReactNode
}

export const PageConnector = ({ children }: Props) => {
  return <PageTemplate navbar={<NavbarConnector />}>{children}</PageTemplate>
}
