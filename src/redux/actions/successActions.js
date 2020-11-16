import { SUCCESS } from '../types';

/**
 * correctGuess action creator
 * @param {Function} dispatch - dispatch function of Redux Thunk
 * @returns {object} Returns an object with a type propert
 */
export const correctGuess = dispatch => ({ type: SUCCESS })