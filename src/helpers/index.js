/**
 * This function count the number of letters that the guessedWord have in common with the final answer word
 * @param {string} guessedWord - The woed guessed by the user
 * @param {string} finalWord - The answer word to the game that the user should find
 * @returns {number} The number of letter that the guessedWord have in common with the finalWord
 */
export const getLetterMatchCount = (guessedWord, finalWord) => {
    let wordsCount = 0;
    const guessedWordArray = Array.from(new Set(guessedWord.split('')));
    const finalWordArray = Array.from(new Set(finalWord.split('')));

    guessedWordArray.forEach(letter => {
        if(finalWordArray.includes(letter)) wordsCount += 1;
    });
    return wordsCount;
};