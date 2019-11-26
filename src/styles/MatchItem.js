import styled from 'styled-components'
import { StyledText } from './text'

export const MatchItemContainer = styled.View`
  height: 180px;
  background-color: red;
  display: flex;
  flex-direction: column;
  margin: 15px;
`
export const Row = styled.View`
  flex: 1;
`
export const CellHeader = styled(Row)`
  background-color: ${props => props.theme.color.bg.cellHeader};
  display: flex;
  flex-direction: row;
  flex: 0.75;
`
export const CellBody = styled(Row)`
  background-color: ${props => props.theme.color.bg.cellBody};
  display: flex;
  flex-direction: row;
`
export const Column = styled.View`
  flex: ${props => props.flex};
`
export const MatchResult = styled.View`
  height: 50%;
  width: 50%;
  background-color: red;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WinOrLose = styled(StyledText)`
  color: ${props => props.theme.color.txt.textTitle};
  font-size: 20px;
`
export const GameMap = styled(StyledText)`
  color: ${props => props.theme.color.txt.textTitle};
  font-size: 20px;
`
export const GameMode = styled(StyledText)`
  color: ${props => props.theme.color.txt.textValue};
  font-size: 20px;
`
export const PlayerData = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const PlayerDataText = styled(StyledText)`
  color: ${props =>
    props.label
      ? props.theme.color.txt.textTitle
      : props.theme.color.txt.textValue};

  font-weight: 600;
  font-size: ${props => (props.label ? '15px' : '25px')};
  position: relative;
  top: ${props => (props.label ? '10px' : '0px')};
`
