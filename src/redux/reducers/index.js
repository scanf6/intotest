import { combineReducers } from 'redux';
import successReducer from './success';
import guessedWordsReducer from './guessedWords';

export default combineReducers({
    success: successReducer,
    guessedWords: guessedWordsReducer
});