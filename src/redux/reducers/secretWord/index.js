import { SET_SECRET_WORD } from "../../types";
/**
 * @param {string} state - The secret word
 * @return {string} The secret word
 */
export default (state = null, action) => {
    switch(action.type) {
        case SET_SECRET_WORD:
            return action.payload;
        default:
            return state;
    }
}