import {
  BOARD,
  BLANK_PIECE,
  BLACK_PIECE,
  WHITE_PIECE,
} from '../constants/board'

export const setBoard = () => {
  const board = new Array(8)
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(8)
  }

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      board[x][y] = BLANK_PIECE
    }
  }

  board[3][3] = BLACK_PIECE
  board[4][3] = WHITE_PIECE
  board[3][4] = WHITE_PIECE
  board[4][4] = BLACK_PIECE

  return board
}

export const setIsPutPiece = () => {
  const isPutPiece = new Array(8)
  for (let i = 0; i < isPutPiece.length; i++) {
    isPutPiece[i] = new Array(8)
  }

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      isPutPiece[x][y] = false
    }
  }

  return isPutPiece
}

export const boardInit = () => {
  if (!window.confirm('リセットしてもよろしいですか？')) {
    return false
  }

  return setBoard()
}
