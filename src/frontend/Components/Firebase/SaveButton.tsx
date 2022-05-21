import * as React from 'react';
import {BoardPiece} from "../../Types/types";
import {saveGameData} from "../../../backend/firebase";
import styled from "styled-components";

interface Props {
    boardState: BoardPiece[];
}

const SaveGameButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 2rem;
  margin: 1rem 1rem;
  cursor: pointer;
  width: 16rem;
  align-self: center;
`;

const SaveButton: React.FC<Props> = ({boardState}) => {

    const saveGame = (boardState: BoardPiece[]) => {
        saveGameData(boardState)
    }

    return (
        <SaveGameButton onClick={() => saveGame(boardState)}>
            Save game
        </SaveGameButton>
    )
}

export default SaveButton;