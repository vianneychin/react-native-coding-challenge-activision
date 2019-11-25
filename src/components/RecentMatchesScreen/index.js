import React from 'react'
import { View, Text } from 'react-native'
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
