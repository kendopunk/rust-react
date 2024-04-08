/**
 * src/components/serde/SerdeLeft.tsx
 */
import { Typography, useTheme } from '@mui/material'

export default function SerdeLeft(): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Typography variant="h6" sx={{ color: theme.palette.grey[600] }}>
        Serde
      </Typography>
    </>
  )
}
