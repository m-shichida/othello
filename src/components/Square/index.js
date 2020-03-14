import React from 'react'

import styles from './styles'
import BlackPiece from '../BlackPiece'
import WhitePiece from '../WhitePiece'
import { colors } from '../../helpers/styling'

const { SquareButton } = styles

const Square = ({ square, addValue, isPut }) => {
  const piece = square === 1 ? <BlackPiece /> : square === 2 ? <WhitePiece /> : ''

  return (
    <SquareButton
      onClick={ addValue }
      style={{ backgroundColor: isPut ? colors.puted : colors.boardColor }}
    >
      { piece }
    </SquareButton>
  )
}

export default Square
