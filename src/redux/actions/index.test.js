import successAction from './index';
import {SUCCESS} from '../types'

describe('Success correct guess action', ()=>{
    it('Should return an object with a specific type', ()=>{
        const action = successAction.correctGuess();
        expect(action).toEqual({ type: SUCCESS });
    })
});