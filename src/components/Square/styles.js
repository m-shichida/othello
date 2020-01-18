import styled from 'styled-components'
import { colors } from '../../helpers'

const SquareButton = styled.span`
  background: ${ colors.boardColor };
  border: 1px solid ${ colors.black };
  height: 48px;
  width: 48px;
  font-size: 4.8rem;
  line-height: 40px;
  text-align: center;

  &:hover {
    background: #ddd;
    outline: none;
  }
`

export default { SquareButton };
