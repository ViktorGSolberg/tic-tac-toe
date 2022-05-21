import * as React from 'react';
import styled from "styled-components";
import {BoardPiece} from "../types/board";
import BoardSquare from "./BoardSquare";

const BoardContainer = styled.div`
margin: auto;
width: 30%;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 2rem;
margin-bottom: 2rem;
`;

interface Props {
    boardState: BoardPiece[];
    updateBoardState: (index: number, newPiece: BoardPiece) => void;
}

const Board: React.FC<Props> = ({boardState, updateBoardState}) => {

    const remainingTurns = boardState.reduce((acc, curr) => (curr === BoardPiece.BLANK ? acc + 1 : acc), 0);
    const playerTurn = remainingTurns % 2 === 1 ? BoardPiece.CROSS : BoardPiece.CIRCLE;
    console.log(boardState);
    return (
        <>
            <BoardContainer>
                {boardState.map((piece, index) => {
                    return <BoardSquare id={index} playerTurn={playerTurn} squareState={piece}
                                        updateBoardState={updateBoardState} key={index}/>
                })}
            </BoardContainer>
        </>
    )
}

export default Board