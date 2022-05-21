import * as React from 'react';
import styled from "styled-components";
import {BoardPiece, GameState} from "../../Types/types";
import BoardSquare from "./BoardSquare";
import {numberOfRemainingTurns} from "../../Utils/utils";
import {fetchGameData, saveGameData} from "../../../backend/firebase";
import RegularButton from "../../Common/RegularButton";

const Container = styled.div`
display: flex;
flex-direction: column;
`;

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
    updateSquareState: (index: number, newPiece: BoardPiece) => void;
    updateBoardState: (boardState: GameState) => void;
}

const Board: React.FC<Props> = ({boardState, updateSquareState, updateBoardState}) => {
    const remainingTurns = numberOfRemainingTurns(boardState);
    const playerTurn = remainingTurns % 2 === 1 ? BoardPiece.CROSS : BoardPiece.CIRCLE;

    const downloadGameState = async () => {
        const storedGameState = await fetchGameData();
        if (storedGameState.gameState.length === boardState.length) {
            updateBoardState(storedGameState);
        }
    }

    return (
        <Container>
            <BoardContainer>
                {boardState.map((piece, index) => {
                    return <BoardSquare id={index} playerTurn={playerTurn} squareState={piece}
                                        updateSquareState={updateSquareState} key={index}/>
                })}
            </BoardContainer>
            <RegularButton onClick={downloadGameState}>
                Download Game
            </RegularButton>
            <RegularButton onClick={() => saveGameData(boardState)}>
                Save game
            </RegularButton>
        </Container>
    )
}

export default Board