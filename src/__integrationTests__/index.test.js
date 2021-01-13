import { testStore } from "../testUtils";
import moxios from "moxios";
import actions from "../redux/actions";

describe('Integration Test: Dispatching a guess word action', ()=>{
    const initialState = {
        secretWord: 'lucky',
        success: false,
        guessedWords: []
    }

    let store;
    beforeEach(()=>{
        store = testStore(initialState);
    })

    describe('Dispatching add guess word and word is correct', ()=>{
        it('Should have the expected state', ()=>{
          store.dispatch(actions.addGuessedWord('lucky'));
          const newState = store.getState();
              const expectedState = {
              ...initialState,
              success: true,
              guessedWords: [{ word: 'lucky', numberMatch: 5}]
          }
          expect(newState).toEqual(expectedState);
        })

    });

    describe('Dispatching add guess word and word is not correct', ()=>{
        it('Should have the expected state', ()=>{
            store.dispatch(actions.addGuessedWord('party'));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{ word: 'party', numberMatch: 1}]
            }
            expect(newState).toEqual(expectedState);
        })
    });
});

describe('Dispatching a SET SECRET WORD action', ()=>{
    beforeEach(()=>{
        moxios.install();
    });

    afterEach(()=>{
        moxios.uninstall();
    })

    it('Should set the secret word', ()=>{
        const secretWord = 'strong';
        const store = testStore();

        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord
            })
        });

        return store.dispatch(actions.setSecretWord()).then(()=>{
            const newState = store.getState();
            expect(newState.secretWord).toBe(undefined)
        })
    });

});