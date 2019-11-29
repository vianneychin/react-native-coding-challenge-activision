import React from 'react'
import { FlatList } from 'react-native'
import { MatchItem } from './MatchItem'
import { mapUtil, gameModeUtil, gameResultUtil } from './util'

export const MatchList = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <MatchItem
        matchResult={gameResultUtil(item.result)}
        gameMap={mapUtil(item.map)}
        gameMode={gameModeUtil(item.mode)}
        playerKills={item.playerStats.kills}
        playerDeaths={item.playerStats.deaths}
        playerAccuracy={item.playerStats.accuracy.toFixed(2)}
        winOrLoseBG={
          gameResultUtil(item.result) === 'W'
            ? 'rgb(158, 144, 62)'
            : 'rgb(51, 51, 51)'
        }
      />
    )
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.matchID}
      renderItem={renderItem}
      initialNumToRender={6}
    />
  )
}
