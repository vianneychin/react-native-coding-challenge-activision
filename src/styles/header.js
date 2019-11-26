import styled from 'styled-components'
import { StyledText } from './text'

export const HeaderTitle = styled(StyledText)`
  color: ${props => props.theme.color.txt.textTitle};
  font-size: 20px;
`
export const HeaderWrapper = styled.View`
  width: 50%;
  display: flex;
  align-items: center;
`
