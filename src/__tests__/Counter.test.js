import React from 'react';
import Counter from '../components/Counter';
import { shallow } from 'enzyme';

function setup() {
  let wrapper = shallow(<Counter />);
  return wrapper;
}

function findByTestAttr(wrapper, attribute) {
  return wrapper.find(`[data-test='${attribute}']`);
}

describe('Counter Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without errors', () => {
    let counter = findByTestAttr(wrapper, 'counter-component');
    expect(counter.length).toBe(1);
  });

  it('Should render the button without errors', () => {
    const button = findByTestAttr(wrapper, 'button-counter');
    expect(button.length).toBe(1);
  });

  it('Should render the decrement button', ()=>{
    const button = findByTestAttr(wrapper, 'decrement-counter');
    expect(button.length).toBe(1);
  });

  it('Should display 0 as starting count', ()=>{
    const span = findByTestAttr(wrapper, 'count');
    const text = span.text();
    expect(text).toBe('0');
  });

  it('Should increment state when button is clicked', () => {
    const button = findByTestAttr(wrapper, 'button-counter');
    const counterInstance = wrapper.instance();
    button.simulate('click');
    expect(counterInstance.state.count).toBe(1);
  });

  it('Should decrement counter when decrement button is clicked', () => {
    const incrementButton = findByTestAttr(wrapper, 'button-counter');
    const decrementButton = findByTestAttr(wrapper, 'decrement-counter');
    const span = findByTestAttr(wrapper, 'count');
    incrementButton.simulate('click');
    decrementButton.simulate('click');
    expect(span.text()).toBe('0');
  });

  it('Should stay to 0 if the counter is already to 0', () => {
    const decrementButton = findByTestAttr(wrapper, 'decrement-counter');
    decrementButton.simulate('click');
    const span = findByTestAttr(wrapper, 'count');
    expect(span.text()).toBe('0');
  });

  it('Should display an error message if decrementing when counter is already 0', () => {
    const decrementButton = findByTestAttr(wrapper, 'decrement-counter');
    decrementButton.simulate('click');
    const errorMessage = findByTestAttr(wrapper, 'error-message');
    expect(errorMessage.length).toBe(1);

  });
});
