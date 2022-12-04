import { Box, styled } from '@mui/material'

export const Col = styled(Box)<{ $gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap ?? 0}px;
`
