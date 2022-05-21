import * as React from 'react';
import styled from "styled-components";
import {BoardPiece} from "../../Types/types";
import SaveButton from "../Firebase/SaveButton";

const ScreenContainer = styled.div`
margin: auto;
width: 30%;
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 2rem;
margin-bottom: 2rem;
`;

const EndingMessage = styled.h1`
    text-align: center;
    text-transform: uppercase;
    color: white;
`;

interface Props {
    winner: BoardPiece;
    boardState: BoardPiece[];
}

const GameOver: React.FC<Props> = ({winner, boardState}) => {

    const endingMessage = (winner: BoardPiece) => {
        switch (winner) {
            case BoardPiece.CROSS:
                return 'The cross is the winner!'
            case BoardPiece.CIRCLE:
                return 'The circle is the winner!'
            case BoardPiece.BLANK:
                return 'Draw'
        }
    }

    return (
        <ScreenContainer>
            <EndingMessage>{endingMessage(winner)}</EndingMessage>
            <SaveButton boardState={boardState}/>
        </ScreenContainer>
    )
}

export default GameOver