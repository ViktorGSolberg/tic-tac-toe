import * as React from 'react';
import styled from "styled-components";
import {BoardPiece} from "../../Types/types";
import circle from "../../Graphics/circle.svg";
import cross from "../../Graphics/cross.svg";


const Box = styled.div`
background-color: #C86752;
height: 10rem;
width: 10rem;
border: 2px solid black;
display: flex;
justify-content: center;
cursor: pointer;
`;

const PieceContainer = styled.img`height: 5rem; width: 5rem; align-self: center;`

interface Props {
    id: number;
    playerTurn: BoardPiece;
    squareState: BoardPiece;
    updateSquareState: (index: number, newPiece: BoardPiece) => void;
}

const BoardSquare: React.FC<Props> = ({id, playerTurn, squareState, updateSquareState}) => {

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
                updateSquareState(id, playerTurn)
            }
        }}>
            {squareState !== BoardPiece.BLANK &&
                <PieceContainer src={pieceSvg} alt={pieceAlt(squareState)}/>
            }
        </Box>
    )
}

export default BoardSquare