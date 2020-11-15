const guessedWordsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_GUESSED_WORD':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default guessedWordsReducer;