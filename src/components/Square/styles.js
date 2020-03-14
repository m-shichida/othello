import styled from 'styled-components'
import { colors } from '../../helpers/styling'

const SquareButton = styled.span`
  background: ${ colors.boardColor };
  border: 1px solid ${ colors.black };
  height: 48px;
  width: 48px;

  &:hover {
    background: #ddd;
    outline: none;
  }
`

export default { SquareButton };
