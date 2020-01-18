import React from 'react'
import Board from '../Board'
import styles from './styles'

const {
  Container,
  BoardContainer,
  GameInfo
} = styles

const Game = () => {
  return (
    <Container>
      <BoardContainer>
        <Board />
      </BoardContainer>
      <GameInfo>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </GameInfo>
    </Container>
  );
}

export default Game;
