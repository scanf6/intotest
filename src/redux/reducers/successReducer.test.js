import successReducer from './successReducer';
import successActions from '../actions';

describe('Success Reducer', ()=>{
    it('Should return true if an action with type SUCCESS comes', ()=>{
        const result = successReducer(null, successActions.correctGuess());
        expect(result).toBe(true);
    });

    it('Should return false if an action with type FAIL comes', ()=>{
        const result = successReducer(null, successActions.incorrectGuess());
        expect(result).toBe(false);
    })
});