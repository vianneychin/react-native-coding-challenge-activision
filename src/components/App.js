import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Router from '../navigation'
import { StatusBar } from 'react-native'

export const App = () => (
  <>
    <StatusBar barStyle='light-content' />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
)
