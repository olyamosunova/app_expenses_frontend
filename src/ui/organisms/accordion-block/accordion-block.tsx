import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { ReactNode, useState } from 'react'

type Props = {
  id: string
  title: string
  isExpendedAtFirst?: boolean
  children: ReactNode
}

export const AccordionBlock = ({
  id,
  title,
  children,
  isExpendedAtFirst = false,
}: Props) => {
  const [expanded, setExpanded] = useState(isExpendedAtFirst)

  const handleChange = () => {
    setExpanded(prev => !prev)
  }

  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
