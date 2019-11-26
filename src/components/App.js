import React from 'react'
import Router from '../navigation'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { StatusBar } from 'react-native'

export const App = () => (
  <>
    <StatusBar backgroundColor='black' barStyle='light-content' />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
)
