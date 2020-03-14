import React, { useState, useEffect } from 'react'
import Square from '../Square'
import styles from './styles'

const { Turn, BoardRow, Piece } = styles

const BLANK_PIECE = 0
const BLACK_PIECE = 1
const WHITE_PIECE = 2

const CHECKLIST = [
  [0, -1], [1, -1], [1, 0], [1, 1],
  [0, 1], [-1, 1], [-1, 0], [-1, -1]
]

let defaultBoard = new Array(8)
for (let i = 0; i < defaultBoard.length; i++) {
  defaultBoard[i] = new Array(8)
}

for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    defaultBoard[x][y] = BLANK_PIECE
  }
}

defaultBoard[3][3] = BLACK_PIECE
defaultBoard[4][3] = WHITE_PIECE
defaultBoard[3][4] = WHITE_PIECE
defaultBoard[4][4] = BLACK_PIECE

const Board = () => {
  const [squares, setSquares] = useState(defaultBoard)
  const [currentPiece, setCurrentPiece] = useState(BLACK_PIECE)
  const [blackCount, setBlackCount] = useState(0)
  const [whiteCount, setWhiteCount] = useState(0)
  const turn = 'Next player: ' + (currentPiece === BLACK_PIECE ? '黒の番' : '白の番');

  const boardInit = () => {
    if (!window.confirm('リセットしてもよろしいですか？')) {
      return false
    }

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        let newSquares = squares.concat()
        newSquares[x][y] = BLANK_PIECE
        setSquares(newSquares)
      }
    }
    let newSquares = squares.concat()
    newSquares[3][3] = BLACK_PIECE
    newSquares[4][3] = WHITE_PIECE
    newSquares[3][4] = WHITE_PIECE
    newSquares[4][4] = BLACK_PIECE
    setCurrentPiece(BLACK_PIECE)
    setSquares(newSquares)
  }

  const reversePiece = (turnList, square) => {
    turnList.map((squareIndex, _i) => {
      let x = squareIndex[0]
      let y = squareIndex[1]

      square[y][x] = currentPiece
      setSquares(square)
    })
  }

  const setTurnList = (x, y) => {
    let nextPiece = currentPiece === BLACK_PIECE ? WHITE_PIECE : BLACK_PIECE
    let turnList = []
    let newSquares = squares.concat()

    CHECKLIST.map((list, _i) => {
      let yy = y + list[1]
      let xx = x + list[0]

      while(true) {
        if (xx < 0 || xx > 7 || yy < 0 || yy > 7) {
          turnList = []
          return false
        } else if (newSquares[yy][xx] === currentPiece) {
          if (turnList.length) {
            turnList.push([x, y])
            reversePiece(turnList, newSquares)
            setCurrentPiece(nextPiece)
          }
          return false
        } else if (newSquares[yy][xx] === BLANK_PIECE) {
          turnList = []
          return false
        } else if (newSquares[yy][xx] === nextPiece) {
          turnList.push([xx, yy])
          yy += list[1]
          xx += list[0]
        }
      }
    })
  }

  useEffect(() => {
    let black = 0
    let white = 0

    for (let i = 0; i < squares.length; i++) {
      const line = squares[i];
      for(let i = 0; i < line.length; i++) {
        switch (line[i]) {
          case BLACK_PIECE:
            black++
            setBlackCount(black)
            break
          case WHITE_PIECE:
            white++
            setWhiteCount(white)
            break
          default:
            break
        }
      }
    }
  })

  const handleClick = (x, y) => {
    if (squares[y][x] === BLANK_PIECE) {
      setTurnList(x, y)
    }
  }

  // 縦軸y, 横軸x
  const renderSquare = (boardRow, y) => {
    return (
      boardRow[y].map((square, x) => {
        return (
          <Square
            square={ square }
            key={ x }
            addValue={ () => handleClick(x, y) }
          />
        )
      })
    )
  }

  return (
    <>
      <button
        onClick={ boardInit }
      >
        最初からやり直す
      </button>
      <Turn>{ turn }</Turn>
      <Piece>●{ blackCount }</Piece>
      <Piece>○{ whiteCount }</Piece>
      <BoardRow>
        { renderSquare(squares, 0) }
      </BoardRow>
      <BoardRow>
        { renderSquare(squares, 1) }
      </BoardRow>
      <BoardRow>
        { renderSquare(squares, 2) }
      </BoardRow>
      <BoardRow>
        { renderSquare(squares, 3) }
      </BoardRow>
      <BoardRow>
        { renderSquare(squares, 4) }
      </BoardRow>
      <BoardRow>
        { renderSquare(squares, 5) }
      </BoardRow>
      <BoardRow>
        { renderSquare(squares, 6) }
      </BoardRow>
      <BoardRow>
        { renderSquare(squares, 7) }
      </BoardRow>
    </>
  );
}

export default Board;
