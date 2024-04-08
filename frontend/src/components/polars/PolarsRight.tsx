/**
 * src/components/polars/PolarsRight.tsx
 * Main content for Polars section (right side)
 */
import { useState } from 'react'
import { Box, Tab, Tabs, useTheme } from '@mui/material'

import PolarsAllData from './PolarsAllData'
import PolarsTabPanel from './PolarsTabPanel'

const polarsTabData: Record<string, string | number>[] = [
  {
    id: 0,
    label: 'All Data',
    value: 'all_data'
  },
  {
    id: 1,
    label: 'Selecting Columns',
    value: 'select_columns'
  }
]

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simpleVisualizerTabPanel-${index}`
  }
}

export default function PolarsRight(): JSX.Element {
  const theme = useTheme()
  const [activeTab, setActiveTab] = useState<number>(0)

  function handleTabChange(event: React.SyntheticEvent, newValue: number) {
    setActiveTab(+newValue)
  }

  function getTabColor(tabId: string | number, activeTab: number): string {
    let ret = ''
    if (tabId === activeTab) {
      ret = theme.palette.info.main
    } else {
      ret = theme.palette.text.primary
    }

    return `${ret} !important`
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="polars tabs">
          {polarsTabData.map((m: Record<string, string | number>, index: number) => {
            return (
              <Tab
                key={m['value']}
                label={m['label']}
                sx={{ color: getTabColor(m['id'], activeTab) }}
                {...a11yProps(index)}
              />
            )
          })}
        </Tabs>
      </Box>
      <PolarsTabPanel value={activeTab} index={0}>
        <PolarsAllData />
      </PolarsTabPanel>
      <PolarsTabPanel value={activeTab} index={1}>
        <div>bar</div>
      </PolarsTabPanel>
    </Box>
  )
}
