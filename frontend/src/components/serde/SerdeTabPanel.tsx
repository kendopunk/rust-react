/**
 * src/components/serde/SerdeTabPanel.tsx
 */

import { Box } from '@mui/material'

interface SerdeTabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function SerdeTabPanel(props: SerdeTabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ marginTop: '20px' }}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

export default SerdeTabPanel
