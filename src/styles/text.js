import { Text } from 'react-native'
import styled from 'styled-components'

export const StyledText = styled(Text).attrs(props => ({
  adjustsFontSizeToFit: true,
  numberOfLines: 1
}))`
  font-weight: 800;
  font-size: 17.5px;
`
