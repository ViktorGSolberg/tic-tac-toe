import {initializeApp} from "firebase/app";
import {child, get, getDatabase, ref, set} from "firebase/database";
import {BoardPiece, GameState} from "../frontend/Types/types";

const firebaseConfig = {
    apiKey: "AIzaSyA2kGkWSI7YCC40g7b7m1ZBWnqSNMX27-Y",
    authDomain: "tic-tac-toe-4676b.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-4676b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tic-tac-toe-4676b",
    storageBucket: "tic-tac-toe-4676b.appspot.com",
    messagingSenderId: "930687640921",
    appId: "1:930687640921:web:97e38b1aee57494c011848"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export const saveGameData = (gameState: BoardPiece[]) => {
    set(ref(database, 'tic-tac-toe'), {
        gameState: gameState,
    })
}

export const fetchGameData = async (): Promise<GameState> => {
    let emptyGameState = {gameState: [BoardPiece.BLANK]} as GameState;
    await get(child(ref(database), 'tic-tac-toe')).then((snapshot) => {
        if (snapshot.exists()) {
            emptyGameState = snapshot.val() as GameState
        }
    }).catch((error) => {
        console.error(error);
    });
    return emptyGameState;
}

