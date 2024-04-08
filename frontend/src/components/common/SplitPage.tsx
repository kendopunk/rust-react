import { Box, useTheme } from '@mui/material'

/**
 * src/components/common/SplitPage.tsx
 */
export type SplitPageProps = {
  leftCmp: React.ReactNode
  rightCmp: React.ReactNode
}

export default function SplitPage({ leftCmp, rightCmp }: SplitPageProps): JSX.Element {
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box
        sx={{
          flex: 1,
          minWidth: 275,
          p: 2,
          borderRight: `solid 1px ${theme.palette.grey[400]}`,
          minHeight: '80vh'
        }}
      >
        {leftCmp}
      </Box>
      <Box sx={{ flex: 5, p: 2 }}>{rightCmp}</Box>
    </Box>
  )
}
