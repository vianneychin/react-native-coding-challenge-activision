import { Text, Platform } from 'react-native'
import styled from 'styled-components'

export const StyledText = styled(Text).attrs(() => ({
  adjustsFontSizeToFit: true,
  numberOfLines: 1
}))`
  font-family: ${Platform.OS === 'android' ? 'Roboto' : 'Arial'};
  font-weight: ${Platform.OS === 'android' ? 'bold' : '800'};
`
