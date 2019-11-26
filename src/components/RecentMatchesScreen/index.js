import React, { useEffect, useState } from 'react'
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import { HeaderTitle, HeaderWrapper } from '../../styles/header'
import { MatchItem } from './MatchItem'
import styled from 'styled-components'
import { cookieUtil, mapUtil, gameModeUtil, gameResultUtil } from './util'

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.color.bg.background};
  flex: 1;
`

export const RecentMatchesScreen = () => {
  const [data, setData] = useState('')
  const [error, setError] = useState('')

  const fetchGamerData = async () => {
    const data = await fetch(
      `https://profile.callofduty.com/papi-client/crm/cod/v2/title/mw/platform/psn/gamer/smackmeister/matches/days/20`,
      {
        headers: {
          'Content-Type': 'application/json',
          Cookie: cookieUtil
        }
      }
    )
    const response = await data.json()

    if (response.status === 'success') {
      console.log(response, '<---response')
      setData(response.data.matches)
    }
    if (response.status === 'error') {
      setError('You must login to continue.')
    }
  }

  useEffect(() => {
    fetchGamerData()
  }, [])

  const renderList = () => {
    if (data) {
      return (
        <FlatList
          data={data}
          keyExtractor={item => item.matchID}
          renderItem={({ item }) => {
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
          }}
        />
      )
    } else {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size='large' color='#FFFFFF' />
        </View>
      )
    }
  }

  return (
    <>
      <Container>{renderList()}</Container>
    </>
  )
}

RecentMatchesScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: 'rgb(0, 0, 0)',
    height: 75
  },
  headerTitle: (
    <HeaderWrapper>
      <HeaderTitle>RECENT MATCHES</HeaderTitle>
    </HeaderWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
