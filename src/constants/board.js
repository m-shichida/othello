import { setBoard, setIsPutPiece } from '../helpers/board'

export const BLANK_PIECE = 0
export const BLACK_PIECE = 1
export const WHITE_PIECE = 2

export const CHECKLIST = [
  [0, -1], [1, -1], [1, 0], [1, 1],
  [0, 1], [-1, 1], [-1, 0], [-1, -1]
]

export const BOARD = setBoard()
export const IS_PUT_PIECE = setIsPutPiece()
