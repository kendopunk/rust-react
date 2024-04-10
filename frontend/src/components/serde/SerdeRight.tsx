import { useState } from 'react'
import { Box, Tab, Tabs, useTheme } from '@mui/material'
import SerdeTabPanel from './SerdeTabPanel'
import SerdeJsonMacro from './SerdeJsonMacro'
import SerdeVecStruct from './SerdeVecStruct'

const serdeTabData: Record<string, string | number>[] = [
  {
    id: 0,
    label: 'json! Macro',
    value: 'json_macro'
  },
  {
    id: 1,
    label: 'Vec<Struct>',
    value: 'vec_struct'
  }
]

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `serdeTabPanel-${index}`
  }
}

export default function SerdeRight(): JSX.Element {
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
          {serdeTabData.map((m: Record<string, string | number>, index: number) => {
            return (
              <Tab
                key={m['value']}
                label={m['label']}
                sx={{ textTransform: 'none', color: getTabColor(m['id'], activeTab) }}
                {...a11yProps(index)}
              />
            )
          })}
        </Tabs>
      </Box>
      <SerdeTabPanel value={activeTab} index={0}>
        <SerdeJsonMacro />
      </SerdeTabPanel>
      <SerdeTabPanel value={activeTab} index={1}>
        <SerdeVecStruct />
      </SerdeTabPanel>
    </Box>
  )
}
