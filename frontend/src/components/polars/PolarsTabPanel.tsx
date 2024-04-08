/**
 * src/components/polars/PolarsTabPanel.tsx
 */

import { Box } from '@mui/material'

interface PolarsTabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function PolarsTabPanel(props: PolarsTabPanelProps) {
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

export default PolarsTabPanel
