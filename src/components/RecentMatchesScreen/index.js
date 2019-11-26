import React from 'react'
import { View, Text } from 'react-native'
import { HeaderTitle } from '../../styles/header'
import styled from 'styled-components'

const StyledText = styled.Text`
  color: ${props => props.theme.color.txt.textValue};
`

export const RecentMatchesScreen = () => {
  return (
    <View>
      <StyledText>Testing</StyledText>
    </View>
  )
}

RecentMatchesScreen.navigationOptions = {
  headerStyle: {
    backgroundColor: `rgb(0, 0, 0)`
  },
  headerTitle: <HeaderTitle>RECENT MATCHES</HeaderTitle>
}
