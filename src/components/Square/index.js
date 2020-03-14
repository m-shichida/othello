import React from 'react'
import styles from './styles'

const { SquareButton } = styles

const BlackPiece = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="black" fill="black" />
    </svg>
  )
}

const WhitePiece = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" stroke="black" fill="white" />
    </svg>
  )
}

const Square = ({ square, addValue }) => {
  const piece = square === 1 ? <BlackPiece /> : square === 2 ? <WhitePiece /> : ''

  return (
    <SquareButton
      onClick={ addValue }
    >
      { piece }
    </SquareButton>
  )
}

export default Square
