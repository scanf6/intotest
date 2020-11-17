import { ADD_WORD } from "../../types";
/**
 * guessedWordsReducer - Reducer
 * @param {Array} state - An array of guessed words objects
 * @param {object} action - An action object with a type and a payload
 */
const guessedWordsReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_WORD:
            return [...state, action.payload];
        default:
            return state;
    }
    return state;
}

export default guessedWordsReducer;