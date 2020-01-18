import React from 'react'
import styles from './styles'

const { SquareButton } = styles

const Square = ({ piece, addValue }) => {
  return (
    <SquareButton
      onClick={ addValue }
    >
      { piece }
    </SquareButton>
  )
}

export default Square
