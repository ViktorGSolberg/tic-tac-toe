export enum BoardPiece {
    CROSS = 'CROSS',
    CIRCLE = 'CIRCLE',
    BLANK = 'BLANK',
}

export interface EndOfGame {
    gameIsOver: boolean;
    winner: BoardPiece;
}
