import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';

import Square from '../Square'
import styles from './styles'
import {
  BOARD,
  IS_PUT_PIECE,
  BLANK_PIECE,
  BLACK_PIECE,
  WHITE_PIECE,
  CHECKLIST,
} from '../../constants/board'
import { boardInit } from '../../helpers/board'

const { Turn, BoardRow, Piece } = styles

const Board = () => {
  const [isPut, setIsPut] = useState(IS_PUT_PIECE)
  const [squares, setSquares] = useState(BOARD)
  const [currentPiece, setCurrentPiece] = useState(BLACK_PIECE)
  const [blackCount, setBlackCount] = useState(0)
  const [whiteCount, setWhiteCount] = useState(0)
  const turn = 'Next player: ' + (currentPiece === BLACK_PIECE ? '黒' : '白');

  const reversePiece = (turnList, square) => {
    turnList.map((squareIndex, _i) => {
      let x = squareIndex[0]
      let y = squareIndex[1]

      square[y][x] = currentPiece
    })
    return setSquares(square)
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

  const showIsPut = () => {
    for (let y = 0; y < isPut.length; y++) {
      for(let x = 0; x < isPut[y].length; x++) {
        const nextPiece = currentPiece === BLACK_PIECE ? WHITE_PIECE : BLACK_PIECE
        let isThrewNextPiece = false
        isPut[y][x] = false

        CHECKLIST.map((list, _i) => {
          let yy = y + list[1]
          let xx = x + list[0]

          while(true) {
            if (xx < 0 || xx > 7 || yy < 0 || yy > 7) {
              isThrewNextPiece = false
              return false
            } else if (squares[y][x] !== BLANK_PIECE ) {
              isThrewNextPiece = false
              return false
            } else if (squares[yy][xx] === currentPiece) {
              if (isThrewNextPiece) {
                isPut[y][x] = true
                setIsPut(isPut)
              }
              return false
            } else if (squares[yy][xx] === BLANK_PIECE) {
              isThrewNextPiece = false
              return false
            } else if (squares[yy][xx] === nextPiece) {
              isThrewNextPiece = true
              yy += list[1]
              xx += list[0]
            }
          }
        })
      }
    }
  }

  useEffect(() => {
    showIsPut()
    let black = 0
    let white = 0

    for (let y = 0; y < squares.length; y++) {
      const boardRow = squares[y];
      for(let x = 0; x < boardRow.length; x++) {
        switch (boardRow[x]) {
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

  const handleInit = () => {
    setSquares(boardInit())
    setCurrentPiece(BLACK_PIECE)
  }

  const renderSquare = (boardRow, y) => {
    return (
      boardRow[y].map((square, x) => {
        return (
          <Square
            isPut = { isPut[y][x] }
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
      <Turn>{ turn }</Turn>
      <div style={{ marginBottom: '8px' }}>
        <Piece>●{ blackCount }</Piece>
        <Piece>○{ whiteCount }</Piece>
        <Button
          style={{ verticalAlign: 'top' }}
          onClick={ handleInit }
          color='primary'
          variant='contained'
        >
          reset
        </Button>
      </div>
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
