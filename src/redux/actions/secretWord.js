import { SET_SECRET_WORD } from '../types';
import axios from 'axios';

/**
 * Async action creator that sets the secret word
 * @returns {Function} The function that dispatch the action that sets the secret word
 */
export const setSecretWord = () => dispatch => {
    return axios.get('http://localhost:5000/randomword').then(response => {
        dispatch({ type: SET_SECRET_WORD, payload: response.data })
    })
}