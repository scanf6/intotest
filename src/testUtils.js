import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import { ShallowWrapper } from "enzyme";
import checkPropTypes from "check-prop-types";

/**
 * @param {ShallowWrapper} wrapper - A wrapper of the component
 * @param {string} value  - The value of the data attribute to search for
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

/**
 * testStore - A function that create a test store with all our app middleares and the root reducer
 * @param {object} initialState - The initial state of the store
 */
export const testStore = (initialState) => {
    const middlewares = [thunk];
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
    const store = createStoreWithMiddlewares(rootReducer, initialState);
    return store;
}