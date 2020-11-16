import { SUCCESS, FAIL } from '../types';

/**
 * successReducer - Reducer
 * @param {boolean} state - The initial success state of th app
 * @param {object} action - The action object
 */
const successReducer = (state = false, action) => {
    switch(action.type) {
        case SUCCESS:
            return true;
        case FAIL:
            return false;
        default:
            return state;
    }
}

export default successReducer;