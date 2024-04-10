/**
 * src/components/serde/SerdeLeft.tsx
 */
import { Box, Typography, useTheme } from '@mui/material'

export default function SerdeLeft(): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Typography variant="h6" sx={{ color: theme.palette.grey[600] }}>
        Serde
      </Typography>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body1">
          <a href="https://serde.rs/" target="_blank" className="hyperlink">
            Serde
          </a>{' '}
          is a framework for (ser)ializing and (de)serializing Rust data structures efficiently and
          generically.
        </Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body1">
          In the first tab, we are using the json!() macro to construct a serde_json::Value from a
          JSON literal.
        </Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body1">
          In the second tab, we are creating a vector of CustomerOrder structs, generating it
          dynamically with the fake crate, and serializing with Serde through the Actix server.
        </Typography>
      </Box>
    </>
  )
}
