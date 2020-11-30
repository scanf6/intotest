import * as success from './successActions';
import * as guessedWords from './guessedWordsActions';
import * as secretWord from './secretWord';
export default {
    ...success,
    ...guessedWords,
    ...secretWord
}