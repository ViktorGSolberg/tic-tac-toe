import * as React from 'react';
import {useState} from 'react';
import Board from "./frontend/Components/Board/Board";
import {BoardPiece, GameState} from "./frontend/Types/types";
import {gameIsOver} from "./frontend/Utils/utils";
import GameOver from "./frontend/Components/GameOver/GameOver";

const App: React.FC = () => {
    const boardSize = 3 * 3;

    const [boardState, setBoardState] = useState<BoardPiece[]>(Array(boardSize).fill(BoardPiece.BLANK));

    const updateSquareState = (index: number, newPiece: BoardPiece) => {
        setBoardState((prevState) => {
            return prevState.map((piece, idx) => {
                return index === idx ? newPiece : piece
            })
        })
    }

    const updateBoardState = (boardState: GameState) => {
        setBoardState(boardState.gameState);
    }

    const gameOver = gameIsOver(boardState)

    return (
        <>
            <Board boardState={boardState} updateSquareState={updateSquareState} updateBoardState={updateBoardState}/> :
            {gameOver.gameIsOver &&
                <GameOver winner={gameOver.winner} boardState={boardState}/>
            }
        </>
    )
}

export default App
