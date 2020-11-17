import actions from './index';
import {FAIL, SUCCESS} from '../types'

describe('Success correct guess action', ()=>{
    it('Should return an object with a specific type for correct guess action', ()=>{
        const action = actions.correctGuess();
        expect(action).toEqual({ type: SUCCESS });
    });

    it('Should return an object with a specific type for incorrect guess action', ()=>{
        const action = actions.incorrectGuess();
        expect(action).toEqual({ type: FAIL });
    });
});