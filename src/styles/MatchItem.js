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

// split the match item container into 2 rows,
// split the first row into two columns
// split the second row into three columns

/* 
export const theme = {
  color: {
    bg: {
      header: 'rgb(0, 0, 0)',
      background: 'rgb(40, 40, 40)',
      cellHeader: 'rgb(25, 25, 25)',
      cellBody: 'rgb(17, 17, 17)',
      win: 'rgb(158, 144, 62)',
      loss: 'rgb(51, 51, 51)'
    },
    txt: {
      textTitle: 'rgb(255, 255, 255)',
      textValue: 'rgb(158, 144, 62)'
    }
  }
}
 */
