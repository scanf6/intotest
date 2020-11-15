import { getLetterMatchCount } from "./index";

describe('Helper function getLetterMatchCount', ()=>{
    let secretWord = 'party';

    it('Should return 0 if there are no letters in common', ()=>{
        const letterMatch = getLetterMatchCount('bones', secretWord);
        expect(letterMatch).toBe(0)
    });

    it('Should return 3 if there are 3 letters in common', ()=>{
        const letterMatch = getLetterMatchCount('train', secretWord);
        expect(letterMatch).toBe(3)
    });

    it('Should return 3 if there are 3 letters in common with duplictes', ()=>{
        const letterMatch = getLetterMatchCount('parka', secretWord);
        expect(letterMatch).toBe(3)
    });
})