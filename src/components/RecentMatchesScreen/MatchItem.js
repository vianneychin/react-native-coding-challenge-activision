import React from 'react'
import { View, Text } from 'react-native'
import {
  MatchItemContainer,
  CellHeader,
  CellBody,
  Column,
  MatchResult,
  WinOrLose,
  GameMap,
  GameMode
} from '../../styles/MatchItem'

export const MatchItem = () => {
  return (
    <MatchItemContainer>
      <CellHeader>
        <Column
          flex={() => '2'}
          style={{
            padding: '2.5%',
            display: 'flex',
            alignItems: 'flex-start',
            padding: '4%'
          }}
        >
          <GameMap>ARDENNES FOREST</GameMap>
          <GameMode>DOMINATION</GameMode>
        </Column>
        <Column>
          <MatchResult>
            <WinOrLose>W</WinOrLose>
          </MatchResult>
        </Column>
      </CellHeader>
      <CellBody></CellBody>
    </MatchItemContainer>
  )
}
