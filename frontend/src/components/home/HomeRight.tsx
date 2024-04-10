/**
 * src/components/home/HomeRight.tsx
 */
import { Box, Typography } from '@mui/material'

export default function HomeRight(): JSX.Element {
  return (
    <Box sx={{ width: '65%' }}>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body2">
          If you've gotten this far, it seems you have an interest in both the Actix web framework
          for Rust and React. Well done.
        </Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body2">
          The Polars section demonstrates using the Polars library to create and manipulate data
          frames and pass them through the Actix server (as json) for consumption in a React
          frontend application.
        </Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="body2">
          The Serde section focuses on using the Serde library to serialize / deserialize Rust data
          into a format that is consumable by a frontend application.
        </Typography>
      </Box>
    </Box>
  )
}
