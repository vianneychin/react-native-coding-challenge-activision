import styled from 'styled-components'

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
