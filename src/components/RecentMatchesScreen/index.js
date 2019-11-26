import React, { useEffect, useState, useRef } from 'react'
import { ActivityIndicator } from 'react-native'
import { MatchList } from './MatchList'
import { cookieUtil } from './util'
import {
  HeaderTitle,
  HeaderWrapper,
  Container,
  CenterItem,
  ErrorText
} from '../../styles/RecentMatchesScreen'

export const RecentMatchesScreen = () => {
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const isCancelled = React.useRef(false)

  const api =
    'https://profile.callofduty.com/papi-client/crm/cod/v2/title/mw/platform/psn/gamer/smackmeister/matches/days/20'

  const fetchGamerData = async () => {
    try {
      const data = await fetch(api, {
        headers: {
          'Content-Type': 'application/json',
          Cookie: cookieUtil
        }
      })
      const response = await data.json()
      if (response.status === 'success') {
        setData(response.data.matches)
      }
      if (response.status === 'error') {
        setError('You must login to continue.')
      }
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchGamerData()
    return () => {
      isCancelled.current = true
    }
  }, [])

  const renderContent = () => {
    if (data) {
      return <MatchList data={data} />
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

  return <Container>{renderContent()}</Container>
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
