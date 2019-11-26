import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { RecentMatchesScreen } from './RecentMatchesScreen'
import NavigationContainer from '../navigation'

export const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer />
  </ThemeProvider>
)
