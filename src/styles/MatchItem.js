import styled from 'styled-components'
import { StyledText } from './text'
import { theme } from '../styles/theme'

export const MatchItemContainer = styled.View`
  height: 180px;
  display: flex;
  flex-direction: column;
  margin: 15px;
`
export const Row = styled.View`
  flex: 1;
`
export const CellHeader = styled(Row)`
  background-color: ${theme.color.bg.cellHeader};
  display: flex;
  flex-direction: row;
  flex: 0.75;
`
export const CellBody = styled(Row)`
  background-color: ${theme.color.bg.cellBody};
  display: flex;
  flex-direction: row;
`
export const Column = styled.View`
  flex: 1;
  ${props => {
    if (props.leftColumn) {
      return `
        flex: 2;
        display: flex;
        alignItems: flex-start;
        padding: 4%;
      `
    }
  }};
`
export const MatchResult = styled.View`
  height: 50%;
  width: 50%;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WinOrLose = styled(StyledText)`
  color: ${theme.color.txt.textTitle};
  font-size: 20px;
`
export const GameMap = styled(StyledText)`
  color: ${theme.color.txt.textTitle};
  font-size: 20px;
`
export const GameMode = styled(StyledText)`
  color: ${theme.color.txt.textValue};
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
    props.label ? theme.color.txt.textTitle : theme.color.txt.textValue};

  font-size: ${props => (props.label ? '15px' : '25px')};
  position: relative;
  font-weight: 600;
  top: ${props => (props.label ? '10px' : '0px')};
`
