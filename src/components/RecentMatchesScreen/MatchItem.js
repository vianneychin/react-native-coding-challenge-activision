import React from 'react'
import { View, Text } from 'react-native'

import {
  MatchItemContainer,
  Row,
  CellHeader,
  CellBody
} from '../../styles/MatchItem'

export const MatchItem = () => {
  return (
    <MatchItemContainer>
      <CellHeader></CellHeader>
      <CellBody></CellBody>
    </MatchItemContainer>
  )
}
