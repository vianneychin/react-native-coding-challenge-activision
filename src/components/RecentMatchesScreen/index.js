import React, { useEffect, useState } from 'react'
import { FlatList, ActivityIndicator, Text } from 'react-native'
import { HeaderTitle, HeaderWrapper } from '../../styles/header'
import { Container, CenterItem, ErrorText } from '../../styles/MainScreen'
import { MatchItem } from './MatchItem'
import { cookieUtil, mapUtil, gameModeUtil, gameResultUtil } from './util'

export const RecentMatchesScreen = () => {
  const [data, setData] = useState('')
  const [error, setError] = useState('')

  const fetchGamerData = async () => {
    try {
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
      console.log(response)
      if (response.status === 'success') {
        setData(response.data.matches)
      }
      if (response.status === 'error') {
        setError('You must login to continue.')
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGamerData()
  }, [])

  const renderContent = () => {
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
    }
    if (error) {
      return (
        <CenterItem>
          <ErrorText>{error}</ErrorText>
        </CenterItem>
      )
    } else {
      return (
        <CenterItem>
          <ActivityIndicator size='large' color='#FFFFFF' />
        </CenterItem>
      )
    }
  }

  return (
    <>
      <Container>{renderContent()}</Container>
    </>
  )
}

RecentMatchesScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: 'rgb(0, 0, 0)',
    height: 75,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  },
  headerTitle: (
    <HeaderWrapper>
      <HeaderTitle>RECENT MATCHES</HeaderTitle>
    </HeaderWrapper>
  )
}
