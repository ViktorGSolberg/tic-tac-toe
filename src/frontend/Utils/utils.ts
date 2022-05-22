import {BoardPiece, EndOfGame} from "../Types/types";

export const gameIsOver = (gameState: BoardPiece[]): EndOfGame => {
    const endOfGame: EndOfGame = {
        gameIsOver: false,
        winner: BoardPiece.BLANK,
    }

    if (playerHasWon(gameState, BoardPiece.CROSS)) {
        return {...endOfGame, gameIsOver: true, winner: BoardPiece.CROSS}
    } else if (playerHasWon(gameState, BoardPiece.CIRCLE)) {
        return {...endOfGame, gameIsOver: true, winner: BoardPiece.CIRCLE}
    } else if (numberOfRemainingTurns(gameState) < 1) {
        return {...endOfGame, gameIsOver: true}
    }
    return endOfGame;
}

export const numberOfRemainingTurns = (boardState: BoardPiece[]) =>
    boardState.reduce((acc, piece) => (piece === BoardPiece.BLANK ? acc + 1 : acc), 0);

const playerHasWon = (gameState: BoardPiece[], player: BoardPiece): boolean => {
    if (gameState[0] === player && gameState[1] === player && gameState[2] === player) {
        return true;
    } else if (gameState[3] === player && gameState[4] === player && gameState[5] === player) {
        return true;
    } else if (gameState[6] === player && gameState[7] === player && gameState[8] === player) {
        return true;
    } else if (gameState[0] === player && gameState[3] === player && gameState[6] === player) {
        return true;
    } else if (gameState[1] === player && gameState[4] === player && gameState[7] === player) {
        return true;
    } else if (gameState[2] === player && gameState[5] === player && gameState[8] === player) {
        return true;
    } else if (gameState[0] === player && gameState[4] === player && gameState[8] === player) {
        return true;
    } else if (gameState[2] === player && gameState[4] === player && gameState[6] === player) {
        return true;
    }
    return false;
}