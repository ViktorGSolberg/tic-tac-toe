import * as React from 'react';
import {useState} from 'react';
import Board from "./frontend/Components/Board/Board";
import {BoardPiece} from "./frontend/Types/types";
import {gameIsOver} from "./frontend/Utils/utils";

const App: React.FC = () => {
    const boardSize = 3 * 3;

    const [boardState, setBoardState] = useState<BoardPiece[]>(Array(boardSize).fill(BoardPiece.BLANK));

    const updateBoardState = (index: number, newPiece: BoardPiece) => {
        setBoardState((prevState) => {
            return prevState.map((piece, idx) => {
                return index === idx ? newPiece : piece
            })
        })
    }

    return (
        <>
            {!gameIsOver(boardState).gameIsOver ?
                <Board boardState={boardState} updateBoardState={updateBoardState}/> : <p>game over</p>
            }
        </>
    )
}

export default App
