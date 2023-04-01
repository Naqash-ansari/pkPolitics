import React from 'react'
import Nav from '../layout/navbar/Nav'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#c8e6c9'
    },
    
  },
});


const NavBar = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>

    </>
  )
}

export default NavBar
