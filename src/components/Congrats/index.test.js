import React from "react";
import Congrats from ".";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../testUtils";

/**
 * Function to return a component wrapper
 * @param {object} props - The component props
 * @returns {ShallowWrapper} A shallowrapper component
 */
function setup(props = {}) {
    return shallow(<Congrats {...props} />)
}

describe('Congrats Component', ()=> {
    it('Should render without errors', ()=> {
        const wrapper = setup({ success: true });
        const component = findByTestAttr(wrapper, 'congrats-component');
        expect(component.length).toBe(1);
    });

    it('Should render success message when passing success prop with value true', ()=> {
        const wrapper = setup({ success: true });
        const component = findByTestAttr(wrapper, 'message');
        expect(component.text().length).not.toBe(0);
    });

    it('Should render no message when passing success prop with value false', ()=> {
        const wrapper = setup({ success: false });
        const component  = findByTestAttr(wrapper, 'message');
        expect(component.text().length).toBe(0);
    });

    it('Should receive expected props', () => {
        const expectedProps = { success: true };
        checkProps(Congrats, expectedProps)
    });
});