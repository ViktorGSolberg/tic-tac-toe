import * as React from 'react';
import {BoardPiece} from "../../Types/types";
import {saveGameData} from "../../../backend/firebase";
import RegularButton from "../../Common/RegularButton";

interface Props {
    boardState: BoardPiece[];
}

const SaveButton: React.FC<Props> = ({boardState}) => {

    const saveGame = (boardState: BoardPiece[]) => {
        saveGameData(boardState)
    }

    return (
        <RegularButton onClick={() => saveGame(boardState)}>
            Save game
        </RegularButton>
    )
}

export default SaveButton;
