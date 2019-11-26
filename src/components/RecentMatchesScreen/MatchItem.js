import React, { useState } from 'react'
import {
  MatchItemContainer,
  CellHeader,
  CellBody,
  Column,
  MatchResult,
  WinOrLose,
  GameMap,
  GameMode,
  PlayerData,
  PlayerDataText
} from '../../styles/MatchItem'

export const MatchItem = ({
  matchResult,
  gameMap,
  gameMode,
  playerKills,
  playerDeaths,
  playerAccuracy,
  winOrLoseBG
}) => {
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
          <GameMap>{gameMap}</GameMap>
          <GameMode>{gameMode}</GameMode>
        </Column>
        <Column>
          <MatchResult style={{ backgroundColor: winOrLoseBG }}>
            <WinOrLose>{matchResult}</WinOrLose>
          </MatchResult>
        </Column>
      </CellHeader>
      <CellBody>
        <PlayerData>
          <PlayerDataText label>KILLS</PlayerDataText>
          <PlayerDataText>{playerKills}</PlayerDataText>
        </PlayerData>
        <PlayerData>
          <PlayerDataText label>DEATHS</PlayerDataText>
          <PlayerDataText>{playerDeaths}</PlayerDataText>
        </PlayerData>
        <PlayerData>
          <PlayerDataText label>ACCURACY</PlayerDataText>
          <PlayerDataText>{playerAccuracy}</PlayerDataText>
        </PlayerData>
      </CellBody>
    </MatchItemContainer>
  )
}
