import React from 'react'
import { View, Text } from 'react-native'
import { HeaderTitle } from '../../styles/header'
import { MatchItem } from './MatchItem'
import styled from 'styled-components'

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.color.bg.background};
  flex: 1;
`

export const RecentMatchesScreen = () => {
  return (
    <Container>
      <MatchItem />
    </Container>
  )
}

RecentMatchesScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: `rgb(0, 0, 0)`
  },
  headerTitle: <HeaderTitle>RECENT MATCHES</HeaderTitle>
}
