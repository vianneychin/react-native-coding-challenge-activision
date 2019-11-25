import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { RecentMatchesScreen } from './RecentMatchesScreen'

export const App = () => (
  <ThemeProvider theme={theme}>
    <RecentMatchesScreen />
  </ThemeProvider>
)
