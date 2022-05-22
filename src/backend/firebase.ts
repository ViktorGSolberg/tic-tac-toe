import {initializeApp} from "firebase/app";
import {child, get, getDatabase, ref, set} from "firebase/database";
import {BoardPiece, GameState} from "../frontend/Types/types";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY as string,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
    databaseURL: import.meta.env.VITE_DATABASE_URL as string,
    projectId: import.meta.env.VITE_PROJECT_ID as string,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
    appId: import.meta.env.VITE_APP_ID as string
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

