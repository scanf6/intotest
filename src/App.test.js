import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from "./testUtils";
import App from "./App";

/**
 * Function to return a component wrapper
 * @param {object} props - The component props
 * @returns {ShallowWrapper} A shallowrapper component
 */
function setup(props = {}) {
    return shallow(<App {...props} />)
}

describe("Root App component", ()=> {
    it('Should render without errors', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'jotto-app');
        expect(component.length).toBe(1);
    });
})