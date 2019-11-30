import styled from 'styled-components'
import { Platform } from 'react-native'
import { StyledText } from './text'
import { theme } from '../styles/theme'

export const HeaderTitle = styled(StyledText)`
  color: ${theme.color.txt.textTitle};
  font-size: 20px;
  font-family: ${() => (Platform.OS === 'android' ? 'Roboto' : 'Arial')};
  font-weight: bold;
`
export const HeaderWrapper = styled.View`
  width: 50%;
  display: flex;
  align-items: center;
`
export const Container = styled.SafeAreaView`
  background-color: ${theme.color.bg.background};
  flex: 1;
`
export const CenterItem = styled.View`
  flex: 1;
  justify-content: center;
`
export const ErrorText = styled.Text`
  color: red;
  text-align: center;
`
