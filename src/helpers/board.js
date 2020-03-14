export const BLANK_PIECE = 0
export const BLACK_PIECE = 1
export const WHITE_PIECE = 2

export const CHECKLIST = [
  [0, -1], [1, -1], [1, 0], [1, 1],
  [0, 1], [-1, 1], [-1, 0], [-1, -1]
]

export const BOARD = new Array(8)
export const IS_PUT_PIECE = new Array(8)

for (let i = 0; i < BOARD.length; i++) {
  BOARD[i] = new Array(8)
  IS_PUT_PIECE[i] = new Array(8)
}

for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    BOARD[x][y] = BLANK_PIECE
    IS_PUT_PIECE[x][y] = false
  }
}

BOARD[3][3] = BLACK_PIECE
BOARD[4][3] = WHITE_PIECE
BOARD[3][4] = WHITE_PIECE
BOARD[4][4] = BLACK_PIECE

export const boardInit = () => {
  if (!window.confirm('リセットしてもよろしいですか？')) {
    return false
  }

  let newSquares = BOARD.concat()

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      newSquares[x][y] = BLANK_PIECE
    }
  }
  newSquares[3][3] = BLACK_PIECE
  newSquares[4][3] = WHITE_PIECE
  newSquares[3][4] = WHITE_PIECE
  newSquares[4][4] = BLACK_PIECE

  return newSquares
}
