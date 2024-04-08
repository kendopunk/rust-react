/**
 * src/components/polars/PolarsLeft.tsx
 */
import { Typography, useTheme } from '@mui/material'

export default function PolarsLeft(): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Typography variant="h6" sx={{ color: theme.palette.grey[600] }}>
        Polars
      </Typography>
    </>
  )
}
