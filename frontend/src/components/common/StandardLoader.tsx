/**
 * src/components/common/StandardLoader.tsx
 */
import { Box, CircularProgress, styled } from '@mui/material'

export type StandardLoaderProps = {
  color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined
  height?: string
  size?: number | string
  thickness?: number
}

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`

function StandardLoader({
  color = 'primary',
  height = '500px',
  size = 40,
  thickness = 3.6
}: StandardLoaderProps): JSX.Element {
  return (
    <Wrapper sx={{ height }}>
      <CircularProgress color={color} size={size} thickness={thickness} />
    </Wrapper>
  )
}

export default StandardLoader
