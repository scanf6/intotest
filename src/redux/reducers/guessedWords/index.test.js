import guessedWordsReducer from '.';
import { ADD_WORD } from '../../types';

describe('guessedWordsReducer test', ()=>{
    it('Should return an empty list if no actions is dispatched', ()=>{
        const result = guessedWordsReducer(undefined, {});
        expect(result).toEqual([]);
    });

    it('Should return a list of items with added item if action is ADD_GUESSED_WORD', ()=>{
        const result = guessedWordsReducer(undefined, { type: ADD_WORD, payload: { word: 'luck', numberMatch: 4 }});
        expect(result).toEqual([{ word: 'luck', numberMatch: 4 }])
    });
});