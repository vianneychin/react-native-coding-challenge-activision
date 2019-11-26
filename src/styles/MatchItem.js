import styled from 'styled-components'

export const MatchItemContainer = styled.View`
  height: 150px;
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
`
export const CellBody = styled(Row)`
  background-color: ${props => props.theme.color.bg.cellBody};
`

// split the match item container into 2 rows,
// split the first row into two columns
// split the second row into three columns
