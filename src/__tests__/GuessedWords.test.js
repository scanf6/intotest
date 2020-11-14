import React from 'react';
import GuessedWords from "../components/GuessedWords";
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../testUtils';

const defaultProps = {
    guessedWords: []
}

const guessedWords = [
    { word: 'Lucky', numberMatch: 4 },
    { word: 'Left', numberMatch: 1 },
    { word: 'Luck', numberMatch: 4 },
]

/**
 *
 * @param {object} props - A list of props to pass to the shallow rendered component
 */
function setup(props = {}) {
    const setupProps = { ...defaultProps, ...props };
    const wrapper = shallow(<GuessedWords {...setupProps}/>);
    return wrapper;
}

describe('GuessedWords component', ()=>{
    it('Should render GuessedWords component without errors', () => {
        let wrapper = setup();
        let component = findByTestAttr(wrapper, 'guessedwords-component')
        expect(component.length).toBe(1)
    })

    it('Should not throw an error with expected props', ()=>{
        checkProps(GuessedWords, { guessedWords });
    })

    describe('There is no guessed words to list', ()=>{
        it('Should render not render a list of words', () => {
            let wrapper = setup();
            let component = findByTestAttr(wrapper, 'guessed-word');
            expect(component.length).toBe(0);
        })
        it('Should render an instruction text message inviting to enter a word if there is no guessed words yet', () => {
            let wrapper = setup();
            let component = findByTestAttr(wrapper, 'instructions');
            expect(component.length).toBe(1)
        })
    })

    describe('There is  guessed words to list', ()=>{
        it('Should render the list of guessed words container', () => {
            let wrapper = setup({ guessedWords });
            let component = findByTestAttr(wrapper, 'guessed-words');
            expect(component.length).toBe(1);
        })

        it('Should render the list of guessed words if there are guessed words', () => {
            let wrapper = setup({ guessedWords });
            let component = findByTestAttr(wrapper, 'guessed-word');
            expect(component.length).toBe(guessedWords.length);
        })
    })

});