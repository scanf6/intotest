import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, testStore } from "./testUtils";
import App from "./App";

/**
 * Function to return a component wrapper
 * @param {object} props - The component props
 * @returns {ShallowWrapper} A shallowrapper component
 */
function setup(initialState) {
    const store = testStore(initialState)
    return shallow(<App store={store} />).childAt(0).dive()
}

describe("Root App component", ()=> {
    it('Should render without errors', () => {
        const wrapper = setup({
            success: false,
            guessedWords: []
        });
        const component = findByTestAttr(wrapper, 'jotto-app');
        expect(component.length).toBe(1);
    });
})