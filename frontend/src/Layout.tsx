/**
 * src/Layout.tsx
 * Basic frontend layout
 */

import { Box, styled, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import { Link } from 'react-router-dom'
import { HeaderMenuItem, headerMenuItems } from './lib/constants'

type Props = {
  children?: React.ReactNode
}

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`

const PrimaryHeader = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(7)};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.palette.grey['400']};
`
)

const MenuHeader = styled('div')(
  ({ theme }) => `
  height: ${theme.spacing(5)};
  padding-left: ${theme.spacing(2)};
  padding-right: ${theme.spacing(2)};
  background: ${theme.palette.primary.dark};
  display: flex;
  align-items: center;
  color: ${theme.palette.common.white};
`
)

const ChildContainer = styled('div')(
  ({ theme }) => `
  margin-top: ${theme.spacing(2)}
`
)

const StyledLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.palette.grey[100]};
  text-decoration: none;
  &:hover {
    color: ${theme.palette.warning.light}
  }
`
)

const Layout: React.FC<Props> = ({ children }) => {
  const theme = useTheme()

  return (
    <Wrapper>
      <PrimaryHeader>
        <Box
          sx={{
            display: 'flex',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            width: '100%',
            alignItems: 'center'
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5">rust-react</Typography>
          </Box>

          <Box sx={{ flex: 1, textAlign: 'right' }}>
            <a href="https://github.com/kendopunk/rust-react" target="_blank" className="hyperlink">
              GitHub
            </a>
          </Box>
        </Box>
      </PrimaryHeader>
      <MenuHeader>
        {headerMenuItems.map(({ id, label, route }: HeaderMenuItem) => {
          return (
            <Box key={id} sx={{ mr: 2 }}>
              <StyledLink to={route}>{label}</StyledLink>
            </Box>
          )
        })}
      </MenuHeader>
      <ChildContainer>{children}</ChildContainer>
    </Wrapper>
  )
}

export default Layout
