/**
 * src/components/polars/PolarsLeft.tsx
 */
import { Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'

export default function PolarsLeft(): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Typography variant="h6" sx={{ color: theme.palette.grey[600] }}>
        Polars
      </Typography>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body2">
          <a href="https://pola.rs" target="_blank" className="hyperlink">
            Polars
          </a>{' '}
          ("Data Frames for the new era") is a DF library for large-scale analysis, written in Rust
          with bindings for Rust, Python, Node and R.{' '}
        </Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body2">
          In the following examples, we are reading the <i>organizations-100.csv</i> file into a
          DataFrame via the actix-web server and then using common select / aggregation mechanisms
          to display the information in variety of ways through Material UI's &lt;Grid&gt;
          component.
        </Typography>
      </Box>
    </>
  )
}
