import * as React from 'react';
import styled from "styled-components";
import {BoardPiece} from "../types/board";

const BoardContainer = styled.div`
margin: auto;
width: 30%;
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 2rem;
margin-bottom: 2rem;
`;

const Box = styled.div`
background-color: #C86752;
height: 10rem;
width: 10rem;
border: 2px solid black;
`;

interface Props {
    boardSize: number;
    boardState: BoardPiece[];
    updateBoardState: (index: number, newPiece: BoardPiece) => void;
}

const Board: React.FC<Props> = ({boardSize, boardState, updateBoardState}) => {

    return (
        <BoardContainer>
            {boardState.map((piece, index) => {
                return <Box onClick={() => updateBoardState(index, BoardPiece.CROSS)} key={index}/>
            })}
        </BoardContainer>
        )
}

export default Board