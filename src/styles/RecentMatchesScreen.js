import styled from 'styled-components'
import { Platform } from 'react-native'
import { StyledText } from './text'

export const HeaderTitle = styled(StyledText)`
  color: ${props => props.theme.color.txt.textTitle};
  font-size: 20px;
  font-family: ${props => (Platform.OS === 'android' ? 'Roboto' : 'Arial')};
  font-weight: bold;
`
export const HeaderWrapper = styled.View`
  width: 50%;
  display: flex;
  align-items: center;
`
export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.color.bg.background};
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
