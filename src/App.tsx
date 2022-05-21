import * as React from 'react';
import {useState} from 'react';
import Board from "./frontend/board/Board";
import {BoardPiece} from "./frontend/types/board";

const App: React.FC = () => {
  const boardSize = 3*3;

  const [boardState, setBoardState] = useState<BoardPiece[]>(Array(boardSize).fill(BoardPiece.BLANK));

  const updateBoardState = (index: number, newPiece: BoardPiece) => {
    setBoardState((prevState) => {
      return prevState.map((piece, idx) => {
        return index === idx ? newPiece : piece
      })
    })
  }

  console.log(boardState);
  return (
      <Board boardSize={boardSize} boardState={boardState} updateBoardState={updateBoardState}/>
  )
}

export default App
