/**
 * src/components/home/HomeLeft.tsx
 */
import { Typography, useTheme } from '@mui/material'

export default function HomeLeft(): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Typography variant="h6" sx={{ color: theme.palette.grey[600] }}>
        Hey!
      </Typography>
    </>
  )
}
