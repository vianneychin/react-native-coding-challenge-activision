import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import { HeaderTitle, HeaderWrapper } from '../../styles/header'
import { MatchItem } from './MatchItem'
import styled from 'styled-components'
import { cookieUtil } from './util'

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
            console.log(typeof item.playerStats.accuracy)
            return (
              <MatchItem
                matchResult={item.result}
                gameMap={item.map}
                gameMode={item.mode}
                playerKills={item.playerStats.kills}
                playerDeaths={item.playerStats.deaths}
                playerAccuracy={item.playerStats.accuracy}
              />
            )
          }}
        />
      )
    } else {
      return <Text>'Loading..'</Text>
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
