import { ADD_WORD, SUCCESS } from "../types";
import { getLetterMatchCount } from "../../helpers";

export const addGuessedWord = (guessedWord) => (dispatch, getState) => {
    const secretWord = getState().secretWord;
    dispatch({ type: ADD_WORD, payload: { word: guessedWord, numberMatch: getLetterMatchCount(guessedWord, secretWord) } });

    if(guessedWord === secretWord) {
        dispatch({ type: SUCCESS });
    }
}