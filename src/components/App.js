import React from 'react'
import Router from '../navigation'
import { StatusBar } from 'react-native'

export const App = () => (
  <>
    <StatusBar backgroundColor='black' barStyle='light-content' />
    <Router />
  </>
)
