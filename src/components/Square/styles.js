import styled from 'styled-components'
import { colors } from '../../helpers/styling'

const SquareButton = styled.span`
  border: 1px solid ${ colors.black };
  height: 40px;
  width: 40px;

  &:hover {
    background: #ddd;
    outline: none;
  }
`

export default { SquareButton };
