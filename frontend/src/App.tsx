/**
 * frontend/src/App.tsx
 * Application entry point
 */

import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Box, ThemeProvider, useTheme } from '@mui/system'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
  const theme = useTheme()

  // async function foo() {
  //   const res = await fetch('http://localhost:3001/hey')
  //   const x = await res.json()
  //   console.log(x)
  // }

  // useEffect(() => {
  //   foo()
  // }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: '20px' }}>
        <div>foo asdfsaf</div>
      </Box>
    </ThemeProvider>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // )
}

export default App
