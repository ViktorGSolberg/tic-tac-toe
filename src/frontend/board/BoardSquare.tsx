import * as React from 'react';
import styled from "styled-components";
import {BoardPiece} from "../types/board";
import circle from "../graphics/circle.svg";
import cross from "../graphics/cross.svg";


const Box = styled.div`
background-color: #C86752;
height: 10rem;
width: 10rem;
border: 2px solid black;
display: flex;
justify-content: center;
`;

const PieceContainer = styled.img`height: 5rem; width: 5rem; align-self: center;`

interface Props {
    id: number;
    playerTurn: BoardPiece;
    squareState: BoardPiece;
    updateBoardState: (index: number, newPiece: BoardPiece) => void;
}

const BoardSquare: React.FC<Props> = ({id, playerTurn, squareState, updateBoardState}) => {

    const pieceSvg = squareState === BoardPiece.CROSS ? cross : circle;
    const pieceAlt = (squareState: BoardPiece) => {
        switch (squareState) {
            case BoardPiece.BLANK:
                return 'blank'
            case BoardPiece.CIRCLE:
                return 'circle'
            case BoardPiece.CROSS:
                return 'cross'
        }
    }

    return (
        <Box onClick={() => {
            if (squareState === BoardPiece.BLANK) {
                updateBoardState(id, playerTurn)
            }
        }}>
            {squareState !== BoardPiece.BLANK &&
                <PieceContainer src={pieceSvg} alt={pieceAlt(squareState)}/>
            }
        </Box>
    )
}

export default BoardSquare