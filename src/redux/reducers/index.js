import { combineReducers } from 'redux';
import successReducer from './success';
import guessedWordsReducer from './guessedWords';
import secretWordReducer from './secretWord';

export default combineReducers({
    success: successReducer,
    secretWord: secretWordReducer,
    guessedWords: guessedWordsReducer
});