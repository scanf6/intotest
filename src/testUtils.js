import { ShallowWrapper } from "enzyme";
import checkPropTypes from "check-prop-types";

/**
 * @param {ShallowWrapper} wrapper - A wrapper of the component
 * @param {*} value  - The value of the data attribute to search for
 */
export const findByTestAttr = function(wrapper, value){
    return wrapper.find(`[data-test='${value}']`);
}

/**
 *
 * @param {ShallowWrapper} component - The component on which we will check props
 * @param {object} expectedProps - Expected Props object
 */
export const checkProps = function(component, expectedProps) {
    const propErrors = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    expect(propErrors).toBeUndefined();
}