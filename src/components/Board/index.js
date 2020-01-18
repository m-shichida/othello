import React, { useState } from 'react'
import Square from '../Square'
import styles from './styles'

const { Status, BoardRow } = styles

const Board = () => {
  let defaultBoard = Array(64).fill(null)
  defaultBoard[27] = '●'
  defaultBoard[28] = '○'
  defaultBoard[35] = '○'
  defaultBoard[36] = '●'

  const [squares, setSquares] = useState(defaultBoard)
  const [IsFirstStrike, setIsFirstStrike] = useState(true)

  const status = 'Next player: ' + (IsFirstStrike ? 'あなた' : '相手');

  const handleClick = (i) => {
    const newSquares = squares.concat()
    if (newSquares[i] === null) {
      newSquares[i] = IsFirstStrike ? '●' : '○';
      setSquares(newSquares)
      setIsFirstStrike(!IsFirstStrike)
    }
  }

  const renderSquare = (start) => {
    return (
      Array.apply(null, new Array(8)).map((_v, index) =>
        {
          const squareIndex = start + index
          return (
            <Square
              key={ squareIndex }
              piece={ squares[squareIndex] }
              addValue={ () => handleClick(squareIndex) }
            />
          )
        }
      )
    )
  }

  return (
    <>
      <Status>{ status }</Status>
      <BoardRow>
        { renderSquare(0) }
      </BoardRow>
      <BoardRow>
        { renderSquare(8) }
      </BoardRow>
      <BoardRow>
        { renderSquare(16) }
      </BoardRow>
      <BoardRow>
        { renderSquare(24) }
      </BoardRow>
      <BoardRow>
        { renderSquare(32) }
      </BoardRow>
      <BoardRow>
        { renderSquare(40) }
      </BoardRow>
      <BoardRow>
        { renderSquare(48) }
      </BoardRow>
      <BoardRow>
        { renderSquare(56) }
      </BoardRow>
    </>
  );
}

export default Board;
